import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount=()=>{
        console.log("componentWillUnmount được thực thi");
    }
  render() {
    return (
      <>
        giai đoạn unMounting


      </>
    )
  }
}
