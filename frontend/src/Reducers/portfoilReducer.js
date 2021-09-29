import {
    ALL_PORTFOIL_REQUEST,
    ALL_PORTFOIL_SUCCESS,
    ALL_PORTFOIL_FAIL,
    CLEAR_ERRORS     
} from '../Constant/portfoilConstant'


export const portfoilReducer = (state = {portfoils: []}, action) => {
      
       switch(action.type){
           case ALL_PORTFOIL_REQUEST:
               return {
                   loading: true,
                   portfoils: []
               }
           case ALL_PORTFOIL_SUCCESS:
               return {
                   loading: false,
                   portfoils: action.payload.portfoils
               }
            
            case ALL_PORTFOIL_FAIL: 
            return {
                loading: false,
                error: action.payload
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