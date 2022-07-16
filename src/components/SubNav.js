import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../styledComponents/Button'
import Nav from '../styledComponents/Nav'
import NavWrapper from '../styledComponents/NavWrapper'
import FeedBackInput from './FeedBackInput'
import axios from 'axios'

function SubNav({ id }) {

    const [editFeedback, seteditFeedback] = useState(false)

    const router = useRouter()

    const showFeedbackInput = () => {
        return editFeedback ? 'block' : 'none'
    }

    const onDone = async (heading, body, tags) => {
        const condition = heading.length > 0 && body.length > 0 && tags.length > 0
        console.log(condition)
        if( !condition ) {
            alert("Please Input into all fields")
            return
        } 
        console.log('here')
        axios.post('http://localhost:5000/editFeedback', {
            head: heading,
            body: body,
            tags: tags,
            id: id
        }).then((response) => {
            console.log(response)
            seteditFeedback(false)
        })
        
    }

    return (
        <>
            <Nav className='subnav' >
                <NavWrapper>
                    <Button click={() => router.back()} type='tetiary' >
                        Go back
                    </Button>
                </NavWrapper>
                <NavWrapper>
                    <Button type="primary" click={() => seteditFeedback(!editFeedback)} >
                        Edit Feedback
                    </Button>
                </NavWrapper>
            </Nav>
            <NavWrapper className='add__feedback' display={showFeedbackInput()} >
                <FeedBackInput onDone={onDone} head="Theme" />
            </NavWrapper>
        </>
    )
}

export default SubNav
