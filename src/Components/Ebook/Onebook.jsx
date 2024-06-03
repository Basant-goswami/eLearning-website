import React from 'react'
import { Link } from 'react-router-dom'

export default function Onebook({ book }) {

    let cost = book.accessInfo.pdf.acsTokenLink;

    return (
        <>
            <div className="card m-4 bookCart" style={{ width: "18rem" }} data-wow-delay="0.1s">
                <img src={book.volumeInfo.imageLinks?.smallThumbnail} className="card-img-top pt-2" alt="..." />
                <div className="card-body">
                    <div>
                        <h5 className="card-title " style={{ color: "red" }}>{book.volumeInfo.title}</h5>
                        <p>Pages : {book.volumeInfo.pageCount}</p>
                        <p>Author : {book.volumeInfo.authors}</p>
                        <h5 className="card-title" >{book.saleInfo.saleability}</h5>

                        {book.saleInfo?.saleability === 'FREE' ? (
                            <div>
                                <a href={book.accessInfo?.pdf?.downloadLink ?? "Not Available "} >Download Pdf</a>
                            </div>
                        ) : (
                            <div>
                                <p>Price : {book.saleInfo?.retailPrice?.amount} {book.saleInfo?.retailPrice?.currencyCode}</p>
                                <a href={book.saleInfo?.buyLink}>Buy Now</a>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
