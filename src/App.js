import React from 'react';
import './App.css';

import ListItem from './components/listItem';
import tick from './icon/tick.svg'

class App extends React.Component {
constructor() {
  super();
  this.state = {
    newItem : "",
    listItem : [
      {title: 'AAAAAAAAAAA', isComplete: true},
      {title: 'BBBBBBBBBBB', isComplete: false}
    ]
  };
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
};

onItemClicked(item) {
  return () => {
  const {listItem} = this.state;
  const isComplete = item.isComplete;
  const index = listItem.indexOf(item);
  this.setState({
    listItem: [
      ...listItem.slice(0, index),
      {
        ...item,
        isComplete: !isComplete
      },
      ...listItem.slice(index + 1),
    ]
  });
};
}

onKeyUp(event) {
  let text = event.target.value;
  if (event.keyCode === 13) {
  if (!text) {
    return;
  }
  text = text.trim();
  if (!text) {
    return;
  }
  this.setState({
    newItem: "",
    listItem: [
      {title: text, isComplete: false},
      ...this.state.listItem
    ]
  });
}
}


onChange(event) {
  this.setState({
    newItem: event.target.value
  })
}

render(){
  const {listItem, newItem} = this.state;
  if (listItem.length) {
   return (
   <div className="App">
   <div className="Header">
    <img src = {tick} width = "30" height = "30" alt="icon" />
    <input type="text" placeholder = "Add action" value={newItem} onChange={this.onChange} onKeyUp={this.onKeyUp}/>
   </div>
   <div className="Content">
     {listItem.length && listItem.map((item, index) => 
     <ListItem 
     key = {index}
     item = {item}
     onClick = {this.onItemClicked(item)}
     />
  )}
   </div>
   </div>
)}
  else {
   return (
    <div classNames="App">Nothing</div>
  )
}
}
};

export default App;
