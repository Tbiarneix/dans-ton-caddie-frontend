import styled, { keyframes } from "styled-components";

const Loader = () => (
  <LoaderContainer>
    <img src="ressources/logo-basket.png" alt="Check list logo" />
    <h1>
      DANS TON <br></br>CADDIE
    </h1>
  </LoaderContainer>
);

const LoaderAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation-name: ${LoaderAnimation};
  animation-duration: 4s;

  img {
    width: 30%;
  }
`;

export default Loader;
