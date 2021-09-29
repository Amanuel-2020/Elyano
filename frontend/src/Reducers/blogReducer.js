import {
    ALL_BLOG_FAIL,
    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    CLEAR_ERRORS
}  from '../Constant/blogConstant'


export const blogReducer = (state = {blogs: []} , action) =>{
      switch(action.type){
          case ALL_BLOG_REQUEST:
              return{
                  loading: true,
                  blogs: []
              }
          case ALL_BLOG_SUCCESS:
              return{
                  loading: false,
                  blogs: action.payload.blogs
              }
            case ALL_BLOG_FAIL: 
            return{
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