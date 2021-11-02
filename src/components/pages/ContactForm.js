import React, { useState } from 'react'

import './contact.scss';

const ContactForm = () => {
    const [data, setData] = useState({ name: '', email: '', phoneNum: '', message: '', sent: false, buttonText: 'Send', err: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const mails = [
        process.env.REACT_APP_USER_NAME
    ];

    const formSubmit = (e) => {
        e.preventDefault();

        var x = document.forms["contactForm"]["name"].value;
        var y = document.forms["contactForm"]["email"].value;
        var z = document.forms["contactForm"]["message"].value;
        var p = document.forms["contactForm"]["phoneNum"].value;

        //eslint-disable-next-line
        if (x == "" || x == null || y == "" || y == null || z == "" || z == null || p == "" || p == null) {
            setData({
                ...data,
                buttonText: 'Info missing, Please enter your details',
                sent: false,
                err: 'fail'
            })
            setTimeout(() => {
                resetForm()
            }, 3000)
        } else {
            setData({
                ...data,
                buttonText: 'Is sending'
            })
            // eslint-disable-next-line
            Email.send({
                Host: "smtp.gmail.com",
                Username: process.env.REACT_APP_USER_NAME,
                Password: process.env.REACT_APP_PASSWORD,

                To: mails,
                From: "landingpage@mailer.com",
                Subject: "הודעה חדשה ממילה הפקות",
                Body: `
            Email from: ${data.name}. <br />
            Email Address: ${data.email}. <br />
            Phone Number: ${data.phoneNum}. <br />
            Message: ${data.message}.
            `
            }).then(
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'Message Sent Successfully',
                })
            ).then(setTimeout(() => {
                resetForm()
            }, 5000)
            );
        }
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            phoneNum: '',
            message: '',
            sent: false,
            buttonText: 'Send',
            err: ''
        });
    }
    return (
        <div className="contactSection">
            <div className="container">
                <form id="formasd" name="contactForm">
                    <h1>Let's Talk.</h1>

                    <div className="contactItems">
                        <span className="iContact">
                            <i class="fa fa-phone-alt" aria-hidden="true"></i>
                        </span>

                        <p>+972 54-1234567</p>

                        <span className="iContact">
                            <i class="fas fa-map-pin" aria-hidden="true"></i>
                        </span>

                        <p>Central, Israel</p>
                    </div>



                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="name" value={data.name} onChange={handleChange} required></input>
                                <span className="text">Full Name</span>
                                <span className="line"></span>
                            </div>
                        </div>

                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="phoneNum" value={data.phoneNum} onChange={handleChange} required></input>
                                <span className="text">Phone number</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="email" value={data.email} onChange={handleChange} required></input>
                                <span className="text">Email</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox textarea">
                                <textarea name="message" value={data.message} onChange={handleChange} required></textarea>
                                <span className="text">Type here.</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <button
                                type="submit"
                                // value="sendNow"
                                onClick={formSubmit}
                                id={data.sent ? "successBtn" : "failBtn"}>
                                {data.buttonText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;