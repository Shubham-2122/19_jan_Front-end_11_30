// props : it's property 
// props : one coompoenent to other compoent data pass 
// props : it read only , we can not chanage data 
// class : props constro 
// this.props 
// props :  always pass second compoenent

import React, { Component } from 'react'

class ClassProps extends Component {
    constructor(props){
        super(props);
        this.data = props;
    }
    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>   
            </div>
        )
    }
}

export default ClassProps
