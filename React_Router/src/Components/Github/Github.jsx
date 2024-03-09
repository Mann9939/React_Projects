import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();
   //const {github_user_id} = useParams();

  //   const [data,setData] = useState({});
  //   useEffect(() => {
  //       fetch(`https://api.github.com/users/${github_user_id}`)
  //         .then(response => response.json())
  //         .then(data => setData(data))
  //         .catch(error => {
  //           console.error('Error fetching data:', error);
  //           // Handle the error here, e.g., display an error message to the user
  //         });
  //     }, []);
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Github" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary")
  return response.json;
}