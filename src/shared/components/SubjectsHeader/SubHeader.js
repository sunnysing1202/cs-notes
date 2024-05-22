import React from 'react'
import "./SubHeader.css";
import cnImg1 from "../../../Assets/cn.gif";

const SubHeader = () => {
  return (
    <>
        <div class="header">
			<div class="header-content">
				<h1>Computer Network, <span>the backbone of Internet</span></h1>
				<p>
					A computer network is a system that connects two or more computing
					devices for transmitting and sharing information.
				</p>
				<img class="head-img" src={cnImg1} alt="" />
			</div>
			<div class="header-img desktop-head">
				<div><img id="header-img-code" src={cnImg1} alt="" /></div>
			</div>
		</div>

    </>
  )
}

export default SubHeader;