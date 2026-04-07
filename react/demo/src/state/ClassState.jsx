// state : state it's simple type varibale 
// state : we change data
// state : same file use 
// class : this.state : varibale define 
// class : this.setstate() : inbulit function class
// class : this.state as always object
// State : evenet handler

import React, { Component } from 'react'
import ImageData from './ImageData'

class ClassState extends Component {
    constructor(){
        super()
        this.state = {
            name : "ketan patel",
            count : 0,
            isImage : true
        }
    }
  render() {
    // console.log(this.state)

    return (
      <div>
        <h1>name : {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"shubham jadav"})}>change name</button>
        <button onClick={()=>this.setState({name:"jigar "})}>Change name 2</button>

        <h1>Counter : {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Increment</button>
        <button onClick={()=>this.setState({count:this.state.count - 1})}>Decrement</button>

        {/* count = 0 
            count = count + 1 
            1 = 1 + 1 
            2 = 2 + 1 
            3
        */} 
        <br /> <br />

        <button onClick={()=>this.setState({isImage : false})}>Hide</button>
        <button onClick={()=>this.setState({isImage : true})}>True</button>

        <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>
        
        {
            this.state.isImage ? <ImageData /> : false
        }


      </div>
    )
  }
}

export default ClassState
