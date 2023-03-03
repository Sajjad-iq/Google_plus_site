import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

interface Props {
  IsValidValue: boolean
}
export const TextField = styled.textarea<Props>`
 width: 100%;
 padding:10px;
 margin:10px 0;
 border-radius: 5px;
 font-size:1rem;
 font-family: 'Raleway', sans-serif;
  font-weight: 600;

 ${p => p.IsValidValue ?
    `
    border:1px solid gray;
      &:focus{
      outline:2px solid ${Colors.Secoundry.Cyan};
      border:none;
      }
     `
    :
    `border:1px solid ${Colors.Primary.red};
      &:focus{
      outline:none;
      }
     `
  }

    @media ${device.tablet} {
      font-size:1.4rem;
    }
    @media ${device.laptop} {
      font-size:1rem;
    }
    @media ${device.laptopL} {
      font-size:1.3rem;
    }
     @media ${device.desktop} {
      font-size: 1.5rem;
    }
 
`
