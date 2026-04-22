import React, { Component } from 'react'
import Header from '../Layout/Coman/Header'

class ClassLife extends Component {

    constructor(){
        super()
        this.state = {
            name :"shubham jadav"
        }
    }

    // 1) mouthing phase
    componentDidMount(){
        console.log("Hello mouting phase")
    }

    // componentDidCatch(){
    //     console.log("cathing data")
    // }

    // shouldComponentUpdate(){
    //     console.log("compoenent updated not")
    // }

    componentDidUpdate(){
        console.log("Hello updated phase")
    }

    componentWillUnmount(){
        console.log("Hello unmouting phase..")
    }

  render() {
    return (
      <div>
        <Header />
        <h1>Hello this Life Cycle method</h1> 
        {/* React lifecycle : class */}


        {/* 
        
            1) mouting phase : inintial value 
            2) update phase : change value
            3) unmouting phase : empaty value
        */}

        <h1>hello {this.state.name}</h1>

        <button onClick={()=>this.setState({name:"sujal jadav"})}>Change name</button>
      </div>
    )
  }
}

export default ClassLife
