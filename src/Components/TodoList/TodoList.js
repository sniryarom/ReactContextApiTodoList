import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'; 

/**
*
*/
class TodoList extends React.Component {

    constructor(props){
    //   super(props);
      //  this.handleRemoveItem = this.handleRemoveItem.bind(this);
      //  this.handleCheckItem = this.handleCheckItem.bind(this);
      //  this.applyFilter = this.applyFilter.bind(this);
    }
  
    // handleRemoveItem(e, index) {
    //   this.props.removeItemFunc(e, index);
    // }

    // handleCheckItem(e, index) {
    //   this.props.checkItemFunc(e, index)
    // }

    // applyFilter(filter) {
    //   this.props.filterFunc(filter);
    // }
  
    render(){
      //console.log('TodoList will render. List:', this.props.list);
      //const numOfItems = this.props.list.length;
      return (
        <div> 
          <MyContext.Consumer> 
            {(context) => (
              <React.Fragment>
                <h1>ToDo List</h1>
                <nav>
                  <a href="#" onClick={() => { context.state.applyFilter('All') }}>All</a> | 
                  <a href="#" onClick={() => { context.state.applyFilter('Open') }} >Open</a> |
                  <a href="#" onClick={() => { context.state.applyFilter('Closed') }}>Closed</a>
                </nav>
                <ul id="todoList" className='todoListTypeStyle'>
                {
                    this.props.list.map((item, index) => (  
                        <TodoItem key={index} index={index} item={item}/>
                    ))
                }    
                </ul>
                {
                  numOfItems > 0 && 
                  <span>Number of items:  {context.state.list.length}</span>
                }
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }
  
  export default TodoList