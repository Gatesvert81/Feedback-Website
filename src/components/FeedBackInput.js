import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../styledComponents/Button'
import FeedWrapper from '../styledComponents/FeedWrapper'
import Input from '../styledComponents/Input'

function FeedBackInput({ onDone, head }) {

    const [heading, setHeading] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])

    const allTags = [
        "UI", "Bug", "UX", "Enhancement","Feature"
    ]

    const inputValue = (event) => {
        const value = event.target.value
        return value
    }

    useEffect(() => {
        console.log(tags)
        console.log(head)
        setHeading(head || '')
    }, [tags])

    const handleCategory = (btn) => {
        const condition = tags.includes(btn)
        return condition ? 'primary' : 'secondary'
    }

    const handleTags = (tag) => {
        let selectedTags = [...tags]
        const condition = selectedTags.includes(tag)
        if (condition) {
            let tagIndex = selectedTags.indexOf(tag)
            selectedTags.splice(tagIndex, 1)
            setTags(selectedTags)
            return
        }
        selectedTags.push(tag)
        setTags(selectedTags)
    }

    

    return (
        <FeedWrapper className='feedback__card' >
            <FeedWrapper className='feedback__card__count'>
                <Button type="count__btn" >
                    <FeedWrapper className='count__btn__up' >
                        ^
                    </FeedWrapper>
                    <FeedWrapper className='count__btn__num'>
                        0
                    </FeedWrapper>
                </Button>
            </FeedWrapper>
            <FeedWrapper className='feedback__card__main'>
                <FeedWrapper className='feedback__card__input'>
                    <FeedWrapper  className='feedback__card__input__label' >
                        Head
                    </FeedWrapper>
                    <FeedWrapper>
                        <Input 
                            type="text" 
                            placeholder='Heading'
                            onChange={(event) => setHeading( inputValue(event))}
                            required
                            />
                    </FeedWrapper>
                </FeedWrapper>
                <FeedWrapper className='feedback__card__input'>
                    <FeedWrapper className='feedback__card__input__label' >
                        Body
                    </FeedWrapper>
                    <FeedWrapper>
                        <Input 
                            type="text" 
                            placeholder='Body' 
                            onChange={(event) => setBody( inputValue(event))}
                            />
                    </FeedWrapper>
                </FeedWrapper>
                <FeedWrapper className='feedback__card__tags'>
                    <FeedWrapper className='feedback__card__input__label'>
                        Add Tags
                    </FeedWrapper >
                    <FeedWrapper className='feedback__card__tags__render'>
                        {
                            allTags.map(((tag, index) => (
                                <Button 
                                    type={handleCategory(tag)} 
                                    key={index} 
                                    click={() => handleTags(tag)} >{tag}</Button>
                            )))
                        }
                    </FeedWrapper>
                </FeedWrapper>
            </FeedWrapper>
            <FeedWrapper className='feedback__card__comments'>
                <Button click={() => onDone(heading, body, tags)} type="primary" >
                    Done
                </Button>
            </FeedWrapper>
        </FeedWrapper>
    )
}

export default FeedBackInput
