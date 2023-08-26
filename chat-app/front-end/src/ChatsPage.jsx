import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage=(props)=>{
    
        const chatProps=useMultiChatLogic("32148d62-936e-484e-8b19-e06f2e7dc2a4",props.user.username,props.user.secret);

    return(
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}} />
        </div>)
}
export default ChatsPage