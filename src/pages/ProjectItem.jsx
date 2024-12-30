import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = ({
  imgAlign,
  imgLink,
  projectName,
  description,
  tech_used,
  github,
  live_link,
}) => {
  return (
    <div className="project_item_container_outer">
      <div className="project_item_container">
        <div>
          <div className={imgAlign === "left" ? "left_item" : "right_item"}>
            <a
              className="img_container_link"
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgLink} alt={"_projectItem"} rel="noopener" />
            </a>
          </div>
          <div className={imgAlign === "left" ? "right_item" : "left_item"}>
            <div className="project_details">
              <p
                className="featured_text"
                style={
                  imgAlign === "left"
                    ? { textAlign: "right" }
                    : { textAlign: "left" }
                }
              >
                Featured Porject
              </p>
              <h4
                className="project_name"
                style={
                  imgAlign === "left"
                    ? { textAlign: "right" }
                    : { textAlign: "left" }
                }
              >
                {projectName}
              </h4>
              <div className="project_description">
                <p
                  style={
                    imgAlign === "left"
                      ? { textAlign: "right" }
                      : { textAlign: "left" }
                  }
                >
                  {description}
                </p>
              </div>
              <div
                className="project_tech_used"
                style={
                  imgAlign === "left"
                    ? { justifyContent: "right" }
                    : { justifyContent: "left" }
                }
              >
                {tech_used?.map((techItem, index) => (
                  <b key={index}>{techItem}</b>
                ))}
              </div>
              <div
                className="project_links"
                style={
                  imgAlign === "left"
                    ? { justifyContent: "right" }
                    : { justifyContent: "left" }
                }
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={live_link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
