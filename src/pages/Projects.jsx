import ProjectItem from "./ProjectItem";
import { projectData } from "../Data/data";

const Projects = ({no}) => {

  return (
    <section id="projects" className="projects">
      <div className="projects_section_heading">
        <div>
          <span className="color_green me-2">0{no}.</span>Some Things I've Built
        </div>
        <div></div>
      </div>

      <div className="projects_flex_div">
        {projectData?.map((projectItem,index) => {
          return (
            <ProjectItem
              key={index}
              imgAlign={!index%2 ? "left" : "right"}
              imgLink={projectItem.imgLink}
              projectName={projectItem.projectName}
              description={projectItem.description}
              tech_used={projectItem.tech_used}
              github={projectItem.github}
              live_link={projectItem.live_link}
            />
          )
        })}
      </div>
    </section>
  );
};

export default Projects;
