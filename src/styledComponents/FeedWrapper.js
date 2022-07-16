import styled from "styled-components";

const FeedWrapper = styled.div`

    &.feedback__card{
        width: 100% ;
        display: grid;
        grid-template-columns: 80px 1fr 80px;
        grid-gap: 10px;
        padding: 20px;
        background-color: white ;
        margin-bottom: 10px;
        border-radius: 10px ;
        cursor: pointer;
    }

    &.feedback__card:hover{
        border: 2px solid black ;
        transition: 0.2s ease-in-out;
    }

    &.feedback__card__main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px
    }

    &.feedback__card__tags{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        /* align-items: center; */
        /* flex-wrap: nowrap; */
        width: 100%;
        gap: 10px;
        /* background-color: blue ; */
    }

    &.feedback__card__input{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }

    &.feedback__card__input__label{
        font-size: 1rem;
        font-weight: 700;
    }

    &.feedback__card__tags{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 5px
    }

    &.feedback__card__tags__render{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
    }

    &.comment__btn__icon{
        position: relative;
        width: 30px;
        height: 30px;
    }

    &.feedback__page{
        width: 100%;
        min-height: 100vh;
        padding: 5vh 10vw;
        background-color: whitesmoke ;
        
    }

    &.feedback__page__comments{
        /* display: flex; */
        /* flex=direction: column ; */
        /* justify-content: flex-start; */
        /* width: 100% ; */
        gap: 10px ;
        /* align-items: center; */
    }

    &.feedback__page__comments__head{
        display: flex;
        flex=direction: row ;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        width: 100% ;
    }

    &.feedback__page__comments__render{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }


`

export default FeedWrapper