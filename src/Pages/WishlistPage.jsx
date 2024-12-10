import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

const WishlistPage = () => {
    const wishlist = useSelector((state) => state.wishlist);

    if (wishlist.length === 0) {
        return <p>Your wishlist is empty.</p>;
    }

    return (
        <div className="container">
            <h1 className="text-center">Your Wishlist</h1>
            <Row>
                {wishlist.map((book, index) => (
                    <Col md={4} key={index}>
                        <Card style={{ width: '18rem', marginBottom: '5px' }}>
                            <img alt={book.book_details[0].title} src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" />
                            <CardBody>
                                <CardTitle tag="h5">{book.book_details[0].title}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {book.book_details[0].author}
                                </CardSubtitle>
                                <CardText>{book.book_details[0].description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default WishlistPage;
