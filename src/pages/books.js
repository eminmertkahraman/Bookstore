import { useEffect, useState } from "react";

function Books() {

    const [books, setBooks] = useState([]);
    const [data, setData] = useState(books);
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
            setData(data)
        })
    }

    useEffect(() => {
        getBooks();
        setData(books);
    }, [])

    const search = (e) => {
        setData(books.filter(book => book.Name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <>

            <div class="search-container">
                <div class="search-bar">
                    <input onChange={search} type="text" class="search-input" placeholder="Search" />
                </div>
            </div>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="row">
                        {
                            data.map((book) => {
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
                </div>
            </section>
        </>
    )
}
export default Books;