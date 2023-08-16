import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

import PostForm from "./components/UI/PostForm";
import MySelect from "./components/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Python", body: "aaa" },
    { id: 2, title: "Javascript", body: "bcded" },
    { id: 3, title: "Java", body: "rst" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
