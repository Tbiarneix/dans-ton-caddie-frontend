import axios from 'axios';
import styled from 'styled-components';
import useLongPress from '../functions/useLongPress';

const CircleProduct = ( {name, id} ) => {

  const onLongPress = () => {
    console.log('Long click')
    axios
    .delete(`http://localhost:5000/api/ingredients/${id}`)
  }

  const onClick = () => {
    const addProduct = { ingredient_id: id, user_id: 1}
    axios
    .post(`http://localhost:5000/api/users/1/lists`, addProduct)
    .then(res => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1000,
  };

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <Circle {...longPressEvent}>
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