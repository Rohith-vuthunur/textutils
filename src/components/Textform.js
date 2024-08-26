import React,{useState} from 'react'

export default function Textform(props) {
    const [text,nwtxt] = useState("")
    const change = (event)=>{
        nwtxt(event.target.value)
    }
    
    const clear=()=>{
        nwtxt("")
    }
    const upper =()=>{
        nwtxt(text.toUpperCase())
    }
    const lower =()=>{
        nwtxt(text.toLowerCase())
    }
  return (
    <>
        <div className={`container my-3 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
            <div className="h4 my-3">Try TextUtils</div>
            <div className={`form-floating bg-${props.mode} text-${props.mode==="light"?"dark":"light"}"`}>
                <textarea className={`form-control bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={change} rows="8" cols="10"></textarea>
            
            </div>
            <button disabled={text.length===0} className="btn-outline-primary my-3 mx-2" onClick={clear}>ClearText</button>
            <button disabled={text.length===0} className="btn-outline-primary my-3 mx-2" onClick={upper}>To upperCase</button>
            <button disabled={text.length===0} className="btn-outline-primary my-3 mx-2" onClick={lower}>To lowerCase</button>
        </div>
        <div className="container">
            <p className={`text-${props.mode==="light"?"dark":"light"}`}>Number of words: {text.split(/\s+/).filter((element)=> {return element.length!==0}).length}</p>
            <p className={`text-${props.mode==="light"?"dark":"light"}`}>Number of characters:{text.length}</p>
            <h2 className={`text-${props.mode==="light"?"dark":"light"}`}>preview</h2>
            <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text===""?"Nothing to Preview":text}</p>
        </div>
        <div className="container">
           
        </div>
    </>
    
  )
}
