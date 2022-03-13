import { Component } from "react";

import star from "./star.png";

export class Vacation extends Component{
   state = {
userInput: "",
vacationList:[],
   }
   onChangeEvent(e){
      this.setState({
         userInput: e
      })
   }

   addItem(input){
      if(input === ""){
         alert("Please, enter some text")
      }
      else{
      let listArray = this.state.vacationList;
      listArray.push(input);
      this.setState({
         vacationList: listArray,
         userInput: "",
      })
   }
   }

   crossWords(e){
      let li = e.target;
      li.classList.toggle("crossed");
   }
   onFormSubmit(e){
      e.preventDefault()
   }
deleteItem(){
   let listArray = this.state.vacationList;
   listArray =[];
   this.setState({
      vacationList: listArray,
   })
}
render(){
   return(
      <div>
         <form onSubmit={this.onFormSubmit}>
         <div className="container">
            <input type="text" 
            placeholder="What do you want to take?"
            value={this.state.userInput}
            onChange={(e) => {this.onChangeEvent(e.target.value)}} />
         </div>
         <div className="container">
         <ul>
         {this.state.vacationList.map((item, index)=>
         <li onClick={this.crossWords} key={index}><img src={star} alt="star" width="20px"/> {item}</li> )} 
         </ul>
         </div>
         <div className="container">
            <button className="add" onClick={() => this.addItem(this.state.userInput)} >Take it!</button>
         </div>
         <div className="container">
            <button className="delete" onClick={() => this.deleteItem()} >Delete all</button>
         </div>
         </form>
      </div>
   )
}
}