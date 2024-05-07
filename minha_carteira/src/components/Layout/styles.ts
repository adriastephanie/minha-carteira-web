import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    /** layout com 2 linhas e 2 colunas */
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
    'AS MH'
    'AS CT';
    height: 100vh;
`;