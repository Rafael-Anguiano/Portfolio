import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Rafael from Future",
            title: "Senior Software Developer",
            img: "assets/FutureMe.jpeg",
            icon: "assets/Time.png",
            desc: "He never gives up, he has come far, and he will go even further. 👨🏽‍💻"
        },
        {
            id: 2,
            name: "Jasper",
            title: "The best friend",
            img: "assets/jasper.jpeg",
            icon: "assets/youtube.png",
            desc: "Wouf wouf wouf",
            featured: true
        },
        {
            id: 3,
            name: "Jeff Goldblum",
            title: "Actor",
            img: "https://i.ytimg.com/vi/GaZBKb79x1w/maxresdefault.jpg",
            icon: "assets/Movie.png",
            desc: "You did it! You crazy son of a bitch, you did it. 🦖"
        }
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=> (
                <div className={d.featured ? "card featured " : 'card '}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
