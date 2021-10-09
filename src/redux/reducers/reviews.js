import { ADD_COMMENT, ADD_REVIEW, GET_REVIEWS } from "../actionTypes";

const initialState= {
    reviews: [],
}

export const reviewsReducer = (prevState = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_REVIEWS:
            return {
                ...prevState,
                reviews: payload,
            } 

        case ADD_REVIEW:
            return {
                ...prevState,
                reviews: payload,
            }
            
        case ADD_COMMENT:
            return {
                ...prevState,
                reviews: payload,
            } 

        default:
            return prevState;
    }
}