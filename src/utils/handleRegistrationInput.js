//handlelogin input and set state
const handleRegistrationInput = (e,signUp,setSignUp,error,setError) => {
    let valid

    //CHECK USERNAME
    if (e.target.name === 'username') {
        e.target.value.length>3 ? valid = true : valid = false
        if(!valid){
            const newError = {...error}
            newError[e.target.name] = "Username minimum length must be 6 characters"
            setError(newError)
        }
    }

    //CHECK NAME
    if (e.target.name==='name') {
       e.target.value.length>3 ? valid = true : valid = false
        if(!valid){
            const newError = {...error}
            newError[e.target.name] = "Name minimum length must be 6 characters"
            setError(newError)
        }
    }

    //CHECK EMAIL
    if (e.target.name==='email') {
      const checkValidEmail= /\S+@\S+\.\S+/
      valid = checkValidEmail.test(e.target.value)
        if(!valid){
            const newError = {...error}
            newError[e.target.name] = "Please Enter a valid email address"
            setError(newError)
        }
    }

    //CHECK PASSWORD
    if (e.target.name === 'password') {
        const checkValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        valid = checkValidPassword.test(e.target.value)
        if(!valid){
            const newError = {...error}
            newError[e.target.name] = "Password will be mixed uppercase and lowercase number and special characters"
            setError(newError)
        }
    }

    //CHECK CONFIRM PASSWORD
    if(e.target.name ==="confirmPassword"){
        signUp.password !== e.target.value ? valid = false : valid = true
        if(!valid){
            const newError = {...error}
            newError[e.target.name] = "Password not matched"
            setError(newError)
        }
    }

    if(valid){
      const newInput = { ...signUp };
      newInput[e.target.name] = e.target.value;
      setSignUp(newInput);
      const newError = {...error}
        newError[e.target.name] = ""
        setError(newError)
    }

  };
export  default handleRegistrationInput;