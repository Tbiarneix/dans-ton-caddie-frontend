import styled from 'styled-components';

const Form = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;

  label {
    width: 100%;
    font-family: 'Patua One', cursive;
    font-size: 1.3em;
    color: white;
  }

  img {
    max-height: 400px;
    max-width: 400px;
    align-self: center;
  }

  input {
    margin-top: 5px;
    width: 95%;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  select {
    margin-top: 5px;
    width: 95%;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`;

export default Form;
