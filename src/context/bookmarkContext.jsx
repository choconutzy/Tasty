import React from 'react';
import { createContext, useContext, useReducer } from 'react';


const intialState = []
const BookmarkContext = createContext();

const bookmarkReducer =(state, action) =>{
    switch(action.type) {
        case 'add':{
            return [...state, action]
        }
        case 'remove' : {
            return state.filter(bookmark => bookmark.id !== action.id)
        }
        default:
            return state;
    }
}

const BookmarkProvider = ({children}) => {
    // useReducer
    const [state, dispatch] = useReducer(bookmarkReducer, intialState)
    // Make variable `value` and assign state & dispatch
    const value = {state,dispatch}
    return <BookmarkContext.Provider value= {value}>{children}</BookmarkContext.Provider>

}

const useBookmark = () => {
    // fill the default value of useContext
    const context = useContext(BookmarkContext);
    if(context === undefined){
        throw new Error('useCount must be used within a Bookmark Provider')
    }

    return context
}

export { BookmarkProvider, useBookmark }