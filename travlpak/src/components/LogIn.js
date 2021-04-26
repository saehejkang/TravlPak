import './LogIn.css';

import logo from './resources/logo.svg';
import car from './resources/car.svg';
import continueButton from './resources/continueButton.svg';
import or from './resources/or.svg';

function SignIn() {
  return (
    <div class="sign-in-page">
      <img className="travlpak-logo" src={logo} alt="travlpak logo"/>
      <img className="car-illustration" src={car} alt="family in car"/>
      <h1 className="sign-in">Sign In</h1>
      
      <div className="username-box">
        <div className="username">travlpak</div>
      </div>

      <div className="password-box">
        <div className="password">•••••••••••••</div>
      </div>

      <p className="prompt">please enter your username and password in the fields above</p>
      <img className="continue-button" src={continueButton} alt="continue button"/>
      <img className="or-divider" src={or} alt="or divider"/>
      <div className="create-account">Create Account</div>
    </div>
  );
}
