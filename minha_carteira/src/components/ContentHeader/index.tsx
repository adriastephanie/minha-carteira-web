import React from "react";
import { Container, TitleContainer, Controllers } from './styles';
import SelectInput from "../SelectInput";
const ContentHeader: React.FC = () => {

    const option = [
       { value: 'Adria', label: 'Stephanie'},
       { value: 'Maria', label: 'Bonita'},
    ]
    
    return (
        <Container>
            <TitleContainer>
                <h1>titulo</h1>
            </TitleContainer>
            <Controllers>
                <SelectInput options={option}/>
                <SelectInput options={option}/>
            </Controllers>
        </Container>
    )
}

export default ContentHeader;