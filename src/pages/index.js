import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import signUpTop from "../images/signup-top.jpg"
import signUpBottom from "../images/signup-bottom.jpg"
import SignUp from "../components/SignUp"
import BernieTrumpPoll from "../components/BernieTrumpPoll"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SignUp image={signUpTop}>
      <h1>
        Not Me. <span>Us.</span>
      </h1>
    </SignUp>
    <BernieTrumpPoll/>
    <SignUp image={signUpBottom}>
      <h5>SIGN UP</h5>
      <h1>
        This is <span>your</span> movement.
      </h1>
    </SignUp>
  </Layout>
)

export default IndexPage
