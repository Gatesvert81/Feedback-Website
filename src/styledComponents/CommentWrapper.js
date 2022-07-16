import styled from 'styled-components'


const CommentWrapper = styled.div`

    &.comment__card{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        padding: 10px;
        justify-content: flex-start;
        align-items: center;
        background-color: white ;
        border-radius: 10px;
    }

    &.comment__input{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: flex-start;
        /* align-items: center; */
        background-color: white ;
        border-radius: 10px;
        gap: 10px;
        margin-bottom: 10px;
    }

`
export default CommentWrapper