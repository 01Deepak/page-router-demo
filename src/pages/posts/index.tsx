import React from 'react'

const Posts = (props:any) => {
  const {blogsData} = props;
  console.log("blogsData = ",blogsData);
  
  return (
    <>
    <div>this is Blog Page</div>
    <hr/>
    {
      blogsData.posts.map((post:any) => {
        return(
          <>
            <p>id : {post.id}</p>
            <p>title : {post.title}</p>
            <hr/>
          </>
        )
      })
    }
    </>
  )
}

export default Posts

export async function getStaticProps() {
 
  const res = await fetch('https://dummyjson.com/posts')
  const jsonResponse = await res.json()
 
  return {
    props: {
      blogsData:jsonResponse,
    },
  }
}