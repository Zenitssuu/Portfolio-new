import { aboutData, myselfData } from "../Data/data";
import photo from "../assets/Photo.png"

const About = ({ no }) => {
  return (
    <section id="about" className="about">
      <div className="section_heading">
        <div>
          <span className="color_green">0{no}.</span> About
        </div>
        <div></div>
      </div>
      <div className="about_flex_div">
        <div className="left">
          <div className="about_para mb-4">
            <p>
              Hello, I'm{" "}
              <span className="color_green" style={{ fontSize: "20px" }}>
                {myselfData?.name}
              </span>
              .
            </p>
            {aboutData.about_para.split("\n").map((el,index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
          <div className="about_para mb-4">
            <p>
              I'm a 3rd year student in  
              <span className="color_green mx-2">
                <b>Jalpaiguri Government Engineering College</b>
              </span>
              {/* from the past
              <span className="color_green mx-1">
                {aboutData.totWorkingYear}+
              </span>
              year. */}
            </p>
          </div>
          <div className="about_para">
            <p>Recently I've been working working in these technologies : </p>
          </div>
          <div>
            <div className="technical_skills">
              {aboutData.skills.map((el, ind) => {
                return (
                  <div key={ind} className="tech_skill_item mb-2">
                    <div className="pointer"></div>
                    <span>{el.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right passport_img_cont_outer">
          <div className="passport_img_container">
            <div className="img_box">
              {/* <div className="border_box"> */}
              <img
                src={photo}
                alt="_photo"
                rel="noopener"
              />

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
