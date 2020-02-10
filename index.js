import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


    
class CardHeader extends Component{    
  render(){   
    let headerBg = {
      background: 'url(' + this.props.image + ')', 
      height: '200px',
    } 
    return(
      <div style={headerBg}>
        <span>News</span>
      </div>
    )
  }
}

class Button extends Component{
  render(){
    return(
      <button>Find Out More</button>
    )
  }
}

class CardBody extends Component{
  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <Button />
      </div>
    )
  }
}
class Card extends Component {
  render() {
    let card = {      
      width: '300px',
      border: '1px solid #4d4d4f',
      padding: '10px'
    } 
    return (
      <div style={card}>
        <CardHeader image={'https://i.picsum.photos/id/1/300/200.jpg'} />
        <CardBody title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
      </div>
    );
  }
}

ReactDOM.render(<Card />, document.getElementById('root'));
