import React, { Component } from 'react'
import Blog from './Blog'

 class Addpost extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             title:" ",
             details:" ",
             people:[]
        }
    }
    handleChange=event=>{
        console.log(event.target.value)
        this.setState({
            [event.target.name]:[event.target.value]
        })
    }
    handleSubmit=e=>{
        e.preventDefault();
        const title = this.state.title;
        const details = this.state.details;
        if(title.length>0&&details.length>0){
            const persone =`${title},${details}`
            this.setState({
               people:[...this.state.people,persone],
                title:" ",
                details:" "
            })
        }
        
    }
    render() {
        return (
            <div className="container style-post"> 
            <form className="fomr-groug" onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-lg-2 col-sm-10 col-md-8">
                    <h3>TITLE</h3>
                </div>
                <div className="col-lg-10 col-sm-10 col-md-8 ">
                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="col-lg-2 col-sm-10  mt-5">
                    <h3>IMAGE</h3>
                </div>
                <div className="col-lg-10 col-sm-10  mt-5">
                    <input type="file" name="img" className="custom-file-input"/>
                    <label  className="custom-file-label" >Choose file</label>
                </div>
                <div className="col-lg-2 col-sm-10  mt-5">
                    <h3>SLUG</h3>
                </div>
                <div className="col-lg-10 col-sm-10  mt-5">
                    <textarea name="details" className="form-control" rows="7" value={this.state.details}  onChange={this.handleChange}/>
                </div>
                <div className="col-lg-2 col-sm-10  mt-3">
                    <span></span>
                </div>
                <div className="col-lg-10 col-sm-10  mt-3">
                    <button type="submit" className="btn bg-info text-white btn-block">SUBMIT</button>
                </div>
            </div>
            </form>
            <div>
                {this.state.people.map((item,index)=>{
                    return <p key={index}>{item}</p>
                })}
            </div>

            </div>
        )
    }
}

export default Addpost

