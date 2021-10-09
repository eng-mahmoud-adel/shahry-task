import dummyData from '../dummyData/data';
import { ADD_COMMENT, ADD_REVIEW, GET_REVIEWS } from "../actionTypes";

export const getReviews = () => (dispatch) => {
    const data = dummyData;
    try {
        dispatch({
            type: GET_REVIEWS,
            payload: data
        });

    } catch (error) {
        console.log(error);
    }
}

export const addReview = (review) => (dispatch) => {
    const data = dummyData;
    data.push(review);
    try {
        dispatch({
            type: ADD_REVIEW,
            payload: data
        });

    } catch (error) {
        console.log(error);
    }
}

export const addComment = (id, comment) => (dispatch) => {
    const data = dummyData;
    const review = data.find(review => review.id == id);
    review.comment = comment;

    try {
        dispatch({
            type: ADD_COMMENT,
            payload: data
        });

    } catch (error) {
        console.log(error);
    }
}
