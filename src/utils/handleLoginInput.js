//handle login input and set state
const handleLoginInput = (e,loged,setLoged) => {
    const newInput = { ...loged };
    newInput[e.target.name] = e.target.value;
    setLoged(newInput);
};
export default handleLoginInput;
