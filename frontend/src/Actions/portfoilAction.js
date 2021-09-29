import {
    ALL_PORTFOIL_REQUEST,
    ALL_PORTFOIL_SUCCESS,
    ALL_PORTFOIL_FAIL,
    CLEAR_ERRORS     
} from '../Constant/portfoilConstant'

import axios from 'axios'

export const getPortfoil = () => async(dispatch) =>{
    try {
        dispatch({
            type: ALL_PORTFOIL_REQUEST
        })
      const {data} = await axios.get('/api/v1/portfoils')
        dispatch({
            type: ALL_PORTFOIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PORTFOIL_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearError = () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}