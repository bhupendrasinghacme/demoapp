import React from 'react'
import Categorycard from '../components/Categorycard';
import { AiFillAlert } from "react-icons/ai";
import Insight from '../assets/insight.png';

function Category() {
    const categories = [
       { img_url: <AiFillAlert />,
        heading: 'Business Development',
        subheading: '2 Openings',
        link: 'wwww.google.com',
        },
        { img_url: <AiFillAlert />,
        heading: 'Designing',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: <AiFillAlert />,
        heading: 'Development',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: <AiFillAlert />,
        heading: 'Content writer',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: <AiFillAlert />,
        heading: 'Content writer',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: <AiFillAlert />,
        heading: 'Development',
        subheading: '3 Openings',
        link: 'wwww.google.com',
        },
        { img_url: <AiFillAlert />,
        heading: 'Business Development',
        subheading: '2 Openings ',
        link: 'wwww.google.com',
        },
        { img_url: <AiFillAlert />,
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