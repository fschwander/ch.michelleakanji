import React, {useEffect, useState} from "react";
import {WorksCarousel} from "../components/WorksCarousel";
import {Helmet} from "react-helmet/es/Helmet";
import img from "../res/imgs/critical-whiteness.jpg";


export const WorksPage = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <div className='WorksPage' style={{height: `${windowHeight}px`}}>
      <Helmet>
        <title>Michelle Akanji</title>
        <meta name='description'
              content='Reportagen, Features und Essays von Michelle Akanji, Kulturpublizistin in Zürich. '/>
        <meta property="og:image" content={img}/>
      </Helmet>

      <WorksCarousel/>
    </div>
  );
}
