import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightgray;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 18.45px;
`

const Logo = styled.h1`
font-family: 'Open Sans', sans-serif;
margin: 8px 0px;
`
const Description = styled.p`
font-family: 'Open Sans', sans-serif;
`
const SocialMedia = styled.div`
display: flex;
`
const SocialIcon= styled.div`
width: 35.45px;
height: 35.35px;
border-radius: 50%;
color: white;
background-color: ${props=> props.bg};
display: flex;
justify-content: center;
align-items: center;
margin-right: 18.45px ;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>GITHUB</Logo>
                <Description>
                Note: Please go through all the <a href="https://industrious-tuberose-3eb.notion.site/Prerequisites-5082b94ed8f54dc3988a66c895b86f57" target="_blank" rel="noopener noreferrer">Prerequisites</a> to install Git and create a GitHub account in order to get ready for this workshop. 
                </Description>
                <SocialMedia>
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
                </SocialMedia>

            </Left>
        </Container>
    )
}

export default Footer
