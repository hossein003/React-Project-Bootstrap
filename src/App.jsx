import { useState,useEffect } from 'react'
import './App.css'

// import { Navbar,Nav } from 'react-bootstrap'
import axios from 'axios'
import Banner from '../components/Banner'
import Nav_bar from '../components/NavvBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../components/Posts'

function App() {
const [data,setData] = useState([])
const [images, setImages] = useState([]);
const [posts,setPosts] = useState([]);
useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/photos').then(result=>{
    const minumum_data = result.data.slice(10,14,)
    setData(minumum_data)

    const response = axios.all([
        axios.get(`https://picsum.photos/${window.screen.width}/${500}`),
        axios.get(`https://picsum.photos/${window.screen.width}/${500}`),
        axios.get(`https://picsum.photos/${window.screen.width}/${500}`),
        axios.get(`https://picsum.photos/${window.screen.width}/${500}`)
      ]).then(response => {
        const imageData = response.map(res => res.request.responseURL);
        console.log(imageData);
        setImages(imageData);
      });
  })

  axios.get('https://jsonplaceholder.typicode.com/posts').then(posts=>{
    setPosts(posts.data)
  })

},[])
  return (
    <div className='d-flex flex-column gap-4'>
      <Nav_bar/>
      <Banner data={data} images={images}/>
      <Posts posts={posts} />
    </div>
  )
} 

export default App
