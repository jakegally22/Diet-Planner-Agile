import styled from 'styled-components';

const HintDiv = styled.div`

  position: relative;
  width: fit-content;

  &:hover {
    .component-message {
      display: block;
    }
  }
  .component-message {
    display :none;
    position: absolute;
    top: -70px;
    transition: 0.3s all linear;
    background-color: #f9f9f9;
    padding: 10px 20px;
    border-radius: 30px;
    width: fit-content;
    font-size: 15px;
  }
`;

const PrimaryButton = styled.div`
  background-color: var(--primary);
  border-radius: 50px;
  width: ${props => props.width || "100%"};
  color: white;
  font-weight: 500;
  font-size: 40px;
  margin: 50px auto;
  padding: 30px 0;
  transition: 0.1s linear all;
  text-align: center;
  &: hover{
    background-color: var(--primary-dark);
  }
`;



export {HintDiv, PrimaryButton};