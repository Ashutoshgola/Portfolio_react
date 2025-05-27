import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };
    return (


        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Have a project in mind? Let's discuss it. I'm always open to new opportunities and collaborations.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>ashutoshgola91@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91 7895527454</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Greater Noida, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor='name'>Your Name</label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' required />

                    <label htmlFor='email'>Your Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' required />

                    <label htmlFor='message'>Your Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required></textarea>

                    <button type="submit">Send Message</button>
                </form>

            </div>
        </div>
    )
}
export default Contact