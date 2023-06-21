import React from "react";

const Child = ({isLoggedIn, setIsLoggedIn})=>{

    const handleLoginFormSubmit = () => {
        // Update the state of isLoggedIn to true when the login form is submitted
        setIsLoggedIn(true);
      };
    
      if (!isLoggedIn) {
        // Render the login form if the user is not logged in
        return (
          <form onSubmit={handleLoginFormSubmit}>
            <label>Username</label>
            <input type="text" placeholder="Username" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>
        );
      }
    
      // Render content after the user is logged in
      return <p>You are logged in!</p>;
}
export default Child;