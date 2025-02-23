import backIcon from"../assets/images/back.svg"
import trashIcon from"../assets/images/trash.svg"
import fileplusIcon from"../assets/images/fileplus.svg"
import penIcon from"../assets/images/pen.svg"
import { useEffect, useState } from "react"
import { a } from "../services/axiosInstance"
import { Link, useParams } from "react-router-dom";
import { CREATE, DELETE, HOME, UPDATE } from "../services/consts"

function Read() {
    const { id } = useParams();  // Получаем id из URL
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await a.get(`items/detail/${id}`);
                setPost(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPost();
    }, [id]);

    return (
        <div className="block">
            <div className="container">
            <Link to={HOME} className="fixed-top-left">
                <img src={backIcon} alt="Back" />
            </Link>
            <h1 className="title">Чтение заметки</h1>
                <p className="description">{post.content}</p>
                <div className="fixed-menu-left">
                <Link to={DELETE.substring(0, DELETE.length - 3) + post.id} className="delete-button">
                    <img src={trashIcon} alt="Delete" />
                </Link>
                <Link to={UPDATE.substring(0, UPDATE.length - 3) + post.id} className="pen-button">
                    <img src={penIcon} alt="Pen" />
                </Link>
                <Link to={CREATE} className="plus-button">
                    <img src={fileplusIcon} alt="FilePlus" />
                </Link>
                </div>
            </div>
        </div>
    );
}
export default Read;