import styled from "styled-components";

export const PricingContent = styled.div`
  background-color: ${props => props.theme===true ? '#272727' : 'white'};
  width: 500px;
  box-shadow: 0px 4px 16px 0px ${props => props.theme===true ? '#272727' : '#bfbfbf'};
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const PricingContainer = styled.div`
  background-color: ${props => props.theme===true ? '#000000' : 'hsl(230, 100%, 99%)'};
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`

export const ThemeBtn = styled.button`
  background-color: ${props => props.theme===true ? '#272727' : '#ffffff'};
  border-type: solid;
  border-color: ${props => props.theme===true ? '#dcdcdc' : '#272727'};
  border-radius: 10px
  padding: 10px;
  margin-left: auto;
  margin-top: 100px;
  margin-right: 50px;
  cursor: pointer;
`
export const Amount = styled.h1`
  color: ${props => props.theme===true ? '#ffffff' : 'hsl(227, 35%, 25%)'};
`