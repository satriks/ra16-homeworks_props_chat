import { Post } from "../../../models/Post"
import pic from '../../../assets/typing.png'

interface Props {
    data : {
        from : { name : string},
        message : Post
    }
}


const Typing = ({data} :Props ) => {
    const { from,  message } = data
    
    
    return (
        <li className="message-data">
        <div className="message-data align-left">
            
            <span className="message-data-name">
                <i className="fa fa-circle online">{from.name}</i>
            </span>
            <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        </div>
        <div className="typing">
            <img src={pic} alt="" />

        </div>

     </li>
    )
}


export default Typing