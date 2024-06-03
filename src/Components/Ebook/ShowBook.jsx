
import React, { useState } from 'react'
import Navbar from '../Pages/Navbar'
import Onebook from './Onebook';
import Footer from '../Pages/Footer';
import data1 from "./data1";

export default function ShowBook() {

  let [search, setSearch] = useState("");
  let [books, setbooks] = useState([]);

  const apikey = "AIzaSyDju8-o99z7DuJcpwB0IL9jzrlyZHFr418";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apikey}&maxResults=40`;

  // const url = `https://www.googleapis.com/books/v1/volumes?q=java&&key=${apikey}`;

  let getBooks = async () => {
    try {
      // console.log("search value under main func "+search);
      let result = await fetch(url);
      let resultjson = await result.json();
      console.log(resultjson);
      if(resultjson && resultjson.items){
        const filterBook = (resultjson.items.filter(newBook => newBook.saleInfo && newBook.saleInfo.saleability !== "NOT_FOR_SALE"));
        setbooks(filterBook);
      }
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    let searchValue = event.target.value;
    setSearch(searchValue);
    // console.log(searchValue);
  }

  let handleSubmit = (event) => {
    try {
      event.preventDefault();
      getBooks();
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />

      <div className="container showBook m-5 ">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Library</h6>
          <h1 className="mb-5">e-Library - Search Your Books</h1>
        </div>

        <div className="d-flex justify-content-center">
          <form className="d-flex  m-2" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" onChange={handleChange} aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>

        <div>
          <div className="allbooks m-5 text-center wow fadeInUp">
            <h5 className="section-title bg-white text-center text-primary px-3">your Books </h5>
            <div className="dataBooks row g-4 justify-content-center m-5 " >
              {books.map((item) => (
                <Onebook book={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="allbooks m-5 text-center wow fadeInUp">
          <h5 className="section-title bg-white text-center text-primary px-3">Suggested Books </h5>
          <div className="dataBooks row g-4 justify-content-center m-5 " >
            {data1.map((item) => (
              <Onebook book={item} />
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}
