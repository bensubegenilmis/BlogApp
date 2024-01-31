import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";



const blogReducer = (state, action) => {
    switch(action.type)
    {
        case 'add_blogbost':
            return [...state, {
                
                id:Math.floor(Math.random()*999999),
                title:action.payload.title ,
                content: action.payload.content,
             }];

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
    return(title, content, callback) => {
        dispatch({type: 'add_blogbost', payload:{title,content}}); 
        if(callback) {
            callback ();
        }
    };
   

};



export const {Context,Provider} = createDataContext(blogReducer, {addBlogPost,deleteBlogPost},
     []);