import { useEffect, useState } from "react"; // Подключаем useState и useEffect
import { useNavigate, useParams } from "react-router-dom"; // Подключаем useNavigate и useParams
import { a } from "../services/axiosInstance";
import { HOME } from "../services/consts"; // Если у вас есть константа для главной страницы

function UpdateCardForm() {
    // Получаем id из параметров маршрута
    const { id } = useParams();
    // Состояние для хранения контента
    const [content, setContent] = useState(""); 
    const navigate = useNavigate(); // Хук для навигации после успешной отправки формы

    useEffect(() => {
        async function fetchPost() {
            try {
                // Получаем данные о заметке по ID
                const res = await a.get(`items/detail/${id}/`);
                setContent(res.data.content); // Устанавливаем контент в состояние
            } catch (e) {
                console.log(e); // Логируем ошибку, если она произошла
            }
        }
        fetchPost(); // Вызов функции для получения данных при монтировании компонента
    }, [id]); // Заводим зависимость от id, чтобы при его изменении перезапускать запрос

    // Обработчик отправки формы
    async function handleSubmit(e) {
        e.preventDefault(); // Останавливаем стандартное поведение формы (перезагрузку страницы)
        try {
            // Отправляем обновленные данные на сервер
            await a.put(`items/post/update/${id}/`, { content });
            navigate(HOME); // Перенаправляем на главную страницу
        } catch (err) {
            console.log(err); // Логируем ошибку, если она произошла
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                value={content} // Значение текстового поля привязано к состоянию content
                onChange={(e) => setContent(e.target.value)} // Обновляем состояние при изменении текста
                className="form-control"
                rows="30" 
                cols="30"
                placeholder="Напишите свои занятия на сегодня..."
            />
            <button className="submit-primary-button" type="submit">Изменить</button>
        </form>
    );
}

export default UpdateCardForm;
