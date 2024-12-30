
const SkillItem = ({ reactIcon: ReactIcon, name }) => {
  return (
    <div className="skill_item_container">
      {/* <span></span><span></span><span></span><span></span> */}
      <div className="skill_icon">
        <div className="skill_icon_svg_div">
          <ReactIcon /> {/* Render the icon component */}
        </div>
      </div>
      <h5 className="skill_name">{name}</h5>
    </div>
  );
};

export default SkillItem;