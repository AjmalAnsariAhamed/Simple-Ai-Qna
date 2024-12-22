import React from 'react'

function ChatResponse({response}) {
  return (
    <div>
      {response?
        ( <h1>responce</h1>)
        : <h1>hello</h1>
      }
     
    </div>
  )
}

export default ChatResponse