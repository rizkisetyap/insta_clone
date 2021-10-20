import Post from "./Post";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamps", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={{
            username: post.data().username,
            userImg: post.data().profileImg,
            caption: post.data().caption,
            img: post.data().image,
            id: post.id,
          }}
        />
      ))}
    </div>
  );
};

export default Posts;
