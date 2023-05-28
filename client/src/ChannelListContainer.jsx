import React from 'react';
import {ChannelList,useChatContext} from 'stream-chat-react';

import Cookies from 'universal-cookie';

import TeamChannelList from './component/TeamChannelList';
import HospitalIcon from '/Users/uhunmwaghoosamagbemichael/Desktop/CommuniCADE/client/src/assets/hospital.png'
import LogoutIcon from '/Users/uhunmwaghoosamagbemichael/Desktop/CommuniCADE/client/src/assets/logout.png'
import ChannelSearch from './ChannelSearch';
import TeamChannelPreview from './TeamChannelPreview';


const SideBar = () =>(
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Hospital" width="30"/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt="Logout" width="30"/>
            </div>
        </div>
    </div>
    
);


const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className="channel-list__header__text"> Anubis </p>
    </div>
)

const ChannelListContainer = () => {
  return (
    <>  
    <div>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
           
            <CompanyHeader/>
            <ChannelSearch/>

            {/* channel list for group messages  */}
            <ChannelList
            filters={{}}
            channelRenderFilterFn={()=>{}}
            List={(listProps)=>(
                    <TeamChannelList 
                    {...listProps}
                    type= "team"
                    />

            )}

            Preview={(previewProps) => (
                <TeamChannelPreview {...previewProps}
                type = "team"
                />
            )}
                
     />

     {/* channel list for direct messages */}

     <ChannelList
            filters={{}}
            channelRenderFilterFn={()=>{}}
            List={(listProps)=>(
                    <TeamChannelList 
                    {...listProps}
                    type= "team"
                    />

            )}

            Preview={(previewProps) => (
                <TeamChannelPreview {...previewProps}
                type = "team"
                />
            )}
                
     />

        </div>
    </div>
    </>
  );
}

export default ChannelListContainer
