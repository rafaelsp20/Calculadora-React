import { ButtonContainer } from "./styles";

const ButtonOp = ({label, onClick}) => {

    return (<>
      <ButtonContainer onClick={onClick} type="button">  
               {label}     
      </ButtonContainer>   
       
      </>      
    );
  }
  
  export default ButtonOp;
  