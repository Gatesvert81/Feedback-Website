import styled from 'styled-components'

const LogoWrapper = styled.div`

    &.logo{
        width: 100% ;
        height: 150px ;
        padding: 20px ;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        background: rgb(230,50,50);
        background: linear-gradient(240deg, rgba(230,50,50,1) 0%, rgba(195,36,219,1) 45%, rgba(0,125,255,1) 100%);
        color: white;
        border-radius: 10px;
    }

    &.logo__head{
        font-size: 1rem;
        font-weight: 700;
    }

    &.logo__body{
        font-size: 0.75rem;
        font-weight: 500;
    }


`

export default LogoWrapper