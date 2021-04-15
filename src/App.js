import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={todo:[{id:0,text:'todo 1', iscompleted:false},
    {id:1,text:'todo 2', iscompleted:false},
    {id:0,text:'todo 3', iscompleted:false} ],newtext:''}
  }
  handlemodif=(e)=>{this.setState({newtext:e.target.value})}
  addtodo=(e)=>{
 e.preventDefault()
  this.setState({todo:[...this.state.todo,
  {id:this.state.todo.length+1, text:this.state.newtext, isCompleted:false}],newtext:''
})}
deletetodo=(i)=>{this.setState({todo: this.state.todo.filter((el,index)=>  index!==i) })}


  render(){
  return (
    <div className="App">
      <h1>Todolist</h1>
      <form>
        <input type='text'
        placeholder='exemple...'
        name='todo' value={this.state.newtext} onChange={this.handlemodif}/>
        <botton onClick={this.addtodo}>submit</botton>
      </form>
      <ul>
        {
          this.state.todo.map((el,i)=> <li key={i}>
            <span>{el.text}</span>
            <input type='checkbox'/>
            <botton onClick={()=>this.deletetodo(i)}>delete</botton>
            </li>) 
        }
      </ul>
    </div>
  );
}}

export default App;
