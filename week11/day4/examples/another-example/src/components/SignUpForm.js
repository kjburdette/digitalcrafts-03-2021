import React, {useState} from 'react'
import {SignUpButton} from "../styledComponents/SignUpFormStyles";
import {SignUpFormInput} from "../styledComponents/SignUpFormStyles";
import {SignUpFormDiv} from "../styledComponents/SignUpFormStyles"


export default function SignUpForm(props) {
    return (
        <div>
            <h1>Create Account</h1>
            <SignUpFormDiv action="">
            <SignUpFormInput onChange={(e) => props.setFirstName(e.target.value)} placeholder="First Name" type="text" value={props.firstName} />
            <SignUpFormInput  placeholder="Last Name" type="text" />
            <SignUpFormInput  placeholder="Email" type="email" />
            <SignUpFormInput  placeholder="Password" type="password" />
            <SignUpFormInput placeholder="Re-Type Password" type="password" />
            <SignUpButton>Sign Up</SignUpButton>
            </SignUpFormDiv>
        </div>
    )
}
