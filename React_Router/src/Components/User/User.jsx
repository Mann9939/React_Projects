import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const user = useParams()
  return (
    <div>User : {user.user_id}</div>
  )
}

export default User