import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const handleChangeInput = (e) => {
    setPassword(e.target.value);
  };
  const changePassword = () =>{
    
  }

  return (
    <div className="m-2 mt-10 p-2 bzorder rounded shadow">
      <h1 className="text-2xl underline italic mb-4">Change Password:</h1>
      <form className="space-y-2" onSubmit={(e)=>changePassword()}>
        <input
          type="text"
          name="password"
          className="w-full p-2 border-2 focus:outline-blue-500 rounded"
          placeholder="Enter new password"
          onChange={handleChangeInput}
          required
        />
        <input
          type="submit"
          value="Submit"
          className="w-20 p-2 bg-blue-500 text-white rounded cursor-pointer"
        />
      </form>
    </div>
  );
};
export default ChangePassword;
