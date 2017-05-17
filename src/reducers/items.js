//Initializing the store. It ameks the variables global. If you want it within
//the element, you don't have to define it globally
const initialState = {
	items: [],
	text: ''
}

export default function settingsReducer(state = initialState, action)
{
	switch (action.type)
	{
		case 'ADD_TODO':
			return Object.assign({}, state,
			{
				items: state.items.concat({
					id: action.id,
					text: action.text,
					isComplete: action.isComplete
				})
			})
		case 'DELETE_TODO':
			return Object.assign({}, state,
			{
				items: state.items.slice(0, action.taskIndex)
						.concat(state.items.slice(action.taskIndex+1))
			})
		case 'CHANGE_TODO':
			return Object.assign({}, state,
			{
				items: state.items.slice(0, action.taskIndex)
						.concat([{
							...state.items[action.taskIndex],
							text: action.text
						}])
						.concat(state.items.slice(action.taskIndex+1))
			})
		case 'COMPLETE_TODO':
			return Object.assign({}, state,
			{
				items: state.items.slice(0, action.taskIndex)
						.concat([{
							...state.items[action.taskIndex],
							isComplete: action.isComplete
						}])
						.concat(state.items.slice(action.taskIndex+1))
			})
		default:
			return state
	}

}
