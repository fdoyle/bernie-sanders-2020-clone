import React from "react"
import SignUp from "./SignUp"
import image from "../images/signup-bottom.jpg"

export default {
    title: "Sign Up",
    component: SignUp,
  }

export const ImageAndText = () => {
    return (
        <SignUp image={image} >
            <h5>SIGN UP</h5>
            <h1>Not Me. <span>Us.</span></h1>
        </SignUp>
  )
}
