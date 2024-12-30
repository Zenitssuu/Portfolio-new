import "./MiddleNavbar.css";
import { useState } from "react";
import { middleNavList } from "../../Data/data";

const MiddleNavbar = () => {
  const [list, setList] = useState(middleNavList);

  return (
    <nav className="middle_nav">
      <ul>
        {list?.map((item, index) => {
          return (
            <li
              key={index}
              style={{width: `${100/(list.length)}%`}}
              onClick={() => {
                setList((prev) => {
                  const newList = [...prev];
                  newList.forEach((el, ind) => {
                    if (el.value === item.value) el.active = true;
                    else el.active = false;
                  });
                  return newList;
                });
              }}
            >
              <a
                className={item.active ? "active" : ""}
                href={`#${item?.value}`}
                rel="noopener noreferrer"
              >
                {item?.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MiddleNavbar;
