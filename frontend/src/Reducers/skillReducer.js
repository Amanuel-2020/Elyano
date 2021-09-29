import {
    ALL_SKILL_REQUEST,
    ALL_SKILL_SUCCESS,
    ALL_SKILL_FAIL,
    CLEAR_ERRORS
} from '../Constant/skillConstant';


export const skillReducer =  (state ={skills: []}, action) => {

    switch(action.type){
          case ALL_SKILL_REQUEST:
              return {
                  loading: true,
                  skills: []
              }
        case ALL_SKILL_SUCCESS: 
        return{
            loading: false,
            skills: action.payload.skills,
            skillsCount: action.payload.skillsCount
        }
        case ALL_SKILL_FAIL: 
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