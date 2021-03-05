import {Carousel} from "react-motion-components";
import {useState} from "react";
import AllWorkTiles from "./AllWorkTiles";

export const WorksCarousel = () => {
  const [index, setIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(window.innerHeight - 70);
  const defaultStyle = {
    width: 400,
    height: 500,
    margin: 'auto'
  }

  const prev = () => setIndex(index - 1);
  const next = () => setIndex(index + 1);
  const move = i => setIndex(i);

  const getPaginationButtons = () => {
    let nofElements = AllWorkTiles().length;
    let newIndex = index % nofElements;

    return Array.from({length: nofElements}, (_, i) => {
      let elIsActive = i === (newIndex < 0 ? newIndex + nofElements : newIndex);
      let className = 'paginationButton ' + (elIsActive ? 'active' : 'inactive');
      return <button key={i}
                     className={className}
                     onClick={() => move(i)}/>
    });
  };

  const handleResize = () => {
    setCarouselHeight(window.innerHeight - 70);
  }

  useState(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <div className='WorksCarousel' style={{height: `${carouselHeight}px`}}>
      <div className='carousel-body' style={{...defaultStyle}}>

        <div className='carousel-nav-arrows'>
          <button className='button-left'
                  onClick={prev}>
            <span className='arrow'/>
          </button>

          <button className='button-right'
                  onClick={next}>
            <span className='arrow'/>
          </button>
        </div>

        <Carousel {...defaultStyle}
                  direction="horizontal"
                  effect="3d"
                  index={index}
                  onChange={index => move(index)}>
          {AllWorkTiles(index, AllWorkTiles().length)}
        </Carousel>
      </div>
      <div className='carousel-pagination'>{getPaginationButtons()}</div>

    </div>
  )
}
