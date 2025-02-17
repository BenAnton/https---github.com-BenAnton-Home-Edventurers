/* eslint-disable react/prop-types */
import "../Forum-Components/Feed.css";
import Post from "../Forum-Components/Post";

const testPosts = [
  {
    id: 1,
    user: "Ben",
    content: "This is the first post on the community",
    likes: 0,
    comments: [],
    created: "17th Feb 2025 12:00",
    category: "General Discussion",
  },
  {
    id: 2,
    user: "Ben",
    content:
      "This is the second post on the community, and it has a load of rubbish after to increase the length of the content for testing, blah blah blah blah blah blah, hello hello hello, 12344567835345rwdfegergwergqergqergegwegwrgwergergaeg",
    likes: 999,
    comments: [],
    created: "17th Feb 2025 13:00",
    category: "General Discussion",
  },
];

function Feed({ category }) {
  const selectedPosts = testPosts.filter((post) => post.category === category);

  return (
    <div className="feed-cont">
      <h2 className="cat-title">{category}</h2>
      <ul className="post-cont">
        {selectedPosts.map((post) => (
          <li className="post" key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
