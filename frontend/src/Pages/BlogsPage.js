import React, { useEffect } from 'react';
import Tittle from '../Components/Tittle';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {getBlogs} from '../Actions/blogAction'
import {useDispatch, useSelector} from 'react-redux'
import {useAlert}  from 'react-alert'
import Loading from '../utils/Loading';
function BlogsPage() {
   const dispatch = useDispatch()
   const alert = useAlert()

   const {loading, blogs, error } = useSelector(state=> state.blogs)

     useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    useEffect(() =>{
          if(error){
              return alert.error(error)
          }
          dispatch(getBlogs())
    },[dispatch, error, alert])
    return (
        <>
         {loading ? <Loading/> : (
              <div>
              <div className="b-title">
                  <Tittle title={'Recent Blogs'} span={'Recent Blogs'} />
              </div>
              <div className="BlogsPage" data-aos="fade-up">
                  {
                     blogs && blogs.map(blog=>(
                          <div className="blog" key={blog._id}>
                              <div className="blog-content">
                                  <img src={blog.image.url} alt=""/>
                                  <a href={blog.link} className="blog-link">
                                      {blog.title}
                                  </a>
                              </div>
                          </div>
                     ))
                  }
              </div>
              
          </div>
         )}
        </>
       
    )
}

export default BlogsPage;
