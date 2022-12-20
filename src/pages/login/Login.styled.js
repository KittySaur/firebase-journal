import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 50%;

  height: 100vh;

  margin: auto;

  span {
    color: salmon;
  }
`

export const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  font-size: 2rem;
`

export const Button = styled.button`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background: #000;
  cursor: pointer;
  font-size: 2rem;
`
