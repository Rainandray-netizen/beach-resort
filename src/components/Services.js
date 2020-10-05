import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail />,
        title:'Free Cocktails',
        info:'All you can drink cocktails everywhere you go: from the pool, to the bar, to your room.'
      },
      {
        icon:<FaHiking />,
        title:'Beautiful Hiking Trails',
        info:'Explore the lush, beautiful forests and mountains on over fifty miles of well maintained trails.'
      },
      {
        icon:<FaShuttleVan />,
        title:'Free Shuttles',
        info:'Anywhere you need to go, we\'ll take you there free of charge. Just call and request a shuttle.'
      },
      {
        icon:<FaBeer />,
        title:'Endless Beer',
        info:'Featuring our world famous 6.8 ABV waterslide, IPA Rapids. '
      },
    ]
  }
  
  render() {
    return (
      <section className='services'>
        <Title title='services'/>
        <div className='services-center'>
          {this.state.services.map((item,index)=>{
            return(
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
