import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postReducer } from './slices/posts/postsSlice'
import { addPost, ignoreEmptyComment, removePosts } from './middlewares/posts';
import { searchReduser } from './slices/search/searchSlice';
import { ignoreUpperCaseAndWhitespace } from './middlewares/search';
import { usersReducer } from './slices/users/usersSlice';
import { messagesReducer } from './slices/messages/messagesSlice';
import { ignoreEmptyMessage } from './middlewares/messages';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    posts: postReducer,
    search: searchReduser,
    users: usersReducer,
    messages: messagesReducer
})

const persistConfig = {
    key: 'unikalinsta',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewares) =>{
        return [...getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }), addPost,removePosts, ignoreEmptyComment, ignoreEmptyMessage, ignoreUpperCaseAndWhitespace]
    }
})

export const persistor = persistStore(store)

export default store