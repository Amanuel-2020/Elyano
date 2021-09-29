import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import motion from '../MotionDummy';
console.log(motion)

function MotionGraph() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className="portfolis">
          
                    <div data-aos="fade-up" className="portfolio" >
                        <div className="image-data">
                           <video width="380" height="340" controls>
                           <source src="https://res.cloudinary.com/elyano/video/upload/v1630928292/Graphics%20Design/video_2021-09-03_10-52-57_q8alxx.mp4" type="video/mp4" />
                           </video>
                        </div>
                       
                    </div> 
                    <div data-aos="fade-up" className="portfolio" >
                        <div className="image-data">
                           <video width="380" height="340" controls>
                           <source src="https://res.cloudinary.com/elyano/video/upload/v1630928283/Graphics%20Design/Taxiye_fzll9x.mp4" type="video/mp4" />
                           </video>
                        </div>
                       
                    </div> 
                    <div data-aos="fade-up" className="portfolio" >
                        <div className="image-data">
                           <video width="380" height="340" controls>
                           <source src="https://res.cloudinary.com/elyano/video/upload/v1630928280/Graphics%20Design/25_card-_1_mif82d.mp4" type="video/mp4" />
                           </video>
                        </div>
                       
                    </div> 
                    <div data-aos="fade-up" className="portfolio" >
                        <div className="image-data">
                           <video width="380" height="340" controls>
                           <source src="https://res.cloudinary.com/elyano/video/upload/v1630928279/Graphics%20Design/Save_Money_yxdrye.mp4" type="video/mp4" />
                           </video>
                        </div>
                       
                    </div> 
                    <div data-aos="fade-up" className="portfolio" >
                        <div className="image-data">
                           <video width="380" height="340" controls>
                           <source src="https://res.cloudinary.com/elyano/video/upload/v1630928279/Graphics%20Design/Eshi_Market_s7dokr.mp4" type="video/mp4" />
                           </video>
                        </div>
                       
                    </div> 
                    <div data-aos="fade-up" className="portfolio" >
                        <div className="image-data">
                           <video width="380" height="340" controls>
                           <source src="https://res.cloudinary.com/elyano/video/upload/v1630928276/Graphics%20Design/Ab_MOV_vwzsui.mp4" type="video/mp4" />
                           </video>
                        </div>
                       
                    </div> 
        </div>
    )
}

export default MotionGraph
