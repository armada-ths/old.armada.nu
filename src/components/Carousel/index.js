import React from 'react'
import "./index.scss"

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        shownItems: this.isMobile() ? 1 : 3,
        items: props.items, 
        current: {}, 
        isNext: true,
        
    };
    
    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
    this.state.current = { start: 0, end: this.state.shownItems }
  }

    isMobile() {
        if (global.window!=undefined) {
        return window.innerWidth < 470 ? true : false
        } else {
        return false
        }
    }

    resize = () => { 
        this.setState({shownItems: this.isMobile() ? 1 : 3})
        
        this.state.current = { start: this.state.current.start, end: this.state.current.start + this.state.shownItems }
        this.forceUpdate();
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
        /*setInterval(
            function() {
                this.handlerNext()
            }
            .bind(this),
            4000
        );*/
    }

    componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
    }
  
  handlerPrev() {
    let index = this.state.current,
        length = this.state.items.length;
    
    if( index.start === 0 ) {
        index = { start: length - 1 - this.state.shownItems, end: -1 };
        } else {
            
        index = { start: index.start - this.state.shownItems, end: index.end - this.state.shownItems };
        }

    this.setState({
      current: index,
      isNext: false
    });
  }
  
  handlerNext() {
    let index = this.state.current,
        length = this.state.items.length - 1;

        
    
    if( index.end >= length ) {
      index = { start: 0, end: this.state.shownItems };
    } else {
        
    index = { start: index.start + this.state.shownItems, end: index.end + this.state.shownItems };
    }
    
    
    this.setState({
      current: index,
      isNext: true
    });
  }
  
  goToHistoryClick( curIndex, index ) {
    let next = (curIndex < index);
    this.setState({
      current: index,
      isNext: next
    });                 
  }
  
  render(){
    let index = this.state.current,
        isnext = this.state.isNext,
        item = this.state.items[index];
  
    return (
      <div>
        <div className="carousel">
            
           <div className="carousel-control prev" onClick={this.handlerPrev}><span></span></div>
            <div className="carousel-items">

            {this.state.items.slice(this.state.current.start,this.state.current.end)}
            </div>
           <div className="carousel-control next" onClick={this.handlerNext}><span></span></div>

          </div>          
            <History 
                shownItems={this.state.shownItems}
                current={this.state.current} 
                items={this.state.items}
                changeSilde={this.goToHistoryClick}
            />
      </div>
    )
  }
}

class History extends React.Component {
  constructor(props) {
    super(props);
  }

    group = (items, n) => items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
  }, []);
  
  render() {
    let current = this.props.current;
    let items = this.group(this.props.items, this.props.shownItems).map( (el, index) => {
      let name = ((index * this.props.shownItems) >= current.start && index * this.props.shownItems + this.props.shownItems <= current.end) ? 'active' : '';
        return (
            <div 
                className={'history-item ' + name} 
                onClick={ () => this.props.changeSilde(current, index) }
            ></div>
        )
    });
    
    return (
      <div className='carousel-history'>{items}</div>
    )
  }
}