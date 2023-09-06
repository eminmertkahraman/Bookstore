import { useEffect, useState } from "react";
import Books from "./books";
import { Link } from "react-router-dom/cjs/react-router-dom.min";



function Main() {

    const [books, setBooks] = useState([]);
    const getBooks = () => {
        fetch('books.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setBooks(data)
        })
    }

    useEffect(() => {
        getBooks();
    }, [])
    console.log(books);

    return (
        <>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Top Selling Books
                        </h2>
                    </div>
                    <div className="row">
                        {
                            books.slice(0, 8).map((book) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <div className="box">

                                            <div className="img-box">
                                                <img src={`images/${book.Image}`} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h6>
                                                    {book.Name}
                                                </h6>
                                                <h6>
                                                    Price:
                                                    <span>
                                                        {book.Price}
                                                    </span>
                                                </h6>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="btn-box">
                        <Link to="/books">
                            View All Books
                        </Link>
                    </div>
                </div>
            </section>
            <section className="why_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Why Shop With Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Fast Delivery
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Free Shiping
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Best Quality
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main;