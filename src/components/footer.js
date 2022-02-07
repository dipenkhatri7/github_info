import { Facebook, GitHub, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
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
const Center = styled.div`
    flex: 1;
    padding: 18.45px;
    margin-left: 28.45px;

`
const Title = styled.h2`
    margin-bottom: 34.45px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
`
const ListElement = styled.li`
    width: 50% ;
    letter-spacing: 0.5px;
    margin-bottom: 10.45px;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    &:hover{
        font-weight: bold;
    }
`
const Right = styled.div`
    flex: 1;
    padding: 18.45px;
    margin-left: 24.45px;
    height: 226px;
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
const ContactElement = styled.div`
    margin-bottom: 10.45px;
    display: flex;
    position: relative;
    font-family: 'Open Sans', sans-serif;

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
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListElement>Facebook</ListElement>
                    <ListElement>Instagram</ListElement>
                    <ListElement>Twitter</ListElement>
                    <ListElement>LinkedIn</ListElement>
                    <ListElement>Apple</ListElement>
                    <ListElement>Google</ListElement>
                    <ListElement>Youtube</ListElement>
                    <ListElement>Microsoft</ListElement>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactElement> <Room style={{marginRight:8}} />
                    Kathmandu, Nepal
                </ContactElement>
                <ContactElement>
                    <Phone style={{marginRight:8}}/>
                    +977 123 456 7890
                </ContactElement>
                <ContactElement>
                    <MailOutline style={{marginRight:8}}/>
                    Khatridipen7@gmail.com
                </ContactElement>

            </Right>
        </Container>
    )
}

export default Footer
