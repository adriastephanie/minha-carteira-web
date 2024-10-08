import React from "react";
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink } from './styles';
import logoImg from '../../asserts/logo.svg'

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md'


const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="logomarca minha carteira" />
                <Title id="minha-carteira-title">Minha carteira</Title>
            </Header> 
            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside;