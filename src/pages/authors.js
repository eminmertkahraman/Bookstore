import { useState, useEffect } from "react";
import Books from "./books";

function Authors() {

    const [authors, setAuthors] = useState([]);
    const getAuthors = () => {
        fetch('authors.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setAuthors(data)
        })
    }

    useEffect(() => {
        getAuthors();
    }, [])
    console.log(authors);

    return (
        <>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Authors
                        </h2>
                    </div>
                    <div className="row">
                        {
                            authors.map((author) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <div className="box">

                                            <div className="img-box">
                                                <img src={`images/${author.Image}`} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h6>
                                                    {author.Name}
                                                </h6>
                                            </div>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex nibh, 
                                            congue ullamcorper pretium vitae, congue nec libero. Proin cursus laoreet metus. Donec vel gravida nulla. 
                                            In hac habitasse platea dictumst.
                                            </p>
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
export default Authors;