import React from 'react'

const Notification = ({ text, textColor }) => {
  if (text === null) return null

  const messageStyle = {
    color: `${textColor}`
  }

  return (
    <div style={messageStyle} className='notification'>
      {text}
    </div>      
  )
}

export default Notification