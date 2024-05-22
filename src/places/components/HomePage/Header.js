import React from 'react'
import "./Header.css"
import headImg1 from "../../../Assets/code.webp";
import headImg2 from  "../../../Assets/cn.gif";
import headImg3 from "../../../Assets/cloud.gif";

const Header = () => {
  return (
    <>
        <div class="header">
			<div class="header-content">
				<h1>Without coding, <span>feels like nothing have to do</span></h1>
				<p>
					When it's taking about Crypto , blockchain or other technology
					termology, I always will have to be there!!<br />I'm always hunger of
					new technology.
				</p>
				<button id="header-ctn-btn">
					Lets start with Full Stack Development
				</button>
			</div>
			<div class="header-img">
				<div><img id="header-img-code" src={headImg1} alt="" /></div>
				<div>
					<img id="header-img-coding-boy" src={headImg2} alt="" />
				</div>
				<div><img id="header-img-cloud" src={headImg3} alt="" /></div>
			</div>
		</div>
    </>
  )
}

export default Header