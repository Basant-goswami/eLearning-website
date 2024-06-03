import React from 'react'
import Coursecart from './Coursecart'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'

export default function Mongodb() {
    return (
        <>
            <Navbar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Programming Languages Tutorials</h1>
                    </div>
                    <div className="row g-2 justify-content-center">

                        <Coursecart link="http://localhost:8080/App Developer\Day - 38 (2023) MongoDB\44. MongoDB (Part 1)\01. The Mongo Shell.mp4" title="01. The Mongo Shell" desc="Introduction of Mongo Shell." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 38 (2023) MongoDB\44. MongoDB (Part 1)\03. Document _ Collection.mp4" title="02. Document _ Collection" desc="How to store Document Collection in mongodb." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 38 (2023) MongoDB\44. MongoDB (Part 1)\04. INSERT in DB (InsertOne).mp4" title="03. INSERT in DB (InsertOne)" desc="How to insert data into DB (InsertOne)." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 38 (2023) MongoDB\44. MongoDB (Part 1)\05. INSERT in DB (InsertMany).mp4" title="04. INSERT in DB (InsertMany)" desc="How to insert data into DB (InsertMany)." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 38 (2023) MongoDB\44. MongoDB (Part 1)\06. FIND in DB.mp4" title="05. FIND in DB" desc="Find elements or data in DB." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 38 (2023) MongoDB\44. MongoDB (Part 1)\08. UPDATE in DB.mp4" title="06. UPDATE in DB" desc="Learn how to Update data in DB." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 38 (2023) MongoDB\44. MongoDB (Part 1)\10. DELETE in DB.mp4" title="07. DELETE in DB" desc="Learn about how to Delete data in DB." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\01. What is mongoose-.mp4" title="08. What is mongoose" desc="What is mongoose ans its installation." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\03. Schema.mp4" title="09. Schema" desc="What is Schema." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\04. Models.mp4" title="10. Models" desc="What is mongoose Models." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\05. Insert in Mongoose.mp4" title="11. Insert in Mongoose" desc="Insert One or Many data in Mongoose." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\07. Find in Mongoose.mp4" title="12. Find in Mongoose" desc="Learn about Find in Mongoose." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\08. Update in Mongoose.mp4" title="13. Update in Mongoose" desc="How to Update data in Mongoose." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\11. Schema Validations.mp4" title="14. Schema Validations" desc="Learn about Schema Validations in mongoose." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 39 (2023)\45. MongoDB (Part 2)\12. SchemaType Options.mp4" title="15. SchemaType Options" desc="Learn What are the SchemaType Options in mongodb." />

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
