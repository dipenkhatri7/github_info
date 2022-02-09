import React from 'react'
import Nav from './components/nav'
import styled from 'styled-components';
import Hamburger from './components/hamburger';

import SpeakerMap from './components/speakerMap';
import Footer from './components/footer';
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
      flex: 1;
`

const GithubImage = styled.img`
    width: 25%;
    margin-bottom: 40px;
    @media (max-width:821px){
        visibility: hidden;
        width:0%;
    }

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
    @media (max-width:1085px){
        font-size:40px
    }
      @media (max-width:821px){
        font-site: 35px;
        padding: 0px;
        padding-top: 30px;
         height:7vh;
    }
    @media (max-width: 414px) {
	    font-size: 30px;
        height: 9vh;
	}
  

`
const Underline = styled.hr`
    width: 54.45rem;
    height: 0.2rem;
    background-color: #c29525;
    @media (max-width: 1085px) {
        visibility: hidden;
    }
`
const GithubDay1 = styled.div`
    flex: 1;
    margin-top: 80px;

    padding: 10px;
     @media (max-width:821px){
        margin-bottom: 0px;
        padding: 0px;
        margin-top: 0px;
    }
     
`
const GithubDay2 = styled.div`
    flex: 1;
    margin-right: 10px;
    padding: 10px;
   

    margin-top: 80px;
      @media (max-width:821px){
        margin-bottom: 0px;
        padding: 0px;
        margin-top: 0px;
    }

`

const Title  = styled.div`
    font-family: 'Urbanist', sans-serif;
    font-size: 45.45px;
    margin-bottom: 28.45px;
    margin-left: 20px;
     @media (max-width:821px){
        font-size:30px;
        

    }
`
const List1 =styled.li`
font-family: 'Urbanist', sans-serif;
margin: 2px;
font-size: 20px;
letter-spacing: .5px;
text-align: left;
 @media (max-width:821px){
        font-size:15px;
    }

`
const List2 = styled.li`
font-family: 'Urbanist', sans-serif;
margin: 2px;
font-size: 20px;
letter-spacing: .5px;
text-align: left;
 @media (max-width:821px){
        font-size:15px;
    }

`
const About1 = styled.div`
 height: 20vh;
    font-family: 'Urbanist', sans-serif;
    font-size: 60px;
    color: #4b4b4b;
    font-weight: 300;

    text-align: center;
    padding: 50px;
     @media (max-width:1085px){
        font-size:40px
    }
      @media (max-width:821px){
        font-site: 35px;
        padding: 0px;
        padding-top: 30px;
         height:7vh;
    }
  
`
const Underline1= styled.hr`
    width: 12.45rem;
    height: 0.2rem;
    background-color: #c29525;
    @media (max-width: 1085px) {
        visibility: hidden;
    }`

const HomePage = () => {
    return (
        <Container>
            <Nav />
            <Hamburger />
            <Image src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/git%201080%20logo.png"/>
            <About> Git and GitHub : All you need to know! <Underline /> </About>
            
            <GithubWorkshop>
            <GithubDay1>
                        <ul>
                        <Title>Day 1:</Title>
                        <List1>Importance of VCS </List1>
                        <List1>What are Git and GitHub?  </List1>
                        <List1>What are we building today!  </List1>
                        <List1>Git commands- <b> config, init, status, add, commit, log, reset, stash - pop, clear </b> </List1>
                        <List1>Creating a repo on GitHub </List1>
                        <List1>Git commands - <b>remote, push, pull</b></List1>
                        <List1>Branching - Why and How? </List1>
                        <List1>Git commands - <b>branch, checkout, diff</b> </List1>
                        <List1>Cloning and Forking</List1>
                        <List1>Pull Requests </List1>
                        </ul>
                </GithubDay1>
                <GithubImage src="https://industrious-tuberose-3eb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc813d0d3-7447-4f00-b1dd-0c26dd3a760f%2FGit_and_GitHub.png?table=block&id=ac90135f-cdc6-440e-9060-3f391156f8ac&spaceId=6b11d6fc-ad69-4b49-8ae1-d86e8abb691f&width=2000&userId=&cache=v2"/>
                
                <GithubDay2> 
                <ul>
                    <Title>Day 2:</Title>
                    <List2>Adding Collaborators</List2>
                    <List2>Users and Organizations </List2>
                    <List2>Solving Merge Conflicts</List2>
                    <List2>GitHub Profile - Markdown</List2>
                    <List2>GitHub Developer Student Pack and Campus Expert- provide priority support URL  </List2>
                    <List2>GitHub Pages </List2>
                    <List2>Good First Issues - Your entry to open source </List2>
                    <List2>Contributor experience sharing and tips - Aashish Thapa </List2>
                    <List2>KUCC GitHub Organization</List2>
                </ul>
                </GithubDay2>
            </GithubWorkshop>
            <About1> SPEAKERS <Underline1 /> </About1>
            <SpeakerMap />
            <Footer />
        </Container>

   
    
    )
}
export default HomePage
