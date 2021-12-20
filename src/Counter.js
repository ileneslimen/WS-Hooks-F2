import { useEffect, useState } from "react"


function Counter(){
    // state={count:0}
 const [count, setCount]=useState(0)

const [text,setText]=useState('')
    // const [todos,setTodos]=useState([])



    // increment = ()=> {this.setState({count: this.state.count+1})}


//component did mount

useEffect(()=>{   document.title="hi"    },[])

// component did update

useEffect(()=>{  document.title=count+text   }, [count, text])

// component did update alaa les variables elkol 

useEffect(()=>{  document.title=count+text   })

// component will unmout 
useEffect(()=>{   return()=> document.title="bye"   }, [])


const increment=(x)=>{ setCount(count+x)}

 const decrement=()=>{ setCount( count>0 ?  count-1   :0 ) }
   
    return (

        <div>
        <button  onClick={()=>increment(5)} >+</button>
        <span>{count}</span>
        <button onClick={decrement} >-</button>
        <input  onChange={(e)=> setText(e.target.value)} value={text}/>
        <h1>{text}</h1>
        </div>
    )
}

export default Counter