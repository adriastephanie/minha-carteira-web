import React, {useMemo} from "react";
import { Container, Profiler, Welcome, UserName } from './styles';
import emojis from '../../utils/emoji';
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor( Math.random()* emojis.length);
        return emojis[indice];
    },[]);
    return (
        <Container>
            <Toggle/>
            <Profiler>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Adria Stephanie</UserName>
            </Profiler>
        </Container>
    )
}

export default MainHeader;