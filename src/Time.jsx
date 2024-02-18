import React from 'react'
import { useState } from 'react'



export const Time = () => {

  const [hora, setHora] = useState(new Date)

  return (
    <div className='timer'> 
    <input className='timeInput' type="text" value={hora} />
    </div>
  )
}
