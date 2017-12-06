import React from 'react'
import styled from 'styled-components'
import { Half, Third, Quarter, GoldenA, GoldenB } from './Grid'

import { Column } from 'hedron'

// const color = '#4C3924'
const color = 'rgba(180, 122, 26, 0.6)'
const color2 = '#B47A1A'
const color3 = '#e2b15e'
const colorSeperator = '#c5c4c4'
const color4 = '#ECD7B4'

export { Half, Third, Quarter, GoldenA, GoldenB }

export const ColumnCustom = styled(Column)`
  height: ${props => (props.height || '300px')};
`

export const Container = styled.div`
  height: 100vh !important;
  margin: 0px !important;
  padding: 0px !important;
`
export const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: ${props => props.height};
  width: ${props => props.width};
`

export const Columns = styled(View)`
  width: 100%;
  height: ${props => (props.height || '300px')};

  & > div {
    width: 100%;
    height: ${props => (props.itemHeight || '60px')};
    margin-bottom: ${props => (props.mb || null)};
  }
`

export const Label = styled.label`
  color: ${color}
`

export const FormInput = styled.input`
  border-width: 0px 0px 2px 0px;
  width: 100%;
  height: 2em;
  outline: none;
  background-color: white !important;
`

export const FormError = styled.span`
  color: #d32f2f;
`

export const ImageLogo = styled.div`
  position: relative;
  cursor: pointer;
  width: 100px;
  height: 100px;

  & > img {
    height: 100%;
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 150px;
    max-height: 150px;
  }
`

export const CropImage = styled.div`
  max-width: ${props => props.width};
  margin: 20px auto;

  & > img {
    max-width: 100%;
  }
`

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const MainHeader = styled.div`
  width: 95%;
  height: 70px;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  & > span {
    align-self: center;
    margin-right: 40px;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
  }
  & > div {
    align-self: center;
    margin-right: 2em;
  }
`

export const MainFooter = styled.div`
  width: 100%;
  background-color: ${color4};
  text-align: center;
  line-height: 100px;
  color: black;
  font-size: 18pt;
  font-weight: bold;
`

export const NameWrapper = styled.div`
  width: 300px;
  height: 100%;
  text-align: center;
  line-height: 100px;
  font-size: 18pt;
  font-weight: bold;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  height: 50px;
`

export const Span = styled.span`
  display: inline-block;
  width:  ${props => props.width ? props.width : 'auto'};
`

export const Button = styled.button`
  border: 1.5px solid ${color2};
  color: ${color2};
  background-color: white;
  width: ${props => props.width ? props.width : (props.stretch ? '100%' : 'auto')};
  font-size: ${props => props.big ? '1.35em': '1em' };
  padding: ${props => props.small ? '2px 10px 2px 10px' : (props.padding || '6px 15px 6px 15px')};
  margin: ${props => props.m ? props.m : null};
  margin-top: ${props => props.mt ? props.mt : null};
  margin-right: ${props => props.mr ? props.mr : null};
  type: ${props => props.type ? props.type : null};
  border-radius: 5px;
  cursor: pointer;
  float: ${props => props.float ? props.float : 'left'};
  &:hover {
    color: white;
    background-color: #e2b15e;
  }
`

export const Button2 = styled(Button)`
  color: white;
  background-color: ${color3};
  &:hover {
    color: ${color2};
    background-color: white ;
  }
`

export const Flex = styled.div`
  height: ${props => (props.height || '100%')}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const CenterView = styled.div`
  height: ${props => (props.height || '100%')}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VerticalView = styled(CenterView)`
  justify-content: space-between;
`

export const HorizontalView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: ${props => (props.m || '0')}
`

export const TestView = styled(HorizontalView)`
  width: 100%;
  height: 100px;
  background-color: #ffffff !important;
`

export const SignupWrapper = styled(HorizontalView)`
  width: 400px;
  height: 100%;
  position: absolute;
  right: 0px;
`

export const SpaceBetweenView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
`

export const HR = styled.div`
  border: 0px solid ${colorSeperator};
  border-top-width: 0.01px;
  height: 1px;
  margin-top: ${props => (props.m ? '1em': '0')};
  margin-bottom: ${props => (props.m ? '1em': '0')};
`

export const ImagesBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: ${props => (props.size + 'px')};
`

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${props => (props.size + 'px')};
  height: ${props => (props.size + 20 + 'px')};
  border: ${props => (props.border ? '1px solid ' + colorSeperator: '')};
  border-radius: 2px;

  & > div {
    position: relative;
    width: ${props => (props.size + 'px')}
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    height: auto;
    max-width: ${props => props.w ? ((props.size - 80) + 'px'): null};
    max-height: ${props => props.h ? ((props.size - 90) + 'px') : null};
  }
`

export const MainImage = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 180px;

  & img {
    height: auto;
    width: 120px;
  }
`

export const DropzoneWrapper = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p {
    text-align: center;
    cursor: ${props => props.isMaxSize ? 'default' : 'pointer'};
  }
`

export const ShowMapInfo = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > span {
    font-weight: bold;
    width: 250px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
  }
`

export const OverlayWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border: 0;
  padding: 2px;

  & > div {
    cursor: pointer;
    font-size: ${props => props.isTextBig ? '16pt' : '12pt'};
    font-weight: bold;
    color: ${props => props.isZoneChosen ? '#04560a' : '#d32f2f'};
  }
`

export const CardLabel = styled.label`
  width: 300px;
`

export const CardWrapper = styled.div`
  width: 350px;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width ? (props.width + 'px') : '300px'};
  border: ${props => props.border ? '1px solid black': ''};
  padding: 1em;
  border-radius: 2px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${props => props.width ? (props.width - 50 + 'px') : '250px'};
  }
`

export const CWeek = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CDay = styled.button`
  width: 40px;
  height: 30px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 0;
  border-left: 0;
  outline: none;
  text-align: left;
  cursor: ${props => props.isForbidden ? 'text' : 'pointer'};
  text-decoration: ${props => props.isForbidden ? 'line-through' : 'inherit'};
  appearance: none;
  box-shadow: none;
  border-radius: 0;
  background-color: ${props => {
    if (props.isBetween) {
      return 'green'
    } else if (props.isBound) {
      return 'blue'
    }
    return '#ffffff'
  }};
  color: ${props => {
    if (props.isForbidden) {
      return 'grey'
    } else if (props.isBound || props.isBetween) {
      return 'white'
    }
    return 'black'
  }};
  &:hover{
    background-color: ${props => props.isForbidden ? 'inherit' : '#ff5e00'};
    color: ${props => props.isForbidden ? 'inherit' : '#ffffff'};
  }
`

export const WDays = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > div {
    width: 40px;
    text-align: left;
  }
`

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
  margin: 20px;
`

export const ChooseDate = styled.span`
  display: ${props => props.display ? 'inline' : 'none'};
`

export const OpenPicker = styled.div`
  display: ${props => props.display ? 'block' : 'none'};
`

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
`

export const MonthWrapper = styled.div`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
`;

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};

  & > img {
    height: 100%;
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
    max-width: ${props => props.size || '100px'};;
    max-height: ${props => props.size || '100px'};;
  }
`;
