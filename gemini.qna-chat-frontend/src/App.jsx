import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatInput from "./Components/ChatInput"
import ChatResponse from "./Components/ChatResponse"
import { fetchChatResponse } from './services/Api'


function App() {
  const [response,setResponse] = useState(null)
  const [loading,setLoading]=useState(false)
  const handleQuestionSubmit= async (question)=>{
    setLoading(true)
    setResponse(null)
    try {
      const apiResponse=await fetchChatResponse(question)
      setResponse(apiResponse)
    } catch (error) {
      alert("failed")
      console.log(error)
      
    
    }
    finally{
      setLoading(false)
    }
  }

  return (
   <div className="main w-full h-screen bg-[#0d1b2a] ">
    <header className='bg-[#0d1b2a] w-full p-5 text-[#e0e1dd] font-medium text-xl '>
      <h1 className='bg-gradient-to-r from-[#a2a0d6] via-[#e1c8af]  to-[#4987fe] text-transparent bg-clip-text text-3xl'> Gemini chat</h1>
    </header>
    <ChatInput onSubmit={handleQuestionSubmit}/>
    {response === null ?
    <h1 className='bg-gradient-to-l from-indigo-500 via-[#F7C6D6] to-blue-500 text-transparent bg-clip-text text-5xl   m-auto h-44 font-semibold' >
      Ask us Anything
    </h1>
    :  <ChatResponse response={response}/>}
   

   </div>
  )
}

export default App
