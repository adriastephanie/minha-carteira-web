import React from "react";
import { Container, Content } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

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
            <Content>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de agua"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de luz"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de telefone"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de condominio"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de aluguel"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de agua"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de luz"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de telefone"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de condominio"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de aluguel"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de telefone"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
                <HistoryFinanceCard tagColor={"#E44"} title={"conta de condominio"} subTitle={"27/01/2024"} amount={"R$ 139,00"}/>
            </Content>
        </Container>
    )
}

export default Lista;