import React from 'react'
import LogoWrapper from '../styledComponents/LogoWrapper'

function LogoCard() {
    return (
        <LogoWrapper className='logo' >
            <LogoWrapper className='logo__head' >
                Frontend Mentor
            </LogoWrapper>
            <LogoWrapper className='logo__body'>
                Feedback Board
            </LogoWrapper>
        </LogoWrapper>
    )
}

export default LogoCard
