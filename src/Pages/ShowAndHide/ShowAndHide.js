import { useState } from "react/cjs/react.development";

function ShowAndHide() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="input-group my-4 mx-4">
          <input
            type={passwordType}
            onChange={handlePasswordChange}
            value={passwordInput}
            name="password"
            class="form-control"
            placeholder="Password"
          />
          <div className="input-group-btn">
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowAndHide();
