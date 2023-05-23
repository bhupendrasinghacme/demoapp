import React from 'react'
import Img1 from '../assets/img1.png';
import Featuredcards from './Featuredcards';
import save from '../assets/save.png';
import { AiOutlineStar } from "react-icons/ai";

function Featured() {

    const featured = [
        {
            img_url: Img1,
            title: 'Tech Rookie Internship Program (TRIP) - iOS Eng...',
            subtitle: 'PT Midas Daya Teknologi',
            saveimg_url: save,
            reviewicon: <AiOutlineStar />,
            reviewtitle: '4.1 | 50+ reviews',
            actioncta: 'All Job Offers >'
        },   
        {
          img_url: Img1,
          title: 'Tech Rookie Internship Program (TRIP) - iOS Eng...',
          subtitle: 'PT Midas Daya Teknologi',
          saveimg_url: save,
          reviewicon: <AiOutlineStar />,
          reviewtitle: '4.1 | 50+ reviews',
          actioncta: 'All Job Offers >'
      },
      {
        img_url: Img1,
        title: 'Tech Rookie Internship Program (TRIP) - iOS Eng...',
        subtitle: 'PT Midas Daya Teknologi',
        saveimg_url: save,
        reviewicon: <AiOutlineStar />,
        reviewtitle: '4.1 | 50+ reviews',
    },
    ]
  return (
    <div>
        <h1>Featured Job Offers</h1>
      {
        featured.map((item, index)=>(
            <Featuredcards imgurl={item.img_url} title={item.title} subtitle={item.subtitle} saveimgurl={item.saveimg_url} reviewicon={item.reviewicon} reviewtitle={item.reviewtitle} actioncta={item.actioncta}/>
        ))
      }
      <div className='actioncta'>All Job Offers</div>
    </div>
  )
}

export default Featured