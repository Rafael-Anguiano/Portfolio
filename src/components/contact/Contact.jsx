import "./contact.scss"
import { useState } from "react";
import {Person, Mail, GitHub, Phone, LinkedIn} from "@material-ui/icons"
import { Link } from "@material-ui/core";

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <div className="container" >
                    <div className="itemContainer">
                        <a href="https://wa.me/+523331504871" target="_blank">
                            <Phone className="icon"/>
                            <span>+52 1 333 150 4871</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a href="mailto:rj.anguiano.23@gmail.com" target="_blank">
                            <Mail className="icon"/>
                            <span>rj.anguiano.23@gmail.com</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/rafael-anguiano/" target="_blank">
                            <LinkedIn className="icon"/>
                            <span>Rafael Anguiano</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/Rafael-Anguiano" target="_blank">
                            <GitHub className="icon"/>
                            <span>Repositories / Projects</span>
                        </a>
                    </div> 
                </div>
                
                {/* <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thanks, I'll reply as soon as posible! 😁</span> }
                </form> */}
            </div>
        </div>
    )
}
