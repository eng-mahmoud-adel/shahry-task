import React, { useEffect, useState } from 'react';
import  { Modal, Button, Form } from 'react-bootstrap';
import Rating from '../rating/Rating';
import '../../sass/components/_baseModal.scss';
import { addReview } from '../../redux/actions/reviews';
import { useDispatch, useSelector } from 'react-redux';

const BaseModal = (props) => {
    const {reviews} = useSelector(state => state.reviews);
    
    const [review, setReview] = useState({
        id: '',
        name: 'John Doe',
        profile_pic: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
        published_at: '20/12/2020',
        review_title: '',
        review_details: '',
        rate: '',
        comment: {
            name: '',
            comment: ''
        }
    });
    
    const handleChangeRating = (newRating) => {
        setReview({...review, rate: newRating});
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log(review);
        dispatch(addReview(review));
        props.onHide();
        setReview({
            ...review,
            id: '',
            review_title: '',
            review_details: '',
            rate: '',
        });
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title>
                Add A review
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {/* review id */}
                <Form.Control type="hidden" value={review.id = reviews.length + 1} />

                <Form.Group className="text-left">
                    <Form.Label className="mb-0">Rating</Form.Label>
                    <Rating onChange={handleChangeRating} />
                </Form.Group>
                <Form.Group className="text-left">
                    <Form.Label>Review Title</Form.Label>
                    <Form.Control type="text" value={review.review_title} onChange={(e) => setReview({...review, review_title: e.target.value})} />
                </Form.Group>
                <Form.Group className="text-left">
                    <Form.Label>Review Details</Form.Label>
                    <Form.Control as="textarea" rows={3} value={review.review_details} onChange={(e) => setReview({...review, review_details: e.target.value})} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button type="submit" onClick={handleSubmit} className="review_button" disabled={review.review_title && review.review_details && review.rate ? false : true}>add review</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default BaseModal;
