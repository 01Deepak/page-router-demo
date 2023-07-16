import Link from 'next/link'
import React from 'react'

const Clients = () => {
  const clients = [
    {id:'Deepak',name:'Deepak'},
    {id:'Shubham',name:'Shubham'},
    {id:'Balpreet',name:'Balpreet'},
  ]
  return (
    <>
    <div>The clients page.</div>
    <ul>
    {
      clients.map((client) => {
        return (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        )
      })
    }
    </ul>
    </>
  )
}

export default Clients