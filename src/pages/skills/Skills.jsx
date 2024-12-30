import "./Skills.css";
// import { Row, Col } from 'react-bootstrap';
import { skillsArr } from '../../Data/data';
import SkillItem from "./SkillItems.jsx";

const Skills = () => {

  return (
    <section id="skills" className="skills">
      <div className="section_heading">
        <div><span className="color_green">03.</span> Skills</div>
        <div></div>
      </div>
      <div className='skills_body'>
        <div className='skills_grid_container'>
          {skillsArr?.map((item, index) => {
            return (
              // <Col lg={3} md={3} sm={4} key={index} className="mb-5 flexbox">
                <SkillItem key={index} reactIcon={item.reactIcon} name={item.name} />
              // </Col>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills;