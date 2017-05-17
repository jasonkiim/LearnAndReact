
import React from 'react';

export default class TodoListItem extends React.Component {
constructor(props) {
  super(props);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleSave = this.handleSave.bind(this);
  this.handleSaveText = this.handleSaveText.bind(this);
  this.handleCancel = this.handleCancel.bind(this);
  this.state = {editing: false, text: ''};
}

  handleEdit ()
  {
    console.log(this.props.items);
    this.setState({editing: true});
  }
  handleSave ()
  {
    var val = this.state.text;
    if (this.state.text === '')
    {

      val=this.props.item.text;
    }
    else
      val=this.state.text;
    this.props.savefunc2(val, this.props.item.id);
    this.setState({
      editing: false});
  }

  handleSaveText (e)
  {
    this.setState({text: e.target.value});
  }

  handleCancel ()
  {
    this.setState({editing: false});
  }

  handleDelete = () => 
  {
    const {item, handleDelete} = this.props;

    handleDelete(item.id);
  }
  renderDeleteEdit () {
    return (
            <div>

          <li key={this.props.item.id}>{this.props.item.text}
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
    //console.log(this.props.item.text);
    if (this.state.editing)
    {
      return this.renderSave();
    }
    else {
      return this.renderDeleteEdit();
    }
    //console.log(this.props.taskIndex);

  }
}

