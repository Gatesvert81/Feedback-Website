import styled from 'styled-components'

const Wrapper = styled.button`

    width: fit-content;
    height: fit-content;
    border: hidden ;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;


    &.primary{
        background-color: blue;
        color: white;
        /* display: flex; */
        text-align: center;
    }

    &.secondary{
        background-color: #030ef00f;
        color: blue;
        text-align: center;
    }

    &.tetiary{
        background-color: transparent;
        color: blue;
        text-align: center;
    }

    &.main{
        background-color: #a43ada;
        color: white;
        text-align: center;
    }

    &.count__btn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #030ef00f;
        color: blue;
        text-align: center;
        padding: 5px 10px;
    }

    &.comment__btn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: white;
        color: blue;
        text-align: center;
        /* padding: 5px 10px; */
    }

    &.comment__btn:hover{
        background-color: #030ef00f;
        transition: ease-in-out;
    }

`

import React from 'react'

function Button({children, type, click, btnType}) {
    return (
        <Wrapper className={type} onClick={click} type="submit" >
            {children}
        </Wrapper>
    )
}



export default Button