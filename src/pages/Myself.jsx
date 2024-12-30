import { myData } from "../Data/constantData";
import { myselfData } from "../Data/data";

const Myself = () => {
  return (
    <section id="myself" className="myself">
      <div className="mb-4 my_name_is">Hi, my name is</div>
      <div className="name mb-4">
        <h2>{myselfData.name}</h2>
      </div>
      <div className="intro mb-4">
        <h2>{myselfData.intro}</h2>
      </div>
      <div className="intro_description mb-5">
        <p>{myselfData.intro_desc}</p>
      </div>
      <div className="lets_chat">
        <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="primary_btn">Let's Chat</button>
        </a>
        <a
          href={myData.resumeLink}
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
          className="myself_page_resume"
        >
          <button className="primary_btn ms-3">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Myself;
