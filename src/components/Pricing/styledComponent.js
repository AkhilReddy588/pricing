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
  @media screen and (max-width: 576px){
    width: 250px;
    padding: 20px;
  }
`

export const PricingContainer = styled.div`
  background-color: ${props => props.theme===true ? '#000000' : 'hsl(230, 100%, 99%)'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  @media screen and (max-width: 576px){
    padding: 20px;
  }
`

export const ThemeBtn = styled.button`
  background-color: ${props => props.theme===true ? '#272727' : '#ffffff'};
  border-style: solid;
  border-color: ${props => props.theme===true ? '#dcdcdc' : '#272727'};
  border-radius: 10px;
  padding: 10px;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 40px;
  cursor: pointer;
  @media screen and (max-width: 576px){
    margin-right: 10px;
    margin-top: 20px;
  }
`
export const Amount = styled.h1`
  color: ${props => props.theme===true ? '#ffffff' : 'hsl(227, 35%, 25%)'};
`