import React, { useEffect, useState } from 'react'
import './index.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const desktopShownItems = 3;

const group = (items, n) => items.reduce((acc, x, i) => {
  const idx = Math.floor(i / n);
  acc[idx] = [...(acc[idx] || []), x];
  return acc;
}, []);

const Carousel = (props) => {
  
  const items = props.items
  const length = props.items.length

  const [current, setCurrent] = useState(0);
  const [onMobile, setOnMobile] = useState(false);
  const [shownItems, setShownItems] = useState(desktopShownItems);
  const [isTraversable, setIsTraversable] = useState(length > shownItems)

  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    setOnMobile(windowDimensions.width < 700)
  }, [windowDimensions.width < 700])

  useEffect(() => {
    setShownItems(onMobile ? 1 : desktopShownItems)
  }, [onMobile])

  useEffect(() => {
    setIsTraversable(length > shownItems)
  }, [shownItems])

  const handlerPrev = () => {
    setCurrent((current - shownItems < 0) ? length - (length % shownItems) : current - shownItems)
  }

  const handlerNext = () => {
    setCurrent((current + shownItems > (length - 1)) ? 0 : current + shownItems)
  }

  const goToHistoryClick = (index) => {
    setCurrent(index)
  }

  return (<div>
    <div className='carousel'>
      { isTraversable ? <div className='carousel-control prev no-tap-highlight' onClick={handlerPrev}><span></span></div> : <div/> }
      <div className='carousel-items' style={{gridTemplateColumns: `repeat(${shownItems}, 1fr)`}}>
        {items.slice(current, current + shownItems)}
      </div>
      { isTraversable ? <div className='carousel-control next no-tap-highlight' onClick={handlerNext}><span></span></div> : <div/>}

      </div>          
      { isTraversable ? <History 
            shownItems={shownItems}
            current={current} 
            items={items}
            changeSilde={goToHistoryClick}
      /> : <div/> }
  </div>)
}

const History = ({shownItems, current, items, changeSilde}) => {
  return (
    <div className='carousel-history'>
      { group(items, shownItems).map((el, index) => (
          <div
            key={index}
            className={`history-item ${((index * shownItems) >= current && index * shownItems + shownItems <= (current + shownItems)) ? 'active' : ''}`} 
            onClick={() => changeSilde(index * shownItems)}
          ></div>
      )) }
    </div>
  )
}

export default Carousel