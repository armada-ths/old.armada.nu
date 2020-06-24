import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import useWindowSize from '../../hooks/useWindowSize'

const Carousel = (props) => {

  const desktopShownItems = 3;
  const items = props.items
  const length = props.items.length

  const [current, setCurrent] = useState(0);
  const [onMobile, setOnMobile] = useState(false);
  const [shownItems, setShownItems] = useState(desktopShownItems);
  const [isTraversable, setIsTraversable] = useState(length > shownItems)

  const windowSize = useWindowSize();

  useEffect(() => {
      setOnMobile(windowSize.width < 700)
  }, [windowSize])

  useEffect(() => {
    setShownItems(onMobile ? 1 : desktopShownItems)
  }, [onMobile])

  useEffect(() => {
    setIsTraversable(length > shownItems)
  }, [shownItems, length])

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
      { isTraversable ? <div role='presentation' className='carousel-control prev no-tap-highlight' onClick={handlerPrev}><span></span></div> : <div/> }
      <div className='carousel-items' style={{gridTemplateColumns: `repeat(${shownItems}, 1fr)`}}>
        {items.slice(current, current + shownItems)}
      </div>
      { isTraversable ? <div role='presentation' className='carousel-control next no-tap-highlight' onClick={handlerNext}><span></span></div> : <div/>}

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

  const group = (items, n) => items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
  }, []);

  return (
    <div className='carousel-history'>
      { group(items, shownItems).map((el, index) => (
          <div
            role='presentation'
            key={index}
            className={`history-item ${((index * shownItems) >= current && index * shownItems + shownItems <= (current + shownItems)) ? 'active' : ''}`} 
            onClick={() => changeSilde(index * shownItems)}
          ></div>
      )) }
    </div>
  )
}

Carousel.propTypes = {
  items: PropTypes.array,
}

History.propTypes = {
  shownItems: PropTypes.number,
  current: PropTypes.number,
  items: PropTypes.array,
  changeSilde: PropTypes.func,
}

export default Carousel