import React from 'react'
import { useRouter } from 'next/router'

const Clients = () => {
  const router = useRouter();
  console.log('router =',router.query);
  
  const handleLoadProject = () => {
    router.push('/clients/deepak/project-a')
  }

  return (
    <>
    <div>this is the list of clients page like client 1, client2 etc.</div>
    <p>you have clicked on <span style={{color:'red'}}>{router.query.id}</span> clients</p>
    <button onClick={handleLoadProject}>Load project A</button>
    </>
  )
}

export default Clients