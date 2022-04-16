import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor: true,
            backDelay: 2000,
            backSpeed: 60,
            strings: ["Software Engineer 👨‍💻", "Web Developer 💻", "Pets lover 🐕", "Mobile Developer 📱", "Gamer 🎮" ]
        });
    }, []);
    return (
        <div  className="intro" id="intro">
            <div className="left">
                <img className="imgContainer" src="assets/man.png" alt=""/>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Rafael Anguiano</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
