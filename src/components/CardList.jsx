import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { a } from "../services/axiosInstance";
function CardList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await a.get('items/');
                setPosts(res.data);
                console.log(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="card-list">
            {posts.map((post) => (
                <CardItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default CardList;