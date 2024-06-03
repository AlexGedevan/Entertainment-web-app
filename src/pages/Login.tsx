import styled from "styled-components";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <StyledLogin>
      <img src={logo} />
      <LoginForm>
        <h1>Login</h1>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Password" />
        <button>Login to your account</button>
        <LinkToSignUp>
          <p>Don't have an account?</p>
          <Link to="/signUp">Sign Up</Link>
        </LinkToSignUp>
      </LoginForm>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.84rem;
  margin-top: 4.8rem;
  width: 32.7rem;
`;

const LoginForm = styled.div`
  background-color: #161d2f;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;

  & > h1 {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 4.032rem;
    letter-spacing: -0.5px;
    color: #ffffff;
    margin-bottom: 4rem;
  }

  & > input {
    border: none;
    border-bottom: 1px solid #5a698f;
    background-color: transparent;
    padding-bottom: 1.8rem;
    &::placeholder {
      //styleName: Body (M);
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.89rem;
    }
    margin-bottom: 2.4rem;
  }

  & > button {
    padding: 1.4rem 6.75rem 1.5rem 6.85rem;
    margin-top: 1.6rem;
    background-color: #fc4747;
    border: none;
    outline: none;
    margin-bottom: 2.4rem;
  }
`;

const LinkToSignUp = styled.div`
  //styleName: Body (M);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.89rem;
  display: flex;
  gap: 9px;
  align-self: center;

  & > p {
    color: #ffffff;
  }

  & > a {
    color: #fc4747;
    text-decoration: none;
    cursor: pointer;
  }
`;
