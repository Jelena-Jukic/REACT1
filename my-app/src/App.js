import {useState} from "react";
import { SignInPage } from "./pages/SignInPage";
import {ChatPage} from "./pages/ChatPage"
function App() {
  const [username, setUsername] = useState('');

  function handleUsername(username) {
    setUsername(username);
  }
  return (
    <div>
      {username==='' && <SignInPage onSubmit= {handleUsername} />}
      {username !=='' && <ChatPage />}
      
    </div>
    
  );
}

export default App;
