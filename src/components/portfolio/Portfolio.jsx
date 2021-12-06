
import React, { useState, useEffect } from 'react'
import PortfolioList from '../portfoliolist/Portfoliolist'
import './Portfolio.scss'
import {
    featuredPortfolio,webPortfolio,codePortfolio,
} from '../../data'

const Portfolio = () => {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])
  const list=[
    {
        id:"feautred",
        title:"SAIT Projects",
    },
    {
        id:"web",
        title:"Web App",
    },
    { 
        id:"algorithm",
        title:"Algorithm Challenge",

    }
]
  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio)
        break
      case 'web':
        setData(webPortfolio)
        break
      case 'algorithm':
        setData(codePortfolio)
        break
      default:
        setData(featuredPortfolio)
    }
  }, [selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h2>Projects</h2>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((item) => (
          <a href={item.link}target="_blank"rel="noreferrer">

          <div className='item' key={item.id}>
            
            <img src={item.img} alt={item.title} />
            
            <h3>{item.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
