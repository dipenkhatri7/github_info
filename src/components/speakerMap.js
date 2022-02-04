import React from 'react'
import styled  from 'styled-components';
import { Category } from '../image';
import SpeakerTilt from '../components/speakersTilt'
const Container = styled.div`

    display: flex;
    padding: 10px;
    margin-left: 250px;
`
const SpeakerMap = () => {
    return (
        <Container>
            {Category.map(items=>(
                <SpeakerTilt items={items} key={items.id}/>
            ))}
        </Container>
            
        
    )
}
export default SpeakerMap;
