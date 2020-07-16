import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const ContactPage = () => {
    return(
        <Layout>
            <h1>Contact</h1>
            <p>wanna hire me? contact me on this email: hire@example.com</p>
            <p>also you view my:</p>
            <span><Link to="/">Twitter</Link></span>
        </Layout>
    )
}


export default ContactPage