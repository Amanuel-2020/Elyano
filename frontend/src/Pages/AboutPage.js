import React, {useEffect} from 'react'
import Tittle from '../Components/Tittle'
import PersonalInfo from '../Components/PersonalInfo';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useDispatch, useSelector} from 'react-redux';
import {getSkills} from '../Actions/skillAction';
import {getServices} from '../Actions/serviceAtion';
import MetaData from '../utils/MetaData';
import Loading from '../utils/Loading';
import {useAlert } from 'react-alert'

function AboutPage() {
  const dispatch = useDispatch();
  const alert = useAlert();
//    dispatch the skill data


// select skill data
const {loading, skills, error, skillsCount} = useSelector(state => state.skills)

useEffect(() =>{
    if(error){
      return alert.error(error)
    }
    dispatch(getSkills());

}, [dispatch, alert, error])
const {services, serviceCount} = useSelector(state => state.services)

useEffect(() =>{
    if(error){
      return alert.error(error)
    }
    dispatch(getServices());

}, [dispatch, alert, error])

    useEffect(() => {
        
        AOS.init({duration: 2000})
    }, [])
    return (
         <>
         <MetaData  title={"About Me"}/>
         {loading ? <Loading/> : (
        <div className="AboutPage">
        <Tittle title={'About Me'} span={'About Me'} />
        <PersonalInfo />
        <Tittle title={'My Skills'} span={'My Skills'} />
        <div className="skillsContainer" data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom">
                      {skills && skills.map(skill=>(
                <SkillsSection skill={skill.SkillTitle} progress={`${skill.SkillProgress}%`} width={`${skill.SkillProgress}%`} />
                      ))}
        
        </div>

        <Tittle
         title={'Services'} 
         span={'Services'} 
         />
        <div className="ServiceContainer" data-aos="fade-up"
 data-aos-anchor-placement="center-bottom">
     {
         services && services.map(service =>(
            <ServicesSection
            image={service.Image.url} 
            title={service.title} 
            text={service.Description}
           />
         ))
     }           
        </div>

    </div>
         )}

        </>
    )
}

export default AboutPage;
