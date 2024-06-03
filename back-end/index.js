let express = require("express");
let mongoose = require("mongoose");
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
require("dotenv").config();

const port = 3000;
// let MongoURL = "mongodb://127.0.0.1:27017/eLearning";

let MongoURL = process.env.DB_URL;

main()
  .then(console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MongoURL);
}

let commentSchema = mongoose.Schema({
  name: String,
  image: {
    type: String,
    default:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",

    set: (v) =>
      v === ""
        ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
        : v,
  },
  rating: Number,
  comment: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

let Feedback = mongoose.model("Feedback", commentSchema);

app.post("/feedback/new", async (req, res) => {
  console.log(req.body);
  let { name, image, rating, comment, date } = req.body;
  let newFeedback = new Feedback({ name, image, rating, comment, date });
  await newFeedback.save();
  res.redirect("https://e-learning-six-iota.vercel.app/feedback");
});

app.get("/feedback", async (req, res) => {
  let data = await Feedback.find({});
  // console.log(data);
  res.send(data);
});

app.get("/feedback/:id", async (req, res) => {
  let { id } = req.params;
  let data = await Feedback.findOneAndDelete({ _id: id });
  // console.log(data);
  res.redirect("https://e-learning-six-iota.vercel.app/feedback");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
