import React from "react";
import BackGround from "./BackGround/BackGround.jsx";
import LoginInput from "./LoginInput/LoginInput.jsx";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
              <BackGround />
            </>
        );
    }
}

export default Login;
