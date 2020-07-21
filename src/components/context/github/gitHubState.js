import React, {useReducer} from 'react'
import { GithubContext } from './githubContext'
import {githubReducer} from './githubReducer'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING} from '../alert/Types'
import axios from 'axios'


const CLIENT_ID= process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET
export const GitHubState= ({children}) =>{
    const initialState={
        user:{},
        users:[], //result of search
        repos:[],//of one user
        loading: false //when we wait response
    }
    const [state, dispatch]= useReducer(githubReducer, initialState)

    const search= async (value) => {
        setLoading()
        const response= await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            )
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }
    const getUser= async name => {
        setLoading()
        const response= await axios.get(
            `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            )
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }
    const getRepos= async name =>{
        setLoading()
        const response= await axios.get(
            `https://api.github.com/users/${name}/repos?per_page=10&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            )
        dispatch({
            type:GET_REPOS,
            payload: response.data
        })
    }
    const clearUsers= () => dispatch({type: CLEAR_USERS})
    const setLoading= () => dispatch({type:SET_LOADING})
    const {user, users, repos, loading}= state
    
    return (
    <GithubContext.Provider value={{
        search, setLoading, getRepos, getUser, clearUsers,
        user, users, repos, loading}}>
        {children}
    </GithubContext.Provider>
    )
}
