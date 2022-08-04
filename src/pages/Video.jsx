import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

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

const Recommendation = styled.div`
  flex: 2;
`;
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

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/2qiNKen-rm0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
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
            <Image src="data:image/jpeg;base64,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   " />
            <ChannelDetail>
              <ChannelName>Farmer Chacha</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;