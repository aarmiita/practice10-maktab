import React from 'react'

const SquareCard = ({sqrImages,sqrContent}) => {
    return (
        <a href="#"><div className="squarecard">
            <div className="sqimage"><a><img src={sqrImages} /></a></div>
            <div className="sqcontent">{sqrContent}</div>
        </div></a>
    )
}

export default SquareCard
