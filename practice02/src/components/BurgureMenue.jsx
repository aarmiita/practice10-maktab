import React ,{useState}from 'react'
import collapse from "./images/collapse.png"

const BurgureMenue = () => {
const [open, setopen] = useState(false)
    return (
        <div className="burger" >
            <img src={collapse} onClick={()=>setopen(!open)} />
            <ul className={`new-menue ${ open? "block":"none"}`} >
                <li>درباره ما</li>
                <li>کسب و کار</li>
                <li>پشتیبانی</li>
                <li>سوالات متداول</li>

            </ul>

        </div>
    )
}

export default BurgureMenue
