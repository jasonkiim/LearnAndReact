import React from 'react';

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, taskIndex) => 
          <li key={item.id}>{item.text}
          <button type="button" className="close" onClick={this.props.whatever} value={taskIndex}>Delete</button>
		</li>

        )}

      </ul>
    );

  }
}
