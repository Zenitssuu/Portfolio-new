import React, { useState } from "react"

const Experience = ({no}) => {
  // const [expDetails, setExpDetails] = useState(expDetailsData);

  // function handleChangeActiveCompany(id) {
  //   setExpDetails((prev) => {
  //     const newData = prev.map(item => {
  //       if(item.id===id) item.active=true;
  //       else item.active = false;
  //       return item;
  //     })
  //     return newData;
  //   })
  // }

  return (
    <section id="experience" className="experience">
      <div className="section_heading">
        <div><span className="color_green">0{no}.</span> Experience</div>
        <div></div>
      </div>
      {/* units */}
      <div className="experience_flex_div">
        {/* <div className="left">
          <ul>
            {expDetails.map((item, index) => {
              return (
                <li 
                  key={index} 
                  onClick={() => handleChangeActiveCompany(item.id)} 
                  className={item.active ? "active" : ""}
                >
                  {item.companyName}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="right">
          {expDetails.filter((el => el.active === true)).map((item, index) => {
            return (
              <React.Fragment key={index}>
                <h5>{item.role} <span>@{item.companyName}</span></h5>
                <p>{item.workDuration}</p>
                <ul className="company_exp_points">
                  {
                    item.points.map((pointItem, ind) => {
                      return (
                        <li key={ind}>
                          <div className="point_tag"></div>
                          <div>{pointItem.value}</div>
                        </li>
                      )
                    })
                  }

                </ul>
              </React.Fragment>
            )
          })}

        </div> */}
        <p>
        Although I haven't had the opportunity to gain formal industry experience yet, I have cultivated a strong foundation and profound knowledge through hands-on project development. By building and deploying multiple real-world applications, I have honed my technical skills, problem-solving abilities, and understanding of software development processes. These projects have allowed me to work with modern technologies, simulate industry challenges, and deliver solutions that prioritize functionality, scalability, and user experience. My proactive approach to learning and practical application has prepared me to excel in a professional setting and contribute meaningfully from day one.
        </p>
      </div>
    </section>
  )
}

export default Experience