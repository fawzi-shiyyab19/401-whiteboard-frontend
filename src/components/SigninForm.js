function SigninForm({ sifunc }) {


    return (
        <div className='inForm'>
            <form onSubmit={sifunc}>
                <input placeholder='Enter Username' name='username' type='text' required ></input>
                <input placeholder='Enter Password' name='password' type='text' required ></input>
                <input name='submit' type='submit' value='Signin'></input>
            </form>
        </div>
    )
}

export default SigninForm