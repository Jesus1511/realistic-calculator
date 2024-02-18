import React from 'react'
import "./styles.css"
import {useState} from "react";
import { Time } from './Time';

export const App = () => {


const [number, setNumber] = useState("")
const [result, setResult] = useState("0")
const [ansing, setAnsing] = useState(false)
  
  const handleClick = (event)=>{
    let dato = event.target.innerText
    const listAns = ["+","-","*","/","%"];
    console.log(dato)

    for(let i = 0;i <= 5; i++){
      if(ansing == true){
        if(dato == listAns[i]){
          setNumber(result + dato)
          setAnsing(false)
          break
        }
        else{
          setNumber(dato)
          setAnsing(false)
        }
    }
    else{
      if(number == "" || number == "Error"){
        setNumber(dato)
      }
      else{
        setNumber(number + dato)
      }
    }
    }
  }

  const borrar = ()=>{
    setResult("0")
    setNumber("")
    
  }


  
  const operar = ()=>{
    setAnsing(true)
    try{
      let resultado = new Function('return ' + number);
      setResult(resultado())
      }
    catch{
      setNumber("Error")
      setResult("")
    }
  }

  const backing = ()=>{
    let nueva = number.slice(0,-1);
    setNumber(nueva)
  }

  
  return (
    <>
    <div className='phone'>

      <Time />

      <div className='screen'> 
        <input readOnly className="input oldNumbers" type="text" value={number} />
        <input readOnly className='input newNumbers' type="text" value={result} />
      </div>

      <div className='buttonsContainer'>
        <button onClick={borrar}  className='white'>R</button>
        <button onClick={backing} className='white' >bck</button>
        <button onClick={handleClick} className='white'>%</button>
        <button onClick={handleClick}  className='orange'>/</button>
        <button onClick={handleClick} >7</button>
        <button onClick={handleClick} >8</button>
        <button onClick={handleClick} >9</button>
        <button onClick={handleClick}  className='orange'>*</button>
        <button onClick={handleClick} >4</button>
        <button onClick={handleClick} >5</button>
        <button onClick={handleClick} >6</button>
        <button onClick={handleClick}  className='orange'>-</button>
        <button onClick={handleClick} >1</button>
        <button onClick={handleClick} >2</button>
        <button onClick={handleClick} >3</button>
        <button onClick={handleClick}  className='orange'>+</button>
        <button onClick={handleClick}  className='zero' >0</button>
        <button onClick={handleClick} >.</button>
        <button onClick={operar} className='orange'>=</button>
      </div>
      </div>
    </>
  )
}
