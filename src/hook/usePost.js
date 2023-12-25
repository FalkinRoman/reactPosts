import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
        //отсартированный массив только по selected(кэшируемый)
    const sortedPosts = useMemo(() => {
        if(sort) {
        return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        } 
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
        //отсартированный массив с функционалом поиска 
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query))
    }, [query, sortedPosts]) 

    return sortedAndSearchedPosts;
}