import React from 'react'
import Nav from './components/nav'
import styled from 'styled-components';
const Container = styled.div``
const Image = styled.img`
    width: 95%;
    height: 100vh;
    margin-left: 40px;
    animation: scale 1.95s;
    @keyframes scale {
    0% {
    transform: scale(1.2);
    }
    100% {
    transform: scale(1);
    }
    }
`
const GithubWorkshop = styled.div`
      background-color:#f5f5f5;
      display: flex;
      align-items: center;
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
    padding: 70px;
  

`

const HomePage = () => {
    return (
        <Container>
            <Nav />
            <Image src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/git.png"/>
            <About> Git and GitHub : All you need to know!  </About>
            <GithubWorkshop>
                <GithubImage src="https://industrious-tuberose-3eb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc813d0d3-7447-4f00-b1dd-0c26dd3a760f%2FGit_and_GitHub.png?table=block&id=ac90135f-cdc6-440e-9060-3f391156f8ac&spaceId=6b11d6fc-ad69-4b49-8ae1-d86e8abb691f&width=2000&userId=&cache=v2"/>
            </GithubWorkshop>
        </Container>

   
    
    )
}
export default HomePage
