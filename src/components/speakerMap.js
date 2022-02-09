import React from 'react'
import styled  from 'styled-components';
import { Category } from '../image';
import SpeakerTilt from '../components/speakersTilt'
const Container = styled.div`

    display: flex;
    padding: 10px;
    margin-left: 250px;
     @media (max-width:1085px){
        display: flex;
        justify-content: center;
        margin-left: 0px;   
        padding:0px
        
    }
      @media (max-width:821px){
        font-site: 35px;
        padding: 0px;
        padding-top: 0px;
      
    }
  
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
