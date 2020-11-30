import React from 'react';
import TodoList from './components/TodoList'
import './components/Todo.css'
import TodoForm from './components/TodoForm'

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={todo}
  }

  handleToggle =(itemId)=>{
    this.setState({
      todo:this.state.todo.map(item=>{
        if(itemId===item.id){
          return({
            ...item,
            completed: !item.completed
          });
        }else{
          return(item)
        }
      })
    });
  }
  handleCompleted = ()=>{
    const newTodo = this.state.todo.filter(item=>{
      return (!item.completed)
    });
    this.setState({
      todo:newTodo
    });
  }


  handleFinshed=()=>{
    const oldTodo = this.state.todo.filter(item=>{
      return (item.completed)
    });
    this.setState({
      todo:oldTodo
    });
    console.log(oldTodo)
  }

  handleAdd = task=>{
    this.setState({
      todo: [...this.state.todo, {task:task, id:Date.now(), completed:false}]
    });
  }
  render() {
    return (
      <div className='App'>
        <h1>CHECKLIST</h1>
        <h2>What Do You Need To Do?</h2>
        <TodoForm handleAdd={this.handleAdd} handleCompleted={this.handleCompleted}/>
        <TodoList handleFinshed={this.handleFinshed} handleCompleted={this.handleCompleted} todo ={this.state.todo} handleToggle={this.handleToggle}/>
        
      </div>
    );
  }
}

export default App;
