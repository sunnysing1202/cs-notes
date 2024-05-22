import React from 'react'
import "./Testimonials.css"
import testiImg1 from "../../../Assets/person1.png";

const Testimonials = () => {
  return (
    <>
        <div class="testi-pp-div">
			<div class="testi-parent-div">
				<div class="testi-child-div">
					<img src={testiImg1} alt="" />
					<h3>Anuj Kumar Rathore</h3>
					<h4>Software Engineer</h4>
					<p>
						Hi there, Bob.I’m writing to ask if you wouldn’t mind giving us a
						short testimonial for our website. We’re updating a few pages, and
						I’m hoping to add something from you. It would link back to your
						site, so it’s actually a good thing for your SEO.Would this be ok
						with you? If this makes you even a little bit uncomfortable, no
						worries at all. But if you are ok with it, I can send you a very
						short blurb for you to review, or you can write a sentence or two
						and send it over. Whatever is easiest for you. Thank you, Bob!
					</p>
				</div>
				<div class="testi-child-div">
					<img src={testiImg1} alt="" />
					<h3>Anuj Kumar Rathore</h3>
					<h4>Software Engineer</h4>
					<p>
						Hi there, Bob.I’m writing to ask if you wouldn’t mind giving us a
						short testimonial for our website. We’re updating a few pages, and
						I’m hoping to add something from you. It would link back to your
						site, so it’s actually a good thing for your SEO.Would this be ok
						with you? If this makes you even a little bit uncomfortable, no
						worries at all. But if you are ok with it, I can send you a very
						short blurb for you to review, or you can write a sentence or two
						and send it over. Whatever is easiest for you. Thank you, Bob!
					</p>
				</div>
				<div class="testi-child-div">
					<img src={testiImg1} alt="" />
					<h3>Anuj Kumar Rathore</h3>
					<h4>Software Engineer</h4>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
						id laboriosam! Eveniet aut distinctio tempore molestias, fugit
						reiciendis accusantium nobis! Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Unde, provident.
					</p>
				</div>
			</div>
		</div>
		<hr />
    </>
  )
}

export default Testimonials