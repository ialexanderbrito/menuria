import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background: #f7cc2f;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

Button.Label = styled.Text`
  font-family: 'Poppins_700Bold';
  color: #1b282e;
  font-size: 18px;
`;

export default Button;
