import React from "react";

const SignInNav = () => {
   return (
     <nav style={ {display: 'flex', justifyContent:'flex-end'} }>
        <p className="f4 link dim black underline pa3 pointer">Profile</p>
        <p className="f4 link dim black underline pa3 pointer">Sign Out</p>
    </nav>
   )
}

export default SignInNav;