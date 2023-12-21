import { Post } from "../../../models/Post"

interface Props {
    data : {
        from : { name : string},
        message : Post
    }
}


const Response = ({data} :Props ) => {
    const { from,  message } = data
    
    
    return (
        <li className="message-data">
        <div className="message-data align-right ">
             <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
             <span className="message-data-name">
                 <i className="fa fa-circle me">{from.name}</i>
             </span>
         </div>
         <div className="message other-message float-right">
         {message.text}
        </div>
    </li>
    )
}


export default Response