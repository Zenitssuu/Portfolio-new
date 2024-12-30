import "./SocialMedia.css";
import { socialMediaLinks } from "../../Data/data";
import { myData } from "../../Data/constantData";

const SocialMedia = () => {
  return (
    <>
      <div className="left_socialmedia_icons_container">
        <div className="social_media_icon">
          <ul>
            {socialMediaLinks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    style={{ color: "inherit", textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent/>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="vertical_line_container">
          <div className="vertical_line"></div>
        </div>
      </div>
      <div className="right_socialmedia_icons_container">
        <div className="email_container">
          <b href={"mailto:" + myData.email}>
            {myData.email}
          </b>
        </div>
        <div className="vertical_line_container">
          <div className="vertical_line"></div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
