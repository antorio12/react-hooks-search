import React from 'react'

export const Repos= ({repos}) =>(
    <React.Fragment>
    {repos.map(repo =>(
       
        <div className='card mb-3' key={repo.node_id}>
            <div className='card-body'>
                <h5>
                    <a href={repo.html_url}>{repo.name}</a>
                </h5>
            </div>
        </div>
       
    )
    
    )}
    </React.Fragment>
)