import React,{useState,useEffect,useRef} from "react";
import { MdSend } from "react-icons/md";

import './SideBar.css'


const ChatView = () => {
    const messagesEndRef = useRef();
    const inputRef = useRef();
    const [formValue, setFormValue] = useState('');

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return(
    <div className='chatview'>
        <main className='chatview__chatarea'>
            <div>
                <h1 ><span className="chatview_chatarea_text">How can i help you today?</span></h1>
                <ul>
                    <li>How to troubleshoot?</li>
                    <li>How to Restart?</li>
                    <li>How to troubleshoot?</li>
                    <li>How to troubleshoot?</li>
                </ul>
            </div>

        </main>
       
    <form className='form'>
        <div className='flex items-stretch justify-between w-full'>
          <textarea
            ref={inputRef}
            className='chatview__textarea-message'
            
          />
          <button
            type='submit'
            className='chatview__btn-send'
            disabled={!formValue}>
            <MdSend size={30} />
          </button>
        </div>
    </form>
   
    </div>
    );

}

export default ChatView;