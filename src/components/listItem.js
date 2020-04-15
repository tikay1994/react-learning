import React, {Component} from 'react';
import classNames from 'classnames';
import './listItem.css';
import circle from '../icon/circle.svg'
import success from '../icon/success.svg'

class ListItem extends Component {
 render() {
   const { item, onClick } = this.props;
   let url = circle;
   if (item.isComplete) {
     url = success
   };
  return (
  <div className = {classNames('ListItem', {
    'ListItem-complete' : item.isComplete
  })}>
   <img onClick={onClick} src={url} alt="icon" width="50" height="50" ></img>
   <p>{this.props.item.title}</p>
  </div>  
)
}
}
export default ListItem;