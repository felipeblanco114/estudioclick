import React, { useRef } from 'react';
import Logo from "../../images/logoclick.png";
import emailjs from "@emailjs/browser";
import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm("service_oz7a9ak", "template_5pfskm8", form.current, {
            publicKey: "mq6HW9JAJ9CTkb1w_",
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <div className='contact' id='contact'>
        <div className='contact-header'>
            <div>
                <h3>sigamos en contacto.</h3>
                <p><a href="mailto:estudioclick418@gmail.com">estudioclick418@gmail.com</a></p>
            </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.2215497026623!2d-61.936417810568045!3d-37.455490641614865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eb72d663304559%3A0x790db797b3bb3148!2sRivadavia%20418%2C%20B7540EHI%20Coronel%20Suarez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1709759414760!5m2!1ses-419!2sar" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Estudio Click'></iframe>
        </div>
        <div className='contact-container' data-aos="fade-up">
            <div>
                <img src={Logo} alt="Logo Estudio Click" />
                <div>
                    <h2>
                        ESCRIBINOS
                    </h2>
                </div>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Nombre completo' name='user_name' required />
                    <input type='text' placeholder='WhatsApp' name='user_telefono' />
                    <input type='email' name='user_email' placeholder='e-mail' required />
                    <textarea type='text' name='message' placeholder='Mensaje' rows='5' />
                    <button type='submit' value='Send'>
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact