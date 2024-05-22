import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <>
        <div class="form-sec">
			<form action="" class="form-sty">
				<div class="form-div">
					<label class="form-lbl" for="">Enter your first name</label><br />
					<input class="form-input" type="text" placeholder="First name" />
				</div>
				<div class="form-div">
					<label class="form-lbl" for="">Enter your last name :</label><br />
					<input class="form-input" type="text" placeholder="Last name" />
				</div>

				<div class="form-div">
					<label class="form-lbl" for="">Enter Your email address :</label
					><br />
					<input
						class="form-input"
						type="text"
						placeholder="example@gmail.com"
					/>
				</div>
				<div class="form-div">
					<label class="form-lbl" for="">Select yor quiries :</label><br />
					<select class="form-sel" name="" id="">
						<option value="">Notes Problem</option>
						<option value="">Queston Need</option>
						<option value="">Subject Quiries</option>
						<option value="">Guidence Quiries</option>
						<option value="">Other</option>
					</select>
				</div>

				<div class="form-div">
					<label class="form-lbl" for="">Write yor message</label><br />
					<textarea
						class="form-textarea"
						name=""
						id=""
						cols="30"
						rows="10"
					></textarea>
				</div>
				<div class="form-div-sub">
					<button class="form-btn-sub">Submit</button>
				</div>
				<div class="form-div-sub-mob">
					<button class="form-btn-sub-mob">Submit</button>
				</div>
			</form>
		</div>
    </>
  )
}

export default Form