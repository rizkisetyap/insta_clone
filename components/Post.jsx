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
const Post = ({ post }) => {
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
          <HeartIcon className="post-btn" />
          <ChatIcon className="post-btn" />
          <PaperAirplaneIcon className="post-btn" />
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
      <div className="comment"></div>
      <div className="input">
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0"
            placeholder="comment.."
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      </div>
      {/* to do 2:15:37 */}
    </div>
  );
};

export default Post;
