import styled from "styled-components";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <StyledSignUp>
      <img src={logo} />
      <SignUpForm>
        <h1>SignUp</h1>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Repeat Password" />
        <button>SignUp to your account</button>
        <LinkToSignUp>
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </LinkToSignUp>
      </SignUpForm>
    </StyledSignUp>
  );
}

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.84rem;
  margin-top: 4.8rem;
  width: 32.7rem;

  & > img {
    width: 3.2rem;
    height: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    gap: 7.24rem;
  }
`;

const SignUpForm = styled.div`
  background-color: #161d2f;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.4rem 2.6rem 2.4rem;
  border-radius: 1rem;

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
  @media screen and (min-width: 768px) {
    width: 40rem;
    padding: 3.2rem;
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
