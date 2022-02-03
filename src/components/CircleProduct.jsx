import styled from 'styled-components';

const CircleProduct = ( {name} ) => {
  return (
    <Circle>
      <p>{name}</p>
    </Circle>
  )
};

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFC1A3;
  width: 6em;
  height: 6em;
  border-radius: 50%;
  margin: 0.5em;
  text-align: center;
  
  p { 
    color: black;
  }
`;

export default CircleProduct;