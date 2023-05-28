
import './App.css';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
// import {Cookies} from 'universal-cookie';
import ChannelListContainer from './ChannelListContainer';
import ChannelContainer from './ChannelContainer';
import './App.css';
import Auth from './Auth';


const apiKey = '3wjwjec8zdf8';
const client = StreamChat.getInstance(apiKey);
const authToken = false;

const App=()=>{


  // if we are not loggged in, we hide everything below 
  if(!authToken) return <Auth/>

  return (
    <div className='app_wrapper'>
      <Chat client={client} theme="team light"> 
        <ChannelListContainer/>
        <ChannelContainer/>

      </Chat>
   
    </div>

  );

}

export default App;
