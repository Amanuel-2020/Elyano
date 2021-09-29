import axios from "axios";
import {
    ALL_SKILL_REQUEST,
    ALL_SKILL_SUCCESS,
    ALL_SKILL_FAIL,
    CLEAR_ERRORS
} from '../Constant/skillConstant';


export const getSkills = () => async (dispatch) =>{
    try {
        dispatch({
            type: ALL_SKILL_REQUEST
        })
        
        const {data} = await axios.get('/api/v1/skills')

        dispatch({
            type: ALL_SKILL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_SKILL_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear error
export const clearError = () => (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}