
import React from 'react'
var Checkbox = require('react-checkbox')
var checked = null
export default class TodoListItem extends React.Component {
  state = {
    editing: false,
    text: ''
  }
  handleEdit = () =>
  {
    console.log(this.props.items);
    this.setState({editing: true});
  }
  handleSave = () =>
  {
    var val = this.state.text;
    if (this.state.text === '')
    {

      val=this.props.item.text;
    }
    else
      val=this.state.text;
      this.props.savefunc(val, this.props.item.id);
      this.setState({
      editing: false});
  }

  handleSaveText = (e) =>
  {
    this.setState({text: e.target.value});
  }

  handleCancel = () =>
  {
    this.setState({editing: false});
  }

  handleDelete = () => 
  {
    const {item, handleDelete} = this.props;
    handleDelete(item.id);
  }
  handleComplete = () =>
  {
    const {item, handleComplete} = this.props;
    handleComplete(item.id);
  }

  renderDeleteEdit () {
    return (
            <div onChange={() => this.handleComplete()}>
          <li key={this.props.item.id}>
          <input type="checkbox"/>
          {this.props.item.text}
          <button type="button" className="close" onClick={this.handleDelete} >Delete</button>
          <button type="button" className="edit" onClick={() => this.handleEdit()}>Edit</button>

    </li>
      </div>
    );
  }

  renderSave () {
    return (
      <li>
        <input onChange={this.handleSaveText} value={this.state.text}/>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.handleCancel}>Cancel</button>
       </li>
  )}
render ()
{
    if (this.state.editing)
    {
      return this.renderSave();
    }
    else {
      return this.renderDeleteEdit();
    }

  }
}

