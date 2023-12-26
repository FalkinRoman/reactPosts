import React, { useEffect, useState } from 'react';
import PostList from "../components/PostList";
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hook/usePost';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hook/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages'
import Pagination from '../components/UI/pagination/Pagination';


const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0) //Общее кол-во постов с запроса в header(x-total-count)
  const [limit, setLimit] = useState(10) //Кол-во постов на странице
  const [page, setPage] = useState(1) //номер текущей страницы
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const responce = await PostService.getAll(limit, page);
    setPosts(responce.data)
    const totalCount = responce.headers['x-total-count'];  //кол-во постов 
    setTotalPages(getPageCount(totalCount, limit))
  })


  const changePage = (page) => {
    setPage(page) 
  }








  //хук для управления жизненным циклом компонента (получение данных при первичной отрисовке)
  useEffect(() => {
    fetchPosts()
  }, [page])



  //добавить новый пост
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  //удалить пост
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createNewPost} />
      </MyModal>


      <PostFilter filter={filter} setFilter={setFilter} />

      <MyButton style={{ marginTop: 15, marginBottom: 20, padding: "6px 25px"  }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      {postError &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}><h2>Произошла ошибка ${postError}</h2></div>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}><Loader /></div>
        : <div>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
            <Pagination totalPages={totalPages} changePage={changePage} page={page}/>
          </div>
      }
      
    </div>
  );
};

export default Posts;