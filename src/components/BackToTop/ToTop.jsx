import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
       setShowButton(true)
      } else {
        setShowButton(false)
      }
    };
  }, []);
  const backToTop = () => {
    //get to the top page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
    onClick={backToTop}
    className={` fixed bottom-16 right-5 lg:right-16 text-2xl z-10 font-bold ${showButton ? "visible" : "hidden"} transition-all duration-300 ease-in-out`}>
      <FaArrowUp />
    </button>
  );
}

export default ToTop;
