import React from 'react'
import Header from '../components/Header';
import Category from '../components/Category';
import Featured from '../components/Featured';
import Bannerimg from '../components/Banneimg';
import bannerImg from '../assets/bannerImg.png';
import Banner from '../components/Banner';

function index() {
  return (
    <div className='wrapper'>
        <Header />
        <Banner />
        <Category />
        <Featured />
        
        <Bannerimg img_url={bannerImg}/>
    </div>
  )
}

export default index