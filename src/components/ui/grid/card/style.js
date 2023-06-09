import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { hexToRGB } from '../../../../utils/colorsUtils'
import { TRANSITION_DURATION } from '../../../../constants/globals'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  overflow: hidden;

  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 5px 15px;
  width: auto;
  transition: all ${TRANSITION_DURATION} ease-in-out;
  z-index: 0;
  user-select: none;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px 2px teal;
  }

  .description {
    display: flex;
    width: auto;
    align-items: center;
    padding: 0;
  }

  &:hover .description {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: -100px;
    transition-duration: ${TRANSITION_DURATION};
    transform: translateY(${-100}px);
    background: rgba(${props => props.theme === 'light' ? hexToRGB(COLORS.secondLight) : hexToRGB(COLORS.secondDark)}, 0.2);
    
    width: 100%;
    z-index: 10;
    padding: 5px 0;
  }

  &:hover .actions {
    display: flex;
    width: 75%;
    flex-direction: column;
  }

  @media screen and (max-width: 540px) {
    width: 80%;
    aspect-ratio: 4 / 5;
  }

  //&:hover .actions {
  //  display: flex;
  //  flex-direction: column;
  //  position: absolute;
  //  left: 0;
  //  bottom: 0;
  //  background: yellow 0.5px;
  //  width: 100%;
  //  z-index: 10;
  //}
`

export const Logo = styled.div`
  //padding: 20px;
  margin: 20%;

  //@media screen and (max-width: 540px) {
  //  display: none;
  //}

`

export const CardActions = styled.div`
  display: none;
  //align-items: center;
  //padding: 0;
`