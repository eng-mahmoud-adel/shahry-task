import React, { useEffect } from 'react';
import Review from '../components/review/Review';
import { Row, Col } from 'react-bootstrap';
import '../sass/pages/_home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../redux/actions/reviews';

const Home = () => {
    const {reviews} = useSelector(state => state.reviews);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews());

    }, [dispatch, getReviews]);
    return (
        <Row className="home justify-content-center">
            {reviews.map(review => (
                <Col key={review.id} xs={11} md={8}>
                    <Review review={review} />
                </Col>
            ))}
        </Row>
    )
}

export default Home;
