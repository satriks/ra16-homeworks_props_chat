import { Post }from "../../models/Post"
import './messageHistory.css'
import Message from "./types/Message"
import Response from "./types/Response"
import Typing from "./types/Typing"


interface Props {
    list : Post[]
}

const MessageHistory = ( props:Props ) => {

    const list = props.list

    
    return (
        <ul>
            <div className="clearfix"></div>

            {list.map( message => { 
                const data =  {from : message.from, message : message}

                if (message.type === "typing"){
                    return (
                        <Typing key={message.id} data={data}/>
                    )
                }

                if (message.type === "response"){
                    return (
                        <Response key={message.id} data={data}/>
                    )
                }

                if (message.type === "message"){


                    return (
                        <Message key={message.id} data={data}/>
                    )
                }

                return (
                    <></>
                
            )
            })}
            

            
        
        </ul>
    )
    }



export default MessageHistory