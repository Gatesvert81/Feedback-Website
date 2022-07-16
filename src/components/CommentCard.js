import React from 'react'
import CommentWrapper from '../styledComponents/CommentWrapper'

function CommentCard({ children }) {
    return (
        <CommentWrapper className='comment__card' >
            <CommentWrapper className='comment__card__text'>
                {children}
            </CommentWrapper>
        </CommentWrapper>
    )
}

export default CommentCard
