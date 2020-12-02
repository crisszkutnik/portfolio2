import React from "react";
import "./header.scss";
import GH_LOGO from "../../assets/github";
import Mail from "../../assets/mail";
import Bottom from "./bottom/bottom"

export default function Header() {
  /*
    Better resize that is compatible with mobile devices
  */

  /*React.useEffect(() => {
    window.addEventListener("resize", resizeHeader);
    resizeHeader();
  }, [])

  const resizeHeader = () => {
    document.getElementById("header")
    .style.height = window.innerHeight + "px";

    let bottomsvg = document.getElementById("bottomsvg");
    let height = bottomsvg.getBoundingClientRect().height;

    bottomsvg.style.top = window.innerHeight - height + "px";
  }*/

  return (
    <div id="header">
      <div id="left-side">
        <div id="left-content">
          <div id="name-text">
            <p>Hello, I am</p>
            <h1>CRISTOBAL SZKUTNIK</h1>
            <h2>Systems enginnering student</h2>
          </div>
          <div id="description-text">
            <p>
              Hi! I am a 19 year old systems engineering student and full stack
              developer from Buenos Aires, Argentina. I am most into JavaScript
              and JS based frameworks like ReactJS, TypeScript and NodeJS.
              Currently not employed but working on several projects. Keep
              scrolling to know more about me!
            </p>
          </div>
          <div id="header-button">
            <span onClick={ () => window.scrollTo(0, window.innerHeight) }>Know me</span>
          </div>
        </div>
      </div>
    </div>
  )
}