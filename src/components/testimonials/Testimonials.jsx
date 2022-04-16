import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        //{
        //    id: 1,
        //    name: "Jasper",
        //    title: "Best Friend of Humans",
        //    img: "assets/Jasper1.jpeg",
        //    icon: "assets/youtube.png",
        //    desc: "Wouf wouf wouf",
        //},
        {
            id: 1,
            name: "Darío Martinez",
            title: "Best Friend / Facebook Intern",
            img: "https://avatars.githubusercontent.com/u/34457517?v=4",
            icon: "assets/facebook.png",
            desc: "He is a great partner and a really good person 👍🏼",
        },
        {
            id: 2,
            name: "Rafael from Future",
            title: "Senior Software Developer",
            img: "assets/FutureMe.jpeg",
            icon: "assets/Time.png",
            desc: "He never gives up, he has come far, and he will go even further. 👨🏽‍💻",
            featured: true
        },
        {
            id: 3,
            name: "Iván Reyes",
            title: "Computer Science Ph.D. Student",
            img: "https://media-exp1.licdn.com/dms/image/C5603AQHeZR6xXOaGBA/profile-displayphoto-shrink_800_800/0/1643325909419?e=1655337600&v=beta&t=Y_kA1teg5ZdwG3CsXOdJJ17Ah3KygRmtsH2BjsZ1xX8",
            icon: "assets/teacher.png",
            desc: "He always gives his best, is looking to innovate and put his hands on new projects. 💡"
        }
        // {
        //     id: 3,
        //     name: "Jeff Goldblum",
        //     title: "Actor",
        //     img: "https://i.ytimg.com/vi/GaZBKb79x1w/maxresdefault.jpg",
        //     icon: "assets/Movie.png",
        //     desc: "You did it! You crazy son of a bitch, you did it. 🦖"
        // }
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
