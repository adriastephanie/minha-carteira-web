import React, {useMemo, useState, useEffect} from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from 'react-router-dom';
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

interface IRouteParams{
    match: {
        params: {
            type: string;
        }
    }
}

interface IData{
    id: string;
    description: string;
    amountFormatted: string;
    type: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const Lista: React.FC<IRouteParams> = ({match}) => {
    const [data, setData] = useState<IData[]>([]);
    const { type } = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance'  ? {
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E'
        }

    }, [type]);
    const listData = useMemo(() => {
        return type === 'entry-balance'  ?  gains : expenses;
    }, [type]);

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
     useEffect(()=> {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                type: item.type,
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        })
        setData(response);
     },[]);
 
    return (
        <Container>
             <ContentHeader title={title.title} lineColor={title.lineColor}>
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

                {
                     data.map(item => (
                        <HistoryFinanceCard 
                        key={item.id}
                        tagColor={item.tagColor} 
                        title={item.description} 
                        subTitle={item.dateFormatted} 
                        amount={item.amountFormatted}
                        />

                     ))
                }
                
            </Content>
        </Container>
    )
}

export default Lista;