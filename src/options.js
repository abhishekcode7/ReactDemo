import './options.css'
import {useState} from 'react'
function Options() {
  const [s,changeS] = useState(0);
    return (
        <div>
        <ul className="bankItems">
          <li>
            <img onClick={()=>changeS(1)} src='https://pbs.twimg.com/profile_images/1121403488292851713/XrMDErhB.png' alt=""/>
            <div className="belowStatus">
              ICICI
            </div>
            <div className="tellStatus">{s===1?"Active":"Inactive"}</div>
          </li>
          <li>
            <img onClick={()=>changeS(2)} src='https://www.vhv.rs/dpng/d/298-2981385_hsbc-logo-style-guide-hsbc-banks-logo-hd.png' alt=""/>
            <div className="belowStatus">
              HSBC
            </div>
            <div className="tellStatus">{s===2?"Active":"Inactive"}</div>
          </li>
          <li>
            <img onClick={()=>changeS(3)} src='https://www.basictell.com/general-knowledge/gk-images/uboib-logo.jpg' alt=""/>
            <div className="belowStatus">
              Union
            </div>
            <div className="tellStatus">{s===3?"Active":"Inactive"}</div>
          </li>
          <li>
            <img onClick={()=>changeS(4)} src='https://www.pngitem.com/pimgs/m/138-1386956_sunrise-banks-olive-sunrise-banks-logo-hd-png.png' alt=""/>
            <div className="belowStatus">
              Sunrise
            </div>
            <div className="tellStatus">{s===4?"Active":"Inactive"}</div>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Options;