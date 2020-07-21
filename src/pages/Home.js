import React, {useContext, Fragment} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from '../components/context/github/githubContext'

export const Home= () => {

    //   const cards= new Array(12).fill(" ").map(( _ ,i) => i)
    //    console.log(cards)
    const {users, loading}= useContext(GithubContext)
   
    return (
        < Fragment>
            <Search />
            <div className='row'>
                {loading
                ?<div className='text-center'>Загрузка...</div>
                :users.map(user => {
                return (<div className='col-sm-4 mb-4' key={user.id}>
                    <Card user={user} />            
                </div> )
            })}
            
            </div>
            
         

        </Fragment>
    )
}