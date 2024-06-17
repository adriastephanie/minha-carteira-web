import React from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const Lista: React.FC = () => {
    const months = [
        { value: 1, label: 'Janeiro'},
        { value: 2, label: 'Fevereiro'},
        { value: 3, label: 'Março'},
        { value: 4, label: 'Abril'},
        { value: 5, label: 'Maio'},
        { value: 6, label: 'Junho'},
        { value: 7, label: 'Julho'},
        { value: 8, label: 'Agosto'},
        { value: 9, label: 'Setembro'},
        { value: 10, label: 'Outubro'},
        { value: 11, label: 'Novembro'},
        { value: 12, label: 'Dezembro'},
     ]

     const years = [
        { value: 2023, label: 2023},
        { value: 2024, label: 2024},
        { value: 2025, label: 2025},
        { value: 2026, label: 2026},
        { value: 2027, label: 2027},
        { value: 2028, label: 2028},
        { value: 2029, label: 2029},
     ]
 
    return (
        <Container>
             <ContentHeader title="Saídas" lineColor="#3511ff">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
               <button 
               type="button"
               className="tag-filter tag-filter-recurrent"
               >
                Recorrentes
               </button>

               <button 
               type="button"
               className="tag-filter tag-filter-eventual"
               >
                Eventuais
               </button>
            </Filters>

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