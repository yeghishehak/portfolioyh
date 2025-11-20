"use client";
import styles from "./contacts.module.css";

import { useState, useRef } from "react";
import validator from "validator";
import sanitizeHTML from "sanitize-html";

export default function Contact () {
    const form = useRef();

    const sanitizeInput = (input) => 
        sanitizeHTML(input, {
            allowedTags: [],
            allowedAttributes: {}
        });
    

    const sendEmail = async (e) => {

        e.preventDefault();

        const tempForm = form.current;
        for (let input of tempForm) {
            if (input.name && input.value) {
                input.value = sanitizeInput(input.value);
            }
        }

        const sanitizedData = {
            user_firstname: sanitizeInput(form.current.user_firstname.value),
            user_lastname: sanitizeInput(form.current.user_lastname.value),
            user_email: sanitizeInput(form.current.user_email.value),
            user_message: sanitizeInput(form.current.user_message.value)
        }

        if (!validator.isEmail(sanitizedData.user_email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const formData = new FormData(e.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_ORIGINS_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            alert("Message sent successfully!");
        }
        else {
            alert("There was an error sending your message. Please try again later.");
        }


    }

    return (
        <section className={styles.contactSection}>
            <div className={styles.contactDiv}>
                <div className={styles.contactLeft}>
                    <h1 className={styles.title}>Contact</h1>

                    <div className={styles.descriptionDiv1}>
                        <p className={styles.description1}>Feel free to reach out with any questions, ideas, or opportunities.</p>
                    </div>
                    

                    <div className={styles.bottomPart}>

                        <div className={styles.descriptionDiv2}>
                            <p className={styles.description2}>If you have any inquiries or just want to say hi, please use the contact form!</p>
                        </div>

                        <div className={styles.socialMedia}>
                            <img className={styles.thumb} src="/socialmedia/Thumb.svg" />
                            <a href="https://www.instagram.com/frontend_actions/" target="_blank" rel="noopener noreferrer"><img className={styles.instagram} src="/socialmedia/Instagram.svg" /></a>
                            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><img className={styles.tiktok} src="/socialmedia/Tiktok.svg" /></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img className={styles.youtube} src="/socialmedia/Youtube.svg" /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.contactRight}>
                    <form ref={form} className={styles.form} onSubmit={sendEmail}>
                        <div className={styles.inputGroup}>
                            <div className={styles.inputGroupFirstName}>
                                <label className={styles.label}>First Name</label>
                                <input
                                    className={styles.inputFirstName}
                                    type="text"
                                    required
                                    name="user_firstname"
                                />
                            </div>

                            <div className={styles.inputGroupLastName}>
                                <label className={styles.label}>Last Name</label>
                                <input
                                    className={styles.inputLastName}
                                    type="text"
                                    required
                                    name="user_lastname"
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroupEmail}>
                            <label className={styles.label}>Email</label>
                            <input
                                className={styles.inputEmail}
                                type="email"
                                required
                                name="user_email"
                            />
                        </div>


                        <div className={styles.inputGroupMessage}>
                            <label className={styles.label}>Message</label>
                            <textarea
                                className={styles.textareaMessage}
                                rows="5"
                                required
                                name="user_message"
                            ></textarea>
                        </div>

                        <button className={styles.submitButton} type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}