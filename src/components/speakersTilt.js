import React from 'react'
import styled from 'styled-components';
import ReactTilt from 'react-universal-tilt';
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
const Container = styled.div`

    margin: 40.5px;
    position: relative;
    border: 3px solid black;
    border-radius: 10px;
    margin-bottom: 54.45px;

`
const Image = styled.img`
    width: 400px;
    height: 500px;
    object-fit: cover;
    opacity: 0.9;


`
const Information = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
`
const Title= styled.h1`
    color: lightcyan;
    margin-top: 455px;
    font-size: 40.45px;
    font-family: 'Urbanist', sans-serif;
`
const Box = styled.div``        
const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`
const SocialIcon= styled.div`
width: 35.45px;
height: 35.35px;
border-radius: 50%;
padding: 8px;
margin-left: 29px;
color: white;
background-color: ${props=> props.bg};
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;

&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
const SpeakerTilt = ({items}) => {
    return (
        <Box>
        <ReactTilt className="tilt-elem my-tilt">
        <Container>
                <Image src={items.img}/>
                < Information>
                    <Title>{items.title}</Title>
                </Information>
        </Container>
        </ReactTilt>
        <SocialLinks>
        <SocialIcon bg= "#3b5998">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg= "#E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg= "#55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg= "#171515">
                        <GitHub />
                    </SocialIcon>
                    <SocialIcon bg= "#0077b5">
                        <LinkedIn />
                    </SocialIcon>
        </SocialLinks>
        </Box>
    )
}
export default SpeakerTilt;