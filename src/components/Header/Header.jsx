import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'


const Header = () => {
  return (
    <>

    <Title>транспорт</Title>
    <div className="wrap">
       <Card name="велосипед" img="/img1.jpeg"  />
       <Card name="мотоцикл" img="https://damon.com/assets/hypersport/SE_Black.webp" />
       <Card name="самокат" img="https://powergym.uz/upload/iblock/a3c/3bulr3y2ny756535f0qx4fklw5e3mcar/article-original.jpg" />
       <Card/>
    </div>
    </>
  )
}

export default Header
