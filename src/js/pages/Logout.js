import React from 'react'
import {
  Redirect
} from 'react-router-dom'

import Authenticator from "../util/Authenticator"

const Logout = () => {
	Authenticator.signout()
    return (
    	<Redirect to='/login'/>
    );
};

export default Logout;