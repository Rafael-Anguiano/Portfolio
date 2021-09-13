import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {useState, useEffect} from 'react'
import { 
    featuredPortfolio, 
    mobilePortfolio, 
    webPortfolio, 
    elecPortfolio 
} from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title:"Featured",
        },
        {
            id: "web",
            title:"Web App",
        },
        {
            id: "mobile",
            title:"Mobile App",
        },
        {
            id: "electronics",
            title:"Electronics",
        }
    ];

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "electronics":
                setData(elecPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id } 
                        setSelected={setSelected} 
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
