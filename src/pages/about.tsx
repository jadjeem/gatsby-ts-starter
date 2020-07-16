import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout>
            <h1>About</h1>
            <p>I'm a web developer live somewhere in this world and wants to become a pro one.</p>
            <Link to='/contact'>hire me now.</Link>
        </Layout>
    )
}


export default AboutPage