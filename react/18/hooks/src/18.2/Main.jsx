import { Item } from "./Item";




    export const Main = ()=>{
        const arr = [
            { name: "CSS", completed: true },
            { name: "JavaScript", completed: true },
            { name: "Learn React", completed: false },
            { name: "Learn mongoDB", completed: false },
            { name: "Learn Node JS", completed: false },
            ]

        return(
            <>
            {arr.map(item => <Item key={item.name}  data={item} />)}
                </>
        ) ;
       
    }