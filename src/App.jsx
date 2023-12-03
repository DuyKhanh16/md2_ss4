// import React, { Component } from 'react'
// import Child from './components/Child';
// import Form from './components/Form';

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       count:0,// cơ chế state trong classcomponent merge,function replace
//       active:true,

//     }
//   }
//   componentDidUpdate = ()=>{
//     console.log("componentDidUpdate được thực thi");
//   }
//   componentWillUpdate=()=>{
//     console.log("componentWillUpdate bắt đàu được gọi");
//   }
//   shouldComponentUpdate=()=>{
//     console.log("shouldComponentUpdate được thực thi");
//     return true
//   }
//   componentDidMount = ()=>{
//     console.log("sau khi component render lần đầu tiên chạy đến Didmount");
//     //nơi để call API

//   }
//   componentWillMount=()=>{
//     console.log("compnent wilmount bắt đầu chạy");
//   }
//   increseCount = ()=>{
//     this.setState({
//       count:this.state.count+1
//     })
//   }
//   removeChild=()=>{
//     this.setState({
//       active:false,
//     })
//   }
//   render() {
//     console.log("component render lần đầu tiên");
//     return (
//       <>
//         Count {this.state.count}
//         <button onClick={this.increseCount}>Tăng</button>
//         {this.state.active? <Child></Child>:""}
//         <button onClick={this.removeChild}>Remove Child</button>
//         <Form></Form>
//       </>
//     )
//   }
// }
import React from 'react'
import Header from './components/Header'
const

export default function App() {
  return (
    <>
    <Header></Header>
    <input type="text" />
    <button>Thêm</button>
    </>
  )
}


