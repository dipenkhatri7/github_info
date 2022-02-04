import React from 'react'
import styled from 'styled-components';
import ReactTilt from 'react-universal-tilt';
const Container = styled.div`
    flex:1;
    margin: 4.5px;
    position: relative
    ;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.645;
`
const SpeakerTilt = () => {
    return (
        <ReactTilt className="tilt-elem my-tilt">
        <Container>
                <Image src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-1/c0.54.480.480a/p480x480/166601533_2918196085131344_5722042580663567138_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=HQaq0N0fce4AX_8icq9&tn=NFNzdDJguefxu1tf&_nc_ht=scontent.fktm6-1.fna&oh=00_AT9UfIX3uoTkIcJpke5mlOnfQAJZ-h78MayP7o28IliPYw&oe=62238C32"/>
                <Image src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/101382299_2530662377035077_2811140229346361344_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=J8XAxbXsLg8AX-R0peH&_nc_ht=scontent.fktm6-1.fna&oh=00_AT8vNvZu_vdk0TxrzhYk4yPWjbNiIFZnfsR-0FgVhHF9uA&oe=622116DF"/>
        </Container>
        </ReactTilt>
    )
}

export default SpeakerTilt
