import React from 'react'
import {Bookmark} from "lucide-react"

const Card = (props) => {
  return (
    <div className="Card">
        <div>
            <div className="top">
            <img src={props.companyLogo}></img>
            <button>Save <Bookmark size={20}/> </button>
        </div>

        <div className="center">
            <h3>{props.companyName} <span>{props.daysAgo} Days ago</span></h3>
            <h2>{props.designation}</h2>
            <div className='tag'>
                <h4>{props.availability}</h4>
                <h4>{props.experience}</h4>
            </div>
        </div>
        </div>

        <div className="bottom">
            <div className='prices'>
                <h3>${props.payPerHour}/hr</h3>
                <p>{props.city}</p>
            </div>
            <button>Apply now</button>
        </div>
    </div>
  )
}

export default Card