import { Link } from "react-router-dom";

function navbar() {
    return (
        <div className="hero_area">
            <header className="header_section">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                        <span>
                            Bookstore
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/books">
                                    Books
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/authors">
                                    Authors
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                        </ul>
                        <div className="user_option">
                            <a href="">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default navbar;