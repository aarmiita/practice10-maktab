import React from 'react'
import RoundCard from'./RoundCard';
import leaf from './images/leaf-solid.svg'
import users from './images/users-solid.svg'
import coins from './images/coins-solid.svg'


const Main = () => {
    return (
        <div className="main">
    <RoundCard mySvg={leaf} content="اسراف کمتر"/>
    <RoundCard  mySvg={users} content="مشتریان جدید"/>
    <RoundCard  mySvg={coins} content="درآمد بیشتر"/>
        </div>
    )
}

export default Main
