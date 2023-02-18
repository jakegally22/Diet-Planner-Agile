function LoginForm() {
  return (
    <div>
        
        <form action="/action_page.php" >
        {/* <form action="/action_page.php"> //with picture */}

            <h1>Login</h1>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <button type="submit" class="btn w3-red">Login</button>

    
  </form>

  </div>
  );
}

export default LoginForm;