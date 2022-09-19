import SingupForm from './SingupForm';
import SigninForm from './SigninForm';


function Log({ sifunc, sufunc }) {



  return (
    <div className='log'>
      <h3>SignUp :</h3>
      <SingupForm sufunc={sufunc} />
      <h3>Signin :</h3>
      <SigninForm sifunc={sifunc} />
    </div>
  )
}

export default Log