import React from 'react'
import { useRouter } from 'next/router'

const ClientProject = () => {
  const router = useRouter();
  console.log("query = ",router.query);
  
  return (
    <>
    <div>this is the specific Client Project</div>
    <p>{router.query.id}</p>
    <p>{router.query.clientProjectId}</p>

    </>
  )
}

export default ClientProject