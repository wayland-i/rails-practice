import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(r => {
        if (!r.ok) {
          throw new Error("Failed to fetch posts");
        }
        return r.json();
      })
      .then(data => setPosts(data))
      .catch(error => {
        console.error(error.message);
      });
  }, []);

  console.log(posts);


  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

export default Home
