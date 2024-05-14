import React, {useMemo} from "react";
import { Container, Profiler, Welcome, UserName } from './styles';
import emojis from '../../utils/emoji';

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor( Math.random()* emojis.length);
        return emojis[indice];
    },[]);
    return (
        <Container>
            <h1>MainHeader</h1>
            <Profiler>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Adria Stephanie</UserName>
            </Profiler>
        </Container>
    )
}

export default MainHeader;