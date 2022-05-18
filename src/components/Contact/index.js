
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from 'emailjs-com'

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}
	function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm(
		  'service_b66ga4d',
		  'contact_form',
		  e.target,
		  "qhfFOeJaWjjQ61myo"
		)
		.then(res=>{
			setFormState({
		  name: '',
		  email: '',
		  message:''
		  });
		  alert("YOUR MESSAGE WAS SENT TO sganjbaksh@gmail.com")
		}).catch(err=> console.log(err));
	  }

	return (
		<section>
			<div className="center">
				<h2 className="page-header">Contact Me</h2>
			</div>
			<div>
				<form id="contact-form" onSubmit={sendEmail}>
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;