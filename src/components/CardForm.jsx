import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";
import { HOME } from "../services/consts";

function CardForm() {
    const [content, setContent] = useState(""); // Состояние для контента
    const navigate = useNavigate(); // Хук для навигации

    async function handleSubmit(e) {
        e.preventDefault(); // Останавливаем стандартное поведение формы
        try {
            await a.post('items/post/', { content }); // Отправляем данные на сервер
            navigate(HOME); // Перенаправляем на домашнюю страницу
        } catch (err) {
            console.log(err); // Логируем ошибку, если она произошла
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                className="form-control"
                rows="30"
                cols="30"
                placeholder="Напишите свои занятия на сегодня..."
                value={content} // Привязываем значение контента
                onChange={(e) => setContent(e.target.value)} // Обновляем состояние при изменении
            />
            <button className="submit-primary-button" type="submit">Сохранить</button>
        </form>
    );
}

export default CardForm;
