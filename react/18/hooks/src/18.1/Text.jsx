import React , {useState} from "react";

export function Text (props){
    const full_text = props.text ;
    const short_text = full_text.slice(0, props.num);
    
    const [text , setText] = useState(short_text)
    const [btn , setBtn] = useState('more')
    const [open , setOpen] = useState(false)






    function check(){
        if(!open ){
            setBtn('less');
            setText(full_text);
            setOpen(true);
        }
        if(open){
            setBtn('more');
            setText(short_text);
            setOpen(false);

        }
    }

    const  clickHandler = () =>{
        check()
       
    }

    return(
        <div>
            {text}
            <br/>
            <a  onClick={clickHandler}>see {btn}</a>
        </div>
    )
}