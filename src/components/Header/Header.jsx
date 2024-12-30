import "./Header.css";
import { useEffect, useRef } from "react";
import { pageSections } from "../../Data/data";
import { myData } from "../../Data/constantData";

const Header = () => {
  const headerRef = useRef();
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      // Get the current scroll position
      // console.log(window.pageYOffset)
      // console.log(lastScrollTopRef.current)
      const userAgent = navigator.userAgent.toLowerCase();
      // console.log(userAgent)

      if(window.pageYOffset===0) {
        lastScrollTopRef.current = 0;
        headerRef.current.className = "header_container"
      } else {
        let scrollTop = window.pageYOffset || lastScrollTopRef.current;

        if (scrollTop < lastScrollTopRef.current) {
          // Scrolling Up
          if(headerRef.current) {
            headerRef.current.className = "header_container"
          }
        } else {
          // Scrolling Down
          if(headerRef.current) {
            headerRef.current.className = "header_container hidden"
          }
        }
  
        // Update the last scroll position
        lastScrollTopRef.current = scrollTop;
      }
      
    });
  }, []);

  return (
    <div className={`header_container`} ref={headerRef}>
      <div className="logo_container">
        <div className="logo">
          <span>{"<"}</span>
          <span>{"Sid"}</span>
          <span>{"/>"}</span>
        </div>
      </div>
      <div className="nav_link_container">
        <nav>
          <ul>
            {pageSections.map((item, index) => {
              return (
                <li key={index}>
                  <span className="list_item">
                    <a href={`#${item.value}`} rel="noopener noreferrer">
                      {/* <span className="list_no">{`${index + 1}.`}</span> */}
                      {item.name}
                    </a>
                  </span>
                </li>
              );
            })}
            <li>
              <a
                href={myData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="primary_btn">Resume</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      
    </div>
  );
};

export default Header;
