import Contact from "../Pages/Contact"
import PostIdPage from "../Pages/PostIdPage"
import Posts from '../Pages/Posts';


//массив маршрутов
export const routes = [
    { path: '/reactPosts', element: Posts , exact: true },
    { path: 'posts/:id', element: PostIdPage, exact: true },
    { path: '/contact', element: Contact , exact: true },
];