/* eslint-disable react/prop-types */
import "../Forum-Components/Post.css";
import up from "/Users/benanton/Documents/At-Home-Mum-Hub-2025/At-Home-Mum-Hub/client/src/assets/up.png";

function Post({ post }) {
  return (
    <div className="full-post">
      <h3 className="user-post">{post.user}</h3>
      <p className="content">{post.content}</p>
      <div className="third-row">
        <button className="post-buttons button-flex">
          <img className="up-arrow" src={up} alt="up arrow" /> ({post.likes})
        </button>

        <button className="post-buttons">
          Comments ({post.comments.length})
        </button>

        <p>Created: {post.created}</p>
      </div>
    </div>
  );
}

export default Post;
