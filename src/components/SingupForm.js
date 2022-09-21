function SingupForm({ sufunc }) {

    return (
      <div className='upForm' >
        <form onSubmit={sufunc}>
          <input placeholder='Enter Username' name='username' type='text' required></input>
          <input placeholder='Enter Email' name='email' type='email' required></input>
          <input placeholder='Enter Password' name='password' type='password' required></input>
          <input placeholder='confirm Password' name='confirmpassword' type='password' required></input>
          <input name='submit' type='submit' value='Signup'></input>

        </form>
      </div>
    )
  }
  
  export default SingupForm