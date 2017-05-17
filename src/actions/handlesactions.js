export const addTodo = (text, isComplete) => {

  	return {
	    type: 'ADD_TODO',
	    text,
	    id: Date.now(),
	    isComplete: false
    }
}

export const deleteToDo = (items, idofinterest, isComplete) => {
	let taskIndex = items.findIndex((element) => element.id === idofinterest)
	return {
		type: 'DELETE_TODO',
		items,
		taskIndex: taskIndex,
		isComplete: false
	}
}

export const changeToDo = (items, idofinterest, text) => {
 	let taskIndex = items.findIndex((element) => element.id === idofinterest)
 	console.log(items)
 	return {
 		type: 'CHANGE_TODO',
 		items,
 		text,
 		taskIndex: taskIndex,
 		isComplete: false
 	}
}
export const completeToDo = (items, idofinterest, isComplete) => {
 	let taskIndex = items.findIndex((element) => element.id === idofinterest)
	return {
		type: 'COMPLETE_TODO',
		items,
		taskIndex: taskIndex,
		isComplete: true

	}
}


