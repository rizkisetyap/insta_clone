import {
  DotsHorizontalIcon,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/solid";
import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Moment from "react-moment";

import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Post = ({ post }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLike, setHasLike] = useState(false);

  const sendComment = async (e) => {
    e.preventDefault();
    const comment2send = comment;
    setComment("");
    try {
      await addDoc(collection(db, "posts", post.id, "comments"), {
        comment: comment2send,
        username: session.user.username,
        userImage: session.user.image,
        timestamps: serverTimestamp(),
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const likeApost = async () => {
    try {
      if (hasLike) {
        await deleteDoc(doc(db, "posts", post.id, "likes", session.user.uid));
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
          username: session.user.username,
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", post.id, "comments"),
          orderBy("timestamps", "asc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db, post.id]
  );
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts", post.id, "likes")),
        (snapshot) => {
          setLikes(snapshot.docs);
        }
      ),
    [db, post.id]
  );

  useEffect(() => {
    setHasLike(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="header flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={post.userImg}
          alt={post.username}
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <DotsHorizontalIcon className="h-5 text-gray-400 cursor-pointer" />
      </div>
      <div className="img">
        <img src={post.img} alt="post img" className="object-cover w-full" />
      </div>
      <div className="flex justify-between px-5 py-4">
        <div className="flex space-x-4 items-center">
          {hasLike ? (
            <HeartIconSolid
              onClick={likeApost}
              className="post-btn text-red-600"
            />
          ) : (
            <HeartIcon onClick={likeApost} className="post-btn" />
          )}

          <ChatIcon className="post-btn" />
          <PaperAirplaneIcon className="post-btn" />
          {likes.length > 0 && (
            <span className="text-xs font-bold">
              {likes.length} people(s) like this
            </span>
          )}
        </div>
        <BookmarkIcon className="post-btn" />
      </div>
      <div className="caption">
        <div className="">
          <p className="p-5 truncate">
            <span className="text-black font-bold mr-1">{post.username} </span>
            {post.caption}
          </p>
        </div>
      </div>
      <div className="comment">
        {comments.length > 0 &&
          comments.map((comm) => (
            <div key={comm.id} className="flex items-center py-1 px-5">
              <img
                className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                src={comm.data().userImage}
                alt={comm.data().username}
              />
              <p className="p-5 truncate flex-1">
                <span className="text-black font-bold mr-1">
                  {comm.data().username}{" "}
                </span>
                {comm.data().comment}
              </p>
              <Moment className="text-gray-400 text-sm" fromNow>
                {comm.data().timestamps?.toDate()}
              </Moment>
            </div>
          ))}
      </div>
      {session && (
        <div className="input">
          <form className="flex items-center p-4">
            <EmojiHappyIcon className="h-7" />
            <input
              type="text"
              className="border-none flex-1 focus:ring-0"
              placeholder="comment.."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="font-semibold text-blue-400"
              onClick={sendComment}
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
