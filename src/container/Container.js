import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as HandleActions from '../actions/handlesactions'

//You MUST always have super when you have a constructor
class Container extends React.Component {



render () {
  console.log(this.props.items.filter((item) => item.isComplete));
  return (
          <div>
            <h3>COMPLETED TODOS</h3>
          {this.props.items.filter((item) => item.isComplete).map((item, taskIndex) =>

            <li key={item.id}>{item.text}</li>
          )}
          </div>
        )
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
  )(Container)
