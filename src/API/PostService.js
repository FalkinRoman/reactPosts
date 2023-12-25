import axios from 'axios';

export default class PostService {

    //получение всех постов
    static async getAll(limit = 10 , page = 1) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: limit,
                _page: page
            }
           
        })
        return responce 

    }

    //получить пост по id 
    static async getById(id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
        return responce ;

    }


     //получить комментарии по id 
     static async getCommetsById(id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return responce ;

    }
}
