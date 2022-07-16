import styled from "styled-components";

const HomeWrapper = styled.div`

    &.home{
        width: 100% ;
        min-height: 100vh;
    }

    &.home__category__section{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* align-items: flex-start; */
        gap: 10px;
        width: 100% ;
    }

    &.home__main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* align-items: flex-start; */
        gap: 10px;
        width: 100% ;
    }

    &.registration__page{
        width: 100%,
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 100px
    }

`

export default HomeWrapper