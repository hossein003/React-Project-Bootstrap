import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Posts(props) {
    const {posts} = props;
  return (
    <div className='container px-4 w-100' style={{margin:'300px'}}>
    <div className='row gx-5'>

        {posts.map(post=>{
            
            return(
                <Card border="info" className='col-3 mx-5 mb-4'>
                <Card.Body className='p-30 m-1'>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
            </Card>
     
            
            )
        })}
    </div>
    </div>
  )
}

export default Posts;