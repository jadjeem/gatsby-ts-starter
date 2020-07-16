import React from "react"
import { Link } from 'gatsby';

import Layout from "../components/layout";
 

const IndexPage = () => {
    return (
        <Layout>
            <h1>hello world</h1>
            <h3>I'm whatever so okay?</h3>
            <p>Need a developer? <Link to='/contact'>hire me now.</Link></p>
        </Layout>
    )
}

export default IndexPage;