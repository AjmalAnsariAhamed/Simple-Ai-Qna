import React, { useState, useRef } from "react";

function ChatInput() {
  const [question, setQuestion] = useState("");
  const textareaRef = useRef(null);
  const handleInputChange = (e) => {
    setQuestion(e.target.value);

    // Resize the textarea dynamically
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height to auto to recalculate
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to match content
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault
    if (question.trim()){
      setQuestion("")

    }
    else{
      alert("enter the question")
    }
    
  }

  return (
    <div className="container  min-w-full bg-[#1b263b] text-[#e0e1dd] ">
      <div className="formGroup p-3 flex  items-center  justify-center gap-4 ">
        {/*<input className='bg-[#32465d] rounded-xl min-w-[65vw] min-h-26 outline-none text-md text-[#e0e1dd] py-2 px-1' type="text" name="" id="question" value={question} onChange={(e)=>setQuestion(prev=>prev=e.target.value)} placeholder='Ask a Question' />*/}
        <textarea
          ref={textareaRef}
          className="bg-[#32465d] rounded-xl min-w-[65vw] outline-none text-md text-[#e0e1dd] py-2 px-3"
          value={question}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="Ask a Question"
          rows={1}
          style={{ overflow: "hidden", resize:"none" }} // Hide scrollbars
        />
        <button
          className="bg-[#e0e1dd] px-2 py-1 text-[#0d1b2a] rounded-full"
          onClick={handleSubmit}
        >
         
          submit
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
