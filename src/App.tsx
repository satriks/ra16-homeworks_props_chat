
import './App.css'
import MessageHistory from './components/MessageHistory/MessageHistory';
import message from './data/data.js'

function App(){




  return (

  <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        
        <MessageHistory list={message} />
      </div>
    </div>  
  </div>

  )

  }
  
export default App
