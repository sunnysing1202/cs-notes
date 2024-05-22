import React from 'react'
import "../../../index.css"
import "./Subjects.css"
import img1 from "../../../Assets/web-dev.png";
import subImg2 from "../../../Assets/cn01.png";
import subImg3 from "../../../Assets/os01.png";
import subImg4 from "../../../Assets/cc01.png";

const Subjects = () => {
  return (
    <>
        <div class="sub">
			<div class="sub1">
				<div>
					<h2>Full Stack Development</h2>
					<p>All about HTML, CSS, Js, PHP, MERN</p>
					<a href="../html/web_dev.html"
						><button class="sub1-btn">Start Learning...</button></a
					>
				</div>
				<div id="sub1-pic"><img src={img1} alt="" /></div>
			</div>
			<div class="sub1">
				<div>
					<h2>Computer Network</h2>
					<p>Network, Throughput, Data Link Layer, Protocol, HTTP.</p>
					<a href="../html/cn.html"
						><button class="sub1-btn">Start Learning...</button></a
					>
				</div>
				<div id="sub1-pic"><img src={subImg2} alt="" /></div>
			</div>
			<div class="sub1">
				<div>
					<h2>Operating System</h2>
					<p>Kernel, Resourse Manangement, Files, Repository, FCFS, SJF.</p>
					<a href="../html/os.html"
						><button class="sub1-btn">Start Learning...</button></a
					>
				</div>
				<div id="sub1-pic"><img src={subImg3} alt="" /></div>
			</div>
			<div class="sub1">
				<div>
					<h2>Cloud Computing</h2>
					<p>All about HTML, CSS, Js, PHP, MERN</p>
					<a href="../html/cloud_c.html"
						><button class="sub1-btn">Start Learning...</button></a
					>
				</div>
				<div id="sub1-pic"><img src={subImg4} alt="" /></div>
			</div>
		</div>
    </>
  );
}

export default Subjects;