import {
    ALL_SERVICE_REQUEST,
    ALL_SERVICE_SUCCESS,
    ALL_SERVICE_FAIL,
    CLEAR_ERRORS
} from '../Constant/servicesConstant'


export const serviceReducer = (state = {service: []}, action) =>{

    switch(action.type){
        case ALL_SERVICE_REQUEST:
            return {
                loading: true,
                services: []
            }
        case ALL_SERVICE_SUCCESS: 
            return{
                loading: false,
                services: action.payload.services,
                serviceCount: action.payload.serviceCount
            }
        case ALL_SERVICE_FAIL: {
            return{
                loading: false,
                error: action.payload
            }
        }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        default:
        return state;
    }
}