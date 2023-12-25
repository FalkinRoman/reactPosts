import React, {useState} from "react";
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput";

function PostForm({create}) {

    const[post, setPost] = useState({title:'', body: ''})

    const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        id: Date.now(),
        title: post.title,
        body: post.body
    }
    create(newPost)  //функция получаем от родителя 
    setPost({title:'', body: ''})
    }

    return ( 
        <form>
        <MyInput 
          value = {post.title}
          onChange = {e => setPost({...post, title: e.target.value})}
          type='text' 
          placeholder='Название поста' 
        />
        <MyInput 
          value = {post.body}
          onChange = {e => setPost({...post, body: e.target.value})}
          type='text' 
          placeholder='Описание поста' 
        />
        <MyButton style={{marginTop: 10}} onClick={addNewPost} >Создать</MyButton>
      </form>
     );
}

export default PostForm;