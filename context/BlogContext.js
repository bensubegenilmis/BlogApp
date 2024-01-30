import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type)
    {
        case 'add_blogbost':
            return [...state, {title:'Angular'}];
            default:
                return state;
    }
}


export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, 
        [{ title: 'React Native' },
         { title: 'Jacascript' },]);
  /*   const [blogPosts, setBlogPosts] = useState([
        { title: 'React Native' },
        { title: 'Jacascript' },
        ]); */

    const addBlogPost = () => {
        dispatch({type: 'add_blogbost'});
        //setBlogPosts([...blogPosts, {title: 'Vue Js'}]);

    }


    return <BlogContext.Provider value={{data:blogPosts , addBlogPost}} >
        {children}</BlogContext.Provider>
};

export default BlogContext;