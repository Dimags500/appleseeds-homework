import React , {useState} from "react";
import { ReactDOM } from "react";
import './Item.css'

export const Item = (props)=>{

    const [text , setText] = useState(props.data.name);
    const [completed , completedText] = useState(props.data.completed) ;


    function isComplited(){
        if(completed){
            return <span>Yes</span>
        }
        if(!completed){
            return <span>No</span>
        }
    }

    const compliteOnClickHandler =() => {
        completedText(!completed)
    }

    return(
        <div>
       <span  className={completed ? "done" : "notdone"}> 
       {text} :</span>  <span  onClick={()=>{compliteOnClickHandler()}}>{isComplited()}</span>

            </div>
    ) ;
   
}