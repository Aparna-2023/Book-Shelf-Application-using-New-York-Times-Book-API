import { Row, Col, Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import { useState, useEffect } from "react";
import { getBooksList } from "../Api/Api";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../Redux/WishlistSlice';

export const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        getBooksList()
            .then((booksData) => {
                setBooks(booksData); 
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const isBookInWishlist = (book) => {
        return wishlist.some(item => item.book_details[0].title === book.book_details[0].title);
    };

    const toggleWishlist = (book) => {
        if (isBookInWishlist(book)) {
            dispatch(removeFromWishlist(book));
        } else {
            dispatch(addToWishlist(book));
        }
    };

    return (
        <>
            <div className="container">
                <h1 className="text-center">Best Selling Books</h1>
                <Row>
                    {books.map((book, index) => (
                        <Col md={4} key={index}>
                            <Card style={{ width: "18rem", marginBottom: "5px" }}>
                                <img alt={book.book_details[0].title} src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" />
                                <CardBody>
                                    <CardTitle tag="h5">{book.book_details[0].title}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        {book.book_details[0].author}
                                    </CardSubtitle>
                                    <CardText>{book.book_details[0].description}</CardText>

                                    <Row className="">
                                        <Col lg={6}>
                                            <Link to={`/${book.book_details[0].title}`} className="btn btn-primary">View More</Link>
                                        </Col>
                                        <Col lg={6} style={{ textAlign: 'right' }}>
                                            <i
                                                className={`bi ${isBookInWishlist(book) ? 'bi-heart-fill' : 'bi-heart'}`}
                                                style={{ cursor: 'pointer', color: isBookInWishlist(book) ? 'red' : 'black' }}
                                                onClick={() => toggleWishlist(book)}
                                            ></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};
