import React from 'react'; // Добавьте этот импорт
import backIcon from"../assets/images/back.svg"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { a } from '../services/axiosInstance';
import { HOME } from '../services/consts';

function Delete() {

    const {id} = useParams();
    const navigate = useNavigate();

    async function handleDelete() {
        try {
            await a.delete(`items/delete/${id}`);
            navigate(HOME);
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <div className="block">
            <div className="container">
            <Link to={HOME} className="fixed-top-left">
                <img src={backIcon} alt="Back" />
            </Link>
            <h1 className="title">Удалить заметку</h1>
            <p className="desription">Вы уверены, что хотите удалить этот пост? Это действие необратимо.</p>
            <button onClick={handleDelete} className="fixed-bottom-delete">Удалить</button>
            </div>
        </div>
    );
}

export default Delete;