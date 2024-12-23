import React from 'react'

function ChatResponse({response}) {
  const candidates = response?.candidates || [];
  const usageMetadata = response?.usageMetadata || {};
  return (
    <div>
      {response &&
        (<div className='container text-[#e0e1dd] bg-[#1b263b] min-w-full px-4 py-2 flex flex-col  gap-2'>
          {candidates && candidates.map((candidate,index)=>(
            <div key={index} className='bg-[#32465D] text-[#E0E1DD] mx-2 px-3 py-2 max-w-screen-xl rounded-xl self-end'>
               <h1 className='bg-gradient-to-r from-[#a2a0d6] via-[#e1c8af]  to-[#4987fe] text-transparent bg-clip-text text-2xl   font-semibold' >
      Here is Our Response
    </h1>
         
              <p className='text-justify text-lg leading-7'>
              {candidate.content.parts[0].text}
              </p>
            
              <ul>
              {candidate?.citationMetadata?.citationSources.map((source,idx)=>(
                <li key={idx}>
                  <a href={source.url} target='blank' rel='noopener noreferrer'>

                  </a>
                  {""}
                  (indexes :{source.startIndex}-{source.endIndex})
                </li>
              ))}
              </ul>
          
            </div>
          ))}
          <div className="usageMetadata rounded-xl bg-[#0d1b2a] w-44 flex flex-col justify-center px-2 py-1 self-end mx-2 ">
          <h4>Usage Metadata</h4>
          <p>prompt tokens :{usageMetadata.promptTokenCount}</p>
          <p>response token :{usageMetadata.candidatesTokenCount}</p>
          <p>total tokens :{usageMetadata.totalTokenCount}</p>
          </div>
         
        </div> )
      
      }
     
    </div>
  )
}

export default ChatResponse