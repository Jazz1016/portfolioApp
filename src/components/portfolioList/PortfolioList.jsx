import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected}) {
    return (
        <li 
        className={active ? "portfolioList active" : "porfolioList"}
        onClick={()=>setSelected()}
        >
            {title}
        </li>
    )
}