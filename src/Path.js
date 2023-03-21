import "./Path.css"

function Path(props) {
    const {x1, x2, y1,y2} = props; 
    let temp = "M" + x1 +" " + y1+ " L"+ x2+" "+y2+" Z";
    let From = "M" + x1 +" " + y1;
    let To = " L"+ x2+" "+y2+" Z";
    return(
        <path d={temp} pathLength="1" className="paths">
        </path>
    )
}

export default Path;