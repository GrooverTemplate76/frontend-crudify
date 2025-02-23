import { READ } from "../services/consts";
import { formatDate } from "../services/formatDate";
import { Link } from "react-router-dom";

function CardItem({post}) {
    return (
        <Link to={READ.substring(0, READ.length - 3) + post.id} className="card-item">
            <h3 className="card-item__title">{post.content}</h3>
            <span className="card-item__date">{formatDate(post.create_at)}</span>
        </Link>
    );
}

export default CardItem;