import axios from 'axios'
import React, { useState } from 'react'
import { signIn  } from "next-auth/react"
import Button from '../src/styledComponents/Button'
import Form from '../src/styledComponents/Form'
import HomeWrapper from '../src/styledComponents/HomeWrapper'
import Input from '../src/styledComponents/Input'

function Registration() {

    const [message, setMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = e.target.elements

        const userEmail = email.value
        const userPassword = password.value

        try {
            const user = await axios.post('http://localhost:5000/signUp',
                {
                    password: userPassword,
                    email: userEmail
                },
                {
                    headers: {
                        accept: '*/*',
                        'Content-Type': 'application/json'
                    }
                })
                if ( user.data.data?.success ) {
                    return signIn("credentials", {
                        email : userEmail,
                        password: userPassword,
                        callbackUrl : '/'
                    })
                } else {
                    setMessage("Email already exists. Sign In instead")
                }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <HomeWrapper className="registration__page" >
            <Form onSubmit={handleSubmit} >
                <HomeWrapper>
                    <HomeWrapper>
                        Email
                    </HomeWrapper>
                    <HomeWrapper>
                        <Input type="email" name="email" placeholder='Student mail' required />
                    </HomeWrapper>
                </HomeWrapper>
                <HomeWrapper>
                    <HomeWrapper>
                        Password
                    </HomeWrapper>
                    <HomeWrapper>
                        <Input type="password" name="password" placeholder='Password' required />
                    </HomeWrapper>
                </HomeWrapper>
                <HomeWrapper>
                    <Button type="primary" btnType="submit">
                        Sign Up
                    </Button>
                </HomeWrapper>
                <HomeWrapper>
                    { message}
                </HomeWrapper>
            </Form>

        </HomeWrapper>
    )
}

export default Registration
