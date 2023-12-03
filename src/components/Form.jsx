import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            age:"",
        }
    }
    saveInfor=(e)=>{
        e.preventDefault()
    }
    changeValue = (e)=>{
        let name = e.target.name;
        let value=e.target.value;
        this.setState({
            [name]:value,//cú pháp của phương thức
        })
    }
  render() {
    return (
      <>
        <form action="">
            <label htmlFor="">Họ và tên</label>
            <input 
            placeholder='Mời nhập tên' 
            type="text" 
            onChange={this.changeValue}
            name="name"
            /><br />
            <label htmlFor="">Tuổi</label>
            <input 
            placeholder='Mời nhập tuổi' 
            onChange={this.changeValue}
            name="age"
            type="text" 
            /><br />
            <button onClick={this.saveInfor}>Lưu</button>
            
        </form>
      </>
    )
  }
}
