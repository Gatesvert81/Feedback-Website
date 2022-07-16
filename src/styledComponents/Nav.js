import styled from "styled-components";

const Nav = styled.nav`

    &.main__nav{
        width: 100% ;
        height: 50px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        background-color: #41289c;
        border-radius: 10px;
    }

    &.subnav{
        width: 100% ;
        height: 50px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        background-color: transparent;
        border-radius: 10px;
    }

`

export default Nav