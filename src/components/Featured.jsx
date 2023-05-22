import React from 'react'
import Img1 from '../assets/img1.png';
import Featuredcards from './Featuredcards';

function Featured() {

    const featured = [
        {
            img_url: Img1,
            title: 'Tech Rookie Internship Program (TRIP) - iOS Eng...',
            subtitle: 'PT Midas Daya Teknologi'
        },
    
    ]
  return (
    <div>
      {
        featured.map((item, index)=>(
            <Featuredcards imgurl={item.img_url} title={item.title} subtitle={item.subtitle} />
        ))
      }
    </div>
  )
}

export default Featured