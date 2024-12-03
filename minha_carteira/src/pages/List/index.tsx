import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from 'react-router-dom';
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import ListOfMonths from "../../utils/months";

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    type: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const Lista: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const { type } = match.params;
    
    const title = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E'
        }
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    const years = useMemo(()=> {
        let uniqueYear: number[] =[];
        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYear.includes(year)){
                uniqueYear.push(year)
            }
        });
        return uniqueYear.map(year => {
            return{
                value: year,
                label: year,
            }
        })
    },[listData]);

    const months = useMemo(()=> {
        return ListOfMonths.map((month, index)=> {
            return {
                value: index + 1,
                label: month,
            }
        })


    },[listData]);

    useEffect(() => {

        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth()+1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;

        });

        const formattedData = filteredData.map(item => {
            return {
                id: uuidv4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                type: item.type,
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            };
        });
        setData(formattedData);
    }, [listData, monthSelected, yearSelected]);

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                {/* Corrigido o erro de sintaxe */}
                <SelectInput 
                    options={months} 
                    onChange={(e) => setMonthSelected(e.target.value)} 
                    defaultValue={monthSelected} 
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => setYearSelected(e.target.value)} 
                    defaultValue={yearSelected} 
                />
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
                {data.map(item => (
                    <HistoryFinanceCard 
                        key={item.id}
                        tagColor={item.tagColor} 
                        title={item.description} 
                        subTitle={item.dateFormatted} 
                        amount={item.amountFormatted}
                    />
                ))}
            </Content>
        </Container>
    );
};

export default Lista;
