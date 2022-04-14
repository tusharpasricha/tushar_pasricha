import classes from './main.module.css'
import {NavLink,useHistory} from 'react-router-dom'
import { useState} from "react";
import Backdrop from "./backdrop";

function Main()
{
    const history = useHistory();
    const[mainintro,setmainintro]= useState('Hy,I am Tushar Pasricha')
    const[nav2,setnav2]= useState('Projects')
    const [modelisopen,setmodelisopen]=useState(false);
    const[about,setabout]=useState("");
    function moreData()
    {
        setmainintro('Hy,I am Tushar')
        setnav2('')
        setmodelisopen(true);
    }
    function lessdata()
    {
        history.push("/");
        setmainintro('Hy,I am Tushar Pasricha')
        setnav2('Projects')
        setmodelisopen(false);
        setabout('')
    }
    function showabout()
    {
        setmainintro('');
        setmodelisopen(true);
        setabout('I am a software developer doing my Btech CSE @JIIT noida ,currently in 2nd year')
    }

    return(<>
    <div className={classes.main}>
        
        <div onClick={showabout} className={classes.mainintro}>
           {mainintro}
            {/* <div className={classes.about}>
               <li onClick={showabout}> about</li>
            </div> */}
        </div>

        <div className={classes.aboutdata}>
            {about}
        </div>
        
        <div className={classes.socialhandles}>
           <a href='https://github.com/tusharpasricha' target="_blank"> Github</a>

           <a href="https://www.linkedin.com/in/tusharpasricha" target="_blank"> LinkedIn</a>

           <a href="https://twitter.com/tusharpasricha_" target="_blank"> Twitter</a>

           <NavLink activeClassName={classes.active}  to="/suggestions" onClick={moreData}> Suggestions</NavLink>

        </div>
        <div className={classes.bar}>
        <ul>
            <li><NavLink activeClassName={classes.active}  to="/"> Home</NavLink></li>
            <li><NavLink activeClassName={classes.active}  to="/post" onClick={moreData}> {nav2}</NavLink></li>
        </ul>
        {modelisopen && <Backdrop onCancel={lessdata}/>}
        </div>
    </div>
    </>)
}
export default Main;