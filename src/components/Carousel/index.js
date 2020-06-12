import React from 'react'
import './index.scss'

const desktopShownItems = 3;

const group = (items, n) => items.reduce((acc, x, i) => {
  const idx = Math.floor(i / n);
  acc[idx] = [...(acc[idx] || []), x];
  return acc;
}, []);

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        shownItems: this.onMobile() ? 1 : desktopShownItems,
        items: props.items, 
        current: 0,
    };
    
    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
  }

  onMobile() {
    return global.window != undefined ? window.innerWidth < 700 : false
  }

  resize = () => { 
    const shownItems = this.onMobile() ? 1 : desktopShownItems;
    if(shownItems !== this.state.shownItems) {
      this.setState({shownItems, current: 0})
      this.forceUpdate()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  
  handlerPrev() {
    let index = this.state.current,
        length = this.state.items.length - 1,
        shownItems = this.state.shownItems
    
    this.setState({
      current: (index - shownItems < 0) ? length - (length % shownItems) : index - shownItems
    });
  }
  
  handlerNext() {
    let index = this.state.current,
        length = this.state.items.length - 1,
        shownItems = this.state.shownItems
    
    this.setState({
      current: (index + shownItems > length) ? 0 : index + shownItems
    });
  }
  
  goToHistoryClick(index) {
    this.setState({current: index});                 
  }

  isTraversable() {
    return this.state.items.length > this.state.shownItems
  }
  
  render(){
    return (
      <div>
        <div className='carousel'>
          { this.isTraversable() ? <div className='carousel-control prev no-tap-highlight' onClick={this.handlerPrev}><span></span></div> : <div/> }
          <div className='carousel-items' style={{gridTemplateColumns: `repeat(${this.state.shownItems}, 1fr)`}}>
            {this.state.items.slice(this.state.current, this.state.current + this.state.shownItems)}
          </div>
          { this.isTraversable() ? <div className='carousel-control next no-tap-highlight' onClick={this.handlerNext}><span></span></div> : <div/>}

          </div>          
          { this.isTraversable() ? <History 
                shownItems={this.state.shownItems}
                current={this.state.current} 
                items={this.state.items}
                changeSilde={this.goToHistoryClick}
          /> : <div/> }
      </div>
    )
  }
}

class History extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let current = this.props.current, shownItems = this.props.shownItems
    
    return (
      <div className='carousel-history'>
        { group(this.props.items, this.props.shownItems).map((el, index) => (
            <div
              key={index}
              className={`history-item ${((index * shownItems) >= current && index * shownItems + shownItems <= (current + shownItems)) ? 'active' : ''}`} 
              onClick={ () => this.props.changeSilde(index * shownItems) }
            ></div>
        )) }
      </div>
    )
  }
}