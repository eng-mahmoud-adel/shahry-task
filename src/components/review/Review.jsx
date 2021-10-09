import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import '../../sass/components/_review.scss';
import Rating from '../rating/Rating';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/actions/reviews';

const Review = ({ review }) => {
    const [showComment, setShowComment] = useState(true);
    const [comment, setComment] = useState({
        profile_pic: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
        comment: '',
    });

    const showForm = () => {
        setShowComment((prevShow) => !prevShow);
    }

    const dispatch = useDispatch();

    const handleSubmit = (e, id, comment) => {
        e.preventDefault();
        dispatch(addComment(id, comment));
        setComment({
            ...comment,
            comment: ''
        });
    }

    return (
        <div className="review text-center">
            <div className="profile_pic">
                <img src={review.profile_pic} className="w-100 h-100" alt="profilePic" />
            </div>
            <h5>{review.name}</h5>
            <small className="text-muted">20 Dec 2020</small>
            <p className="review_title">{review.review_title}</p>
            <div className="review_rating">
                <div className={review.rate >= 5 ? "thumbs_up_icon" : "thumbs_down_icon"}>
                    {review.rate >= 5 ? <FaThumbsUp size={28} /> : <FaThumbsDown size={28} />}
                </div>
                <Rating rating={review.rate} showRate edit={false} />
            </div>
            <p className="px-5 mt-4 mb-5">{review.review_details}</p>

            {showComment && !review.comment.comment && <Button className="add_comment" onClick={showForm}>Add Comment</Button>}
            {!showComment && !review.comment.comment &&
                <Form className="px-5">
                    <Form.Group className="text-left">
                        <Form.Label>Your Comment</Form.Label>
                        <Form.Control as="textarea" rows={5} value={comment.comment} onChange={(e) => setComment({...comment, comment: e.target.value})} />
                    </Form.Group>
                    <Button onClick={(e) => handleSubmit(e, review.id, comment)} className="add_comment mt-3 mb-4">Add Comment</Button>
                </Form>
            }

            {review.comment.comment && <div className="comment_section mx-5 p-5">
                <p className="comment">{review.comment.comment}</p>
                <div className="comment_profile_pic">
                    <img src={comment.profile_pic} className="w-100 h-100" alt="profilePic" />
                </div>
            </div>}
        </div>
    )
}

export default Review;
