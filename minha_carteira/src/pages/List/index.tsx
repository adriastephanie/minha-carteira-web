import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Lista: React.FC = () => {
    const options = [
        { value: 'Adria', label: 'Stephanie'},
        { value: 'Maria', label: 'Bonita'},
     ]
 
    return (
        <Container>
             <ContentHeader title="Saídas" lineColor="#3511ff">
                <SelectInput options={options}/>
            </ContentHeader> 
        </Container>
    )
}

export default Lista;