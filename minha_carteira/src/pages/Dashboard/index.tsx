import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
    const options = [
       { value: 'Adria', label: 'Stephanie'},
       { value: 'Maria', label: 'Bonita'},
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#ff1">
                <SelectInput options={options} onChange={()=> {}}/>
            </ContentHeader> 
        </Container>
    )
}

export default Dashboard;