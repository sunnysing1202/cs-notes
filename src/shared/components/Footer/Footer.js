import React from "react";
import "./Footer.css";
import ftrImg1 from "../../../Assets/github.svg";
import ftrImg2 from "../../../Assets/linkedin.svg"

const Footer = () => {
    return (
        <footer class="footer-sty">
			<div class="ftr-div1">
				<div><h2 id="ftr-h2">&copy;iClassNotes 2023</h2></div>
				<div class="ftr-div-visit">
					<a class="ftr-vst-a" href="">Report</a>
					<a class="ftr-vst-a" href="">Join us</a>
					<button id="ftr-btn-lin">
						<img src={ftrImg1} alt="" />
					</button>
					<button id="ftr-btn-git">
						<img src={ftrImg2} alt="" />
					</button>
				</div>
			</div>
		</footer>
    );
}

export default Footer;