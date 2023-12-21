import { Post } from "../../../models/Post"

interface Props {
    data : {
        from : { name : string},
        message : Post
    }
   

}


const Message = ({data} :Props ) => {
    const { from,  message } = data

    return (
        <li className="message-data">
            <div className="message-data align-left">
               
                <span className="message-data-name">
                    <i className="fa fa-circle online">{from.name}</i>
                </span>
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
            </div>
            <div className="message my-message">
            {message.text}
            </div>
         </li>
    )
}


export default Message