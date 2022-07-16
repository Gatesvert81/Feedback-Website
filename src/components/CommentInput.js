import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../styledComponents/Button'
import CommentWrapper from '../styledComponents/CommentWrapper'
import Input from '../styledComponents/Input'

function CommentInput({ id, setAddComment }) {


    const [comment, setComment] = useState('')

    const handleComment = (e) => {
        const commentValue = e.target.value 
        setComment(commentValue)
    }

    useEffect(() => {
        console.log(comment)
    }, [comment])

    const onDone = (body) => {

        if ( body.length <= 0 ) {
            alert('Please input a comment')
            return
        } 

        axios.post('http://localhost:5000/addComment', {
            body: body,
            id: id
        }).then((response) => {
            console.log(response)
            setAddComment(false)
        })
    }

    return (
        <CommentWrapper className='comment__input' >
            <CommentWrapper className='comment__input__head'>
                Add Comment 
            </CommentWrapper>
            <CommentWrapper className='comment__input__input'>
                <Input type="text" placeholder='comment'  onChange={(e) => handleComment(e) } />
            </CommentWrapper>
            <CommentWrapper className='comment__input__btn'>
                <Button type="primary" click={() => onDone(comment)} >
                    Done
                </Button>
            </CommentWrapper>
        </CommentWrapper>
    )
}

export default CommentInput
