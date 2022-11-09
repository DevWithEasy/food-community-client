const logoutUser=(action,dispatch,navigate)=>{
    dispatch(action())
    navigate("/login")
    localStorage.removeItem("token")
}
export default logoutUser;