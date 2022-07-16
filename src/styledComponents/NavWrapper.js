import styled from "styled-components";

const NavWrapper = styled.div`

    &.main__nav__main{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 60% ;
    }

    &.main__nav__sort{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: fit-content ;
        gap: 5px;
    }
    
    &.main__nav__sort__head{
        font-size: 0.75rem;
        font-weight: 600;
        opacity: 0.7;
        
    }

    &.add__feedback{
        margin-top: 10px;
        display: ${ props => props.display };
    }

`

export default NavWrapper