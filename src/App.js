
import SideBar from './components/SideBar';
import ChatView from './components/ChatView.js';
import { ChatContextProvider } from './components/ChatContext';

import './App.css';
function App() {
  return (
    <div className='flex'>
      <SideBar />
      <ChatView/>
    </div>

  );
}

export default App;
