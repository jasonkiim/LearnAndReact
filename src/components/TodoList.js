import React from 'react'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component {
  render() {

      return (
        <div>
          {this.props.items.filter((item) => !item.isComplete).map((item, taskIndex) =>

                <TodoListItem
                  {...this.props}
                  key={taskIndex}
                  item={item} 
                  taskIndex={taskIndex} 
                />

            )}
      </div>
      );
  }
}
