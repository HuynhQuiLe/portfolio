import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import {experiences} from '../constants/index'
import { SectionWrapper } from '../hoc'
import {textVariant} from '../utils/motion'
import {motion} from 'framer-motion'

const ExperienceCard = ({title, company_name, icon, iconBg, date, points}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={date}
      iconStyle={{background: iconBg}}
      icon = {
        <div className='flex justify-center items-center w-full h-full'>
          <img src={icon} alt={company_name} className='w-[60%] h-[60%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='font-bold text-white text-[24px]'>{title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
          {points.map ((point, index) => (
            <li key={index} className='text-white-100 text-[14px] tracking-wider pl-1' >{point}</li>
          ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div
      variants={textVariant()}  
      className='text-center'
    > 
      <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>

    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')