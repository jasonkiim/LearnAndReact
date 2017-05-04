import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js'
//You MUST always have super when you have a constructor
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {items: [], text: ''};
  }


  handleChange(e) {
    this.setState({text: e.target.value});
  }


  handleDelete(e) {
  	var taskIndex = parseInt(e.target.value, 10);
  	console.log('remove task:', taskIndex);
  	this.setState(state=> {
    this.state.items.splice(taskIndex, 1);
    this.setState({items: this.state.items});
  	})
}

handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }


  render() {
  	  	//console.log(this.state.items);
  	console.log(this.state.items.itemIndex);

    return (
      <div>
        <h3>TODO</h3>
        <TodoList 
        	items={this.state.items} 
        	whatever={this.handleDelete} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

