import axios from 'axios'
import React, { useState } from 'react'
import Button from '../styledComponents/Button'
import Nav from '../styledComponents/Nav'
import NavWrapper from '../styledComponents/NavWrapper'
import Option from '../styledComponents/Option'
import Select from '../styledComponents/Select'
import FeedBackInput from './FeedBackInput'

function MainNav({ suggestions }) {

    const [addFeedBack, setAddFeedBack] = useState(false)


    const showFeedbackInput = () => {
        return addFeedBack ? 'block' : 'none'
    }

    const onDone = async (heading, body, tags) => {
        const condition = heading.length > 0 && body.length > 0 && tags.length > 0
        if( !condition ) {
            alert("Please Input into all fields")
            return
        } 
        console.log('here')
        axios.post('http://localhost:5000/addFeedback', {
            head: heading,
            body: body,
            tags: tags
        }).then((response) => {
            console.log(response)
            setAddFeedBack(false)
        })
        
    }

    return (
        <>
            <Nav className='main__nav' >
                <NavWrapper className='main__nav__main' >
                    <NavWrapper>
                        {suggestions} Suggestions
                    </NavWrapper>
                    <NavWrapper className='main__nav__sort'>
                        <NavWrapper className='main__nav__sort__head'>
                            Sort By :
                        </NavWrapper>
                        <NavWrapper>
                            <Select>
                                <Option value="Most Recent" >
                                    Most Recent
                                </Option>
                                <Option value="Most Upvotes" >
                                    Most Upvotes
                                </Option>
                            </Select>
                        </NavWrapper>
                    </NavWrapper>
                </NavWrapper>
                <NavWrapper className='main__nav__btn'>
                    <Button type="main" click={() => setAddFeedBack(!addFeedBack)} >
                        {
                            addFeedBack ? 'Cancel' : "Add FeedBack"
                        }
                    </Button>
                </NavWrapper>
            </Nav>
            <NavWrapper className='add__feedback' display={showFeedbackInput()} >
                <FeedBackInput onDone={onDone}/>
            </NavWrapper>
        </>
    )
}

export default MainNav
