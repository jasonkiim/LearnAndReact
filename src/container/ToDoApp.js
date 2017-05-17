import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import TodoList from '../components/TodoList.js'
import * as HandleActions from '../actions/handlesactions'

//You MUST always have super when you have a constructor
class ToDoApp extends React.Component {

state = {
  text: ''
}

handleChange = (e) =>
{
    this.setState({text: e.target.value});
}

handleSaveChange = (textValue, idofinterest) =>
{
  this.props.actions.changeToDo(this.props.items, idofinterest, textValue);
}

handleDelete = (idofinterest) => 
{
    this.props.actions.deleteToDo(this.props.items, idofinterest);
}

handleComplete = (idofinterest) =>
{
  this.props.actions.completeToDo(this.props.items, idofinterest);
}
handleSubmit = (e) => 
{
     e.preventDefault();
    this.props.actions.addTodo(this.state.text);
    this.setState ({text: ''});
}

  render() {

    return (
      <div>
        <h3>TODO</h3>
          <TodoList
            items={this.props.items}
            handleDelete={this.handleDelete} 
            savefunc={this.handleSaveChange}
            handleComplete={this.handleComplete}
          />
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} />
            <button>Add Todo</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => 
{
  return {
      items: state.settingsReducer.items
  }
}

const mapDispatchToProps = (dispatch) => 
{
    return {
        actions: bindActionCreators(HandleActions, dispatch)
    }
}

  export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ToDoApp)
