import { ButtonContainer } from "./styles";

const ButtonClear = ({label, onClick}) => {

    return (<>
      <ButtonContainer onClick={onClick} type="button">  
               {label}     
      </ButtonContainer>          
      </>      
    );
  }
  
  export default ButtonClear;
  