import Card from "./Card";
import { useState } from "react";
import Errormodel from "./errormodel";
import classes from "./suggestion.module.css";
const Suggestions = props =>{
    const[enteredname,setenteredname]=useState('')
    const[enteredsugg,setenteredsugg]=useState('')
    const[error,seterror]=useState();


const submithandler=(event)=>
{
    event.preventDefault();
    if(enteredname.trim().length==0||enteredsugg.trim().length==0)
    {
        seterror({
            title : "An error occured",
            message: "Please check the input"
        })
        return;
    }
    event.preventDefault();
    console.log(enteredname);
    console.log(enteredsugg);

    setenteredname(' ')
    setenteredsugg(" ")
}
const namechangehandler=(event)=>{
    setenteredname(event.target.value)
}
const suggchangehandler=(event)=>{
    setenteredsugg(event.target.value)
}
const errorHandler=()=>{
    seterror(null);
}
    return(
        <Card>
           {error && <Errormodel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <form className={classes.box} onSubmit={submithandler}>
            <label htmlFor="name">Name</label><br></br>
            <input onChange={namechangehandler} value ={enteredname}type="text" /><br/>
            <label htmlFor="suggestion">Suggestion</label><br/>
            <input onChange={suggchangehandler} value ={enteredsugg} type="text" /><br/><br/>
            <button>Submit</button>
        </form>
        </Card>
    )
};
export default Suggestions;
