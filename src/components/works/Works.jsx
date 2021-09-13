import { useState } from "react"
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlider] = useState(0)
    
    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlider(currentSlide < data.length -1 ? currentSlide+1 : 0)
    }

    const data = [
        {
            id: "1",
            icon: "./assets/globe.png",
            title: "Software Engineer INTERN at HPE",
            desc:
                "Work on development and maintenance in the Robotic Process Automation team at Hewlett Parckard Enterprise, using Python.",
            img:
                "https://avatars.githubusercontent.com/u/45014591?s=280&v=4"
        },
        {
            id: "2",
            icon: "./assets/mobile.png",
            title: "Mobile Developer at Hunabku.mx",
            desc:
                "Built a food delivery mobile app using React Native in JavaScript, for Android and iOS.",
            img:
                "https://hunabku.mx/img/home/experiencia-hunabku.webp"
        },
        {
            id: "3",
            icon: "./assets/globe.png",
            title: "Web Developer",
            desc:
                "Built a website to help older adults increase their autonomy, reducing the need for adult care services.",
            img:
                "https://static.wixstatic.com/media/04ac26_09ace712f39b42cf94413911229c09c9~mv2.png/v1/fill/w_686,h_78,al_c,q_85,usm_0.66_1.00_0.01/logoCOGNOSgrande.webp"
        },
    ]

    return (
        <div className="works" id="works">
            <div className="sizeH">
                <h1>Works</h1>
            </div>
            
            <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)` }}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=> handleClick("right")}/>
            
        </div>
    )
}
