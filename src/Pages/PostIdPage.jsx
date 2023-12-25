import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hook/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import CommentList from '../components/CommentList';
import PostIdItem from '../components/PostIdItem';

const PostIdPage = () => {
    const params = useParams()  //хук позволяет закрать с url параметр (номер поста)
    const [post, setPost] = useState({}); //Сохранить значение поста
    const [comments, setComments] = useState([]); //Сохранить значения комментариев 

    //Получение поста по id 
    const [fetchPostId, isPostIdLoading, postIdError] = useFetching(async () => {
        const responce = await PostService.getById(params.id)
        setPost(responce.data)
    })

    //Получение комментарии к посту
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const responce = await PostService.getCommetsById(params.id)
        setComments(responce.data)
    })

    useEffect(() => {
        fetchPostId()
        fetchComments()
    }, [])

    return (
        <div>
            {isPostIdLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}><Loader /></div>
                : <PostIdItem post={post}/>
            }

            {isComLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}><Loader /></div>
                : <CommentList comments={comments}/>

            }
        </div>

    );
};

export default PostIdPage;