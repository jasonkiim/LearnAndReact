import React from 'react';
import TodoListItem from './TodoListItem.js';
export default class TodoList extends React.Component {
  render() {
      return (
        <div>
            {this.props.items.map((item, taskIndex) =>

        <TodoListItem
        	{...this.props} 
        	item={item} 
        	taskIndex={taskIndex} 
        />

    )}
      </div>
      );
  }
}
