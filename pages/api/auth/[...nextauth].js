import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "email", placeholder: "Student email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const response = await axios.post('http://localhost:5000/signIn',
                        {
                            password: credentials.password,
                            email: credentials.email
                        },
                        {
                            headers: {
                                accept: '*/*',
                                'Content-Type': 'application/json'
                            }
                        })
                    const user = response.data.user
                    console.log(user)

                    if (user) {
                        return { status: 'success', data: user }
                    }
                } catch (e) {
                    const errorMessage = e.response.data.message
                    // Redirecting to the login page with error message          in the URL
                    throw new Error(errorMessage + '&email=' + credentials.email)
                }
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.accessToken = user.id
            }
            return token
        },

        session: ({ session, token }) => {
            if (token) {
                session.accessToken = token.accessToken
            }
            return session
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true
    }

})