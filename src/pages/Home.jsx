import React, { useEffect,useState } from 'react'
import axios from "axios"
import styled from 'styled-components'
import Card from '../components/Card';
const Container= styled.div`
  display : flex;
  justify-content: space-between;
  flex-wrap:wrap;
`;
export default function Home() {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    const fetchVideos=async ()=>{
      const res  = await axios.get("/videos/random")
      setVideos(res.data);
    }
    fetchVideos();
    // console.log(video)
  },[])
  return (
    <Container>
      {
        videos.map((video)=>(
          <Card/>
        ))
      }


      


    </Container>
  )
}
