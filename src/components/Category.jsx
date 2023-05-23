import React from 'react'
import Categorycard from '../components/Categorycard';
import { AiFillAlert } from "react-icons/ai";
import Insight from '../assets/insight.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function Category() {
    const categories = [
       { img_url: Insight,
        heading: 'Business Development',
        subheading: '2 Openings',
        link: 'wwww.google.com',
        },
        { img_url: img2,
        heading: 'Designing',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: img3,
        heading: 'Development',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: img4,
        heading: 'Content writer',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: img4,
        heading: 'Content writer',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: Insight,
        heading: 'Development',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: img2,
        heading: 'Business Development',
        subheading: '2 Openings ',
        link: 'wwww.google.com',
        },
        { img_url: img3,
        heading: '2 Designing',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        }
    ]
  return (
    <div>
        <h1>Search By category</h1>
    <div className='cateWrapper' >
      {
      categories.length>0 &&
       categories.map((item,index)=>(
         <Categorycard img_url={item.img_url} heading={item.heading} subheading={item.subheading} link={item.link}  />
       ))
       }
    </div>
 
    </div>
  )
}

export default Category