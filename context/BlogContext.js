import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";



const blogReducer = (state, action) => {
    switch(action.type)
    {


        case 'get_blogpost':
            return action.payload;

       /*  case 'add_blogbost':
            return [...state, {
                
                id:Math.floor(Math.random()*999999),
                title:action.payload.title ,
                content: action.payload.content,
             }]; */

        case 'edit_blogbost':
            return state.map((blogPost) => {
                return blogPost.id ===action.payload.id ? action.payload
                : blogPost;
            });

        case 'delete_blogbost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
            default:
                return state;
    }
};

const deleteBlogPost = (dispatch) => {
    return(id) => {
        dispatch({type: 'delete_blogbost', payload : id}); 
    };

};

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogpost', {title, content});
        // dispatch({type: 'add_blogbost', payload:{title,content}}); 
        if(callback) {
            callback ();
        }
    };
   
};

const editBlogPost = (dispatch) => {
    return(id,title, content, callback) => {
        dispatch({type: 'edit_blogbost', payload:{id, title,content}}); 
        if(callback) {
            callback ();
        }
    };
   
};

const getBlogPosts = (dispatch) => {
    return async() => {
       const response = await jsonServer.get('/blogpost');
       console.log(response);
       dispatch({type: 'get_blogpost', payload: response.data }); 
    };
   
};



export const {Context,Provider} = createDataContext(blogReducer, {addBlogPost,deleteBlogPost, editBlogPost, getBlogPosts},
     []);