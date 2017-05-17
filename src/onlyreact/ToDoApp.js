import React from 'react';
import TodoList from './TodoList.js'

//You MUST always have super when you have a constructor
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

state = {
  items: [], 
  text: ''
}

handleChange(e) 
{
    this.setState({text: e.target.value});

}

handleSaveChange = (textValue, idofinterest) => 
{

    var taskIndex = this.state.items.findIndex((element)=> element.id === idofinterest);
  //this.state.items[taskIndex].text = textValue;
  var newArray = [...this.state.items];
  newArray[taskIndex].text = textValue;
  this.setState({items: newArray});

}

handleDelete(idofinterest) {

    function isEquals (element)
    {
        return element.id === idofinterest;
    }

    var taskIndex = this.state.items.findIndex((element)=> element.id === idofinterest);
    var tempArray = [...this.state.items];
    tempArray.splice(taskIndex, 1);
    this.setState({items: tempArray});
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
    //console.log(this.state.items.itemIndex);

    return (
      <div>
          <h3>TODO</h3>
        <TodoList
          items={this.state.items} 
           handleDelete={this.handleDelete} 
           savefunc={this.handleSaveChange}
        />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

