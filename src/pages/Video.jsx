import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Comments from "../components/Comments";
import card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchFailure, fetchStart, fetchSuccess,like,dislike } from "../redux/videoSlice";
import {subscription } from "../redux/userSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Recommendations } from "../components/Recommendations";
import { format } from "timeago.js";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CountUp from 'react-countup';
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

// const Recommendation = styled.div`
//   flex: 2;
// `;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const VideoFrame=styled.video`
  max-height : 720px;
  width:100%;
  object-fit:cover;
`

const Video = () => {
  const currentUser = useSelector((state)=>state.user.currentUser);
  const currentVideo = useSelector((state)=>state.video.currentVideo);
  const [notPlayed,setNotPlayed] = useState(false);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  // console.log(path);
  const [channel,setChannel]=useState({});
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const videoRes = await axios.get(`/videos/find/${path}`);
         // console.log(videoRes);
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
        
        setChannel(channelRes.data);
        // console.log(channelRes.data)
        dispatch(fetchSuccess(videoRes.data));
        
      }catch(err){

      }
    }
    fetchData();
  },[path,dispatch])
  const handleLike=async()=>{
    const res=await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  }
  const handleDislike=async()=>{
    await axios.put(`/users/dislike/${currentVideo._id}`)
    dispatch(dislike(currentUser._id));
  }
  const handleSub=async()=>{
    currentUser.subscribedUsers.includes(channel._id)?
      (await axios.put(`/users/unsub/${channel._id}`))
      :
      (await axios.put(`/users/sub/${channel._id}`));
      dispatch(subscription(channel._id));
  }
  const handlePlay=async()=>{
    if(notPlayed===false){
      console.log("hello")
      const res = await axios.put(`/videos/view/${currentVideo._id}`);
      setNotPlayed(true);
    }
  }
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src ={currentVideo?.videoUrl} controls onPlay={()=>handlePlay()}/>
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>{currentVideo?.views}views • {format(currentVideo?.createdAt)} </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser._id)? (<ThumbUpIcon/>):(<ThumbUpOutlinedIcon/>)}
              {" "}
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo?.dislikes?.includes(currentUser._id)?(<ThumbDownIcon/>):(<ThumbDownOffAltOutlinedIcon/>)}
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers}</ChannelCounter>
              <Description>
                {currentVideo?.desc}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>{currentUser.subscribedUsers.includes(channel._id)?"subscribed":"subscribe"}</Subscribe>
        </Channel>
        <Hr />
        <Comments videoId ={currentVideo?._id}/>
      </Content>
      {/* {console.log(currentVideo)} */}
      
      <Recommendations tags={currentVideo?.tags} currentVideoId={currentVideo?._id} />
      
      
    </Container>
  );
};

export default Video;