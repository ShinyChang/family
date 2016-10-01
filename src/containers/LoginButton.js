import { connect } from 'react-redux'
import FacebookLoginButton from '../components/FacebookLoginButton';
import { login } from '../actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps =  ({
  login
});

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookLoginButton);

export default LoginButton
