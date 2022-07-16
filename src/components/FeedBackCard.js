import Image from 'next/image'
import React from 'react'
import Button from '../styledComponents/Button'
import FeedWrapper from '../styledComponents/FeedWrapper'
import LinkAnchor from './LinkAnchor'
import commentIcon from '../../public/comment.png'

function FeedBackCard({ head, children, tag, id }) {

    let tagArr = tag?.split(',')


    return (
        <>
            <LinkAnchor route={`/feedback?id=${id}`} >
                <FeedWrapper className='feedback__card' >
                    <FeedWrapper className='feedback__card__count'>
                        <Button type="count__btn" >
                            <FeedWrapper className='count__btn__up' >
                                ^
                            </FeedWrapper>
                            <FeedWrapper className='count__btn__num'>
                                {id}
                            </FeedWrapper>
                        </Button>
                    </FeedWrapper>
                    <FeedWrapper className='feedback__card__main'>
                        <FeedWrapper>
                            {head}
                        </FeedWrapper>
                        <FeedWrapper>
                            {children}
                        </FeedWrapper>
                        <FeedWrapper className='feedback__card__tags'>
                            {
                                tagArr?.map((tag, index) => (
                                    <Button key={index} type="secondary" >
                                        {tag}
                                    </Button>
                                ))
                            }
                        </FeedWrapper>
                    </FeedWrapper>
                    <FeedWrapper className='feedback__card__comments'>
                    <Button type="comment__btn" >
                            <FeedWrapper className='comment__btn__icon' >
                                <Image src={commentIcon} layout='fill' />
                            </FeedWrapper>
                            <FeedWrapper className='comment__btn__num'>
                                {id}
                            </FeedWrapper>
                        </Button>
                    </FeedWrapper>
                </FeedWrapper>
            </LinkAnchor>
        </>
    )
}

export default FeedBackCard
