import {
    ALL_SERVICE_REQUEST,
    ALL_SERVICE_SUCCESS,
    ALL_SERVICE_FAIL,
    CLEAR_ERRORS
} from '../Constant/servicesConstant'

import axios from 'axios'

export const getServices = () => async (dispatch) =>{
  try {
      dispatch({
          type: ALL_SERVICE_REQUEST
      })

      const {data} = await axios.get('/api/v1/services')
      dispatch({
          type: ALL_SERVICE_SUCCESS,
          payload: data
      })
  } catch (error) {
   dispatch({
       type: ALL_SERVICE_FAIL,
       payload: error.response.data.message
   })
  }
}

export const clearError =() => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}