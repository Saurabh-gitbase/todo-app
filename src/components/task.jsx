import React, { Component } from 'react';

class Todo extends Component {
    state = {
        items :[],
        currItem:{
            task:'',
            id:''
        }
    };


    handleInput=(a) => {
        
        this.setState({
            currItem : {
                task:a.target.value,
                id:Date.now()
            }
        })
        
    }

    addItem = (a) => {
        a.preventDefault();
        const newItem = this.state.currItem;
        if(newItem.task!==""){
            const items = [...this.state.items,newItem];
            this.setState({
                items:items,
                currItem:{
                    task:'',
                    id:''
                }
            })
            
        }
    }

    deleteItem = (id) =>{
        const filterItem = this.state.items.filter(item=> item.id!==id);
        this.setState({
            items:filterItem
        })
        
            
    }

    render(){
    return(
    <div>
        <h1>TODO List </h1>
        <form onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Task" value={this.state.currItem.task}  onChange={this.handleInput}/>
        </form>
        <ul>{
            this.state.items.map( (item) => <li key={item.id} className="new-todo">{item.task} <span onClick={()=>{this.deleteItem(item.id)}}>&#10006;</span></li>)}
        </ul>
    </div>
    );
    
    
    };
}





export default Todo;
