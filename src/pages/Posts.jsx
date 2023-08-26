import React, { useEffect, useState, useRef } from "react";
import MyButton from "../components/UI/button/MyButton";
import { useFetching } from ".//../hooks/useFetching";
import { usePosts } from ".//../hooks/usePosts";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from ".//../components/UI/pagination/Pagination";
import PostForm from ".//../components/UI/PostForm";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import { getPageCount, getPagesArray } from "../components/utils/pages";
import PostService from "../API/PostService";
import "..//styles//App.css";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/select/MySelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () =>
    setPage(page + 1)
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    // fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Количество элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      />

      {postError && <h1>Произошла ошибка {postError}</h1>}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />

      <div ref={lastElement} style={{ height: 20, background: "red" }}></div>

      {isPostsLoading && (
        <div className="page__loading">
          <Loader />
        </div>
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export default Posts;
