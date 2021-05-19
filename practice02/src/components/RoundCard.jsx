import React from 'react';

const RoundCard = ({mySvg,content}) => {
    return (
        <a href="#"><div className="roundCard">
            <a><div className="image"><img src={mySvg}/></div></a>
            <div className="content" >{content}</div>
        </div></a>
    )
}

export default RoundCard
