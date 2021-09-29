import {
    ALL_BLOG_FAIL,
    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    CLEAR_ERRORS
}  from '../Constant/blogConstant'
import axios from 'axios'

export const getBlogs = () => async(dispatch) =>{
    try {
         dispatch({
             type: ALL_BLOG_REQUEST
         })
   const {data} = await axios.get('/api/v1/blogs')
        dispatch({
            type: ALL_BLOG_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_BLOG_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearError = () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}