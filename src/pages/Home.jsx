import plusIcon from"../assets/images/plus.svg";
import { Link } from"react-router-dom"
import { CREATE } from "../services/consts";
import CardList from "../components/CardList";

function Home() {
    return (
            <div className="block">
              <div className="container">
                <Link to={CREATE} className="fixed-bottom-center">
                  <img src={plusIcon} alt="Plus" />
                </Link>
                <h1 className="title">Заметки</h1>
                <CardList />
              </div>
            </div>
    );
}

export default Home;