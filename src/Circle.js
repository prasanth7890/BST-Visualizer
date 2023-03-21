import "./Circle.css"

function Circle(props) {
    const {cx, cy, idx, isHighlighted, revert} = props;  
    let temp = "";
    if(revert) {
        temp = "temp";
    }
    

    return(
        <>
        <circle className={`circle ${isHighlighted ? 'highlighted' : temp }`} cx={cx} cy={cy} r="35" fill="red" stroke="black" strokeWidth="0"/>
        <text className="textClass" x={cx} y={cy} textAnchor="middle" stroke="white" strokeWidth="1px" dy=".3em">{idx}</text>        
    </>
    )
}

export default Circle;