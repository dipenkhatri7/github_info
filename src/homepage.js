import React from 'react'
import Nav from './components/nav'
import styled from 'styled-components';
import Hamburger from './components/hamburger';
const Container = styled.div``
const Image = styled.img`
    width: 50%;
    display: block;
    margin: 10px auto 45px auto;
    animation: scale 2.95s;
    @keyframes scale {
    0% {
    transform: scale(1.3);
    }
    100% {
    transform: scale(1);
    }
    }
`
const GithubWorkshop = styled.div`
      background-color:#f5f5f5;
      display: flex;
      justify-content: center;
`

const GithubImage = styled.img`
    width: 25%;


`
const About = styled.div`
    height: 20vh;
    font-family: 'Urbanist', sans-serif;
    font-size: 60px;
    color: #4b4b4b;
    font-weight: 300;
    background-color:#f5f5f5;
    text-align: center;
    padding: 50px;
  

`
const Underline = styled.hr`
    width: 54.45rem;
    height: 0.2rem;
    background-color: #c29525;
`

const HomePage = () => {
    return (
        <Container>
            <Nav />
            <Hamburger />
            <Image src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/git%201080%20logo.png"/>
            <About> Git and GitHub : All you need to know! <Underline /> </About>
            
            <GithubWorkshop>
                <GithubImage src="https://industrious-tuberose-3eb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc813d0d3-7447-4f00-b1dd-0c26dd3a760f%2FGit_and_GitHub.png?table=block&id=ac90135f-cdc6-440e-9060-3f391156f8ac&spaceId=6b11d6fc-ad69-4b49-8ae1-d86e8abb691f&width=2000&userId=&cache=v2"/>
            </GithubWorkshop>
        </Container>

   
    
    )
}
export default HomePage
