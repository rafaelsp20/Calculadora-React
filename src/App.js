import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import ButtonClear from "./components/ButtonClear";
import Input from "./components/Input";
import { Container, Content, Row,  } from "./Styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState ('0'); 
  const [firstNumber, setFirstNumber] = useState ('0');
  const [operation, setOperation] = useState ('');  
    
  const handleAddNumber = (num) => {  
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }
 
//limpar input e dados da mémoria
const handleOnClear = () => {
      setCurrentNumber('0')
      setFirstNumber('0')


};

const handleSumNumbers = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')   
        
      }else {
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum))
      }
    }

    const handleMinusNumbers = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')   
        
      }else {
        const sum = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sum))
      }
    }
    
    const handleMultiNumbers = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('x')   
        
      }else {
        const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum))
      }
    }

    const handleDivNumbers = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')   
        
      }else {
        const sum = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(sum))
      }
    }

    //resultado
    const handleEquals = () => { 
      if(firstNumber !=='0' && operation !== '' && currentNumber !== '0') {
        switch(operation){
          case '+': 
          handleSumNumbers();
          break; 
          case '-': 
          handleMinusNumbers(); 
          break;
          case 'x': 
          handleMultiNumbers();
          break;
          case '/': 
          handleDivNumbers();
          break;     
          default: 
          break;
        }       
      }
    }

  return (
    <Container>    
      <Content>                   
            <Row> 
               <Input value={currentNumber} />
               {/*<ButtonClear label="Clear" onClick={() => handleOnClear()}/>*/}
               <ButtonClear label="Clear" onClick={handleOnClear}/>
        </Row> 
        <Row>
               <Button label="7" onClick={() => handleAddNumber('7')} />
               <Button label="8" onClick={() => handleAddNumber('8')} />
               <Button label="9" onClick={() => handleAddNumber('9')}/>
               <ButtonOp label="/" onClick={handleDivNumbers}/>
        </Row> 
        <Row>
               <Button label="4" onClick={() => handleAddNumber('4')}/>
               <Button label="5" onClick={() => handleAddNumber('5')}/>
               <Button label="6" onClick={() => handleAddNumber('6')}/>
               <ButtonOp label="x" onClick={handleMultiNumbers}/>
           </Row> 
            <Row>
               <Button label="1" onClick={() => handleAddNumber('1')}/>
               <Button label="2" onClick={() => handleAddNumber('2')}/>
               <Button label="3" onClick={() => handleAddNumber('3')}/>


               <ButtonOp label="-" onClick={handleMinusNumbers}/>
           </Row>
           <Row>
               <Button label="0" onClick={() => handleAddNumber('0')}/> 
               <Button label="." onClick={() => handleAddNumber('=')}/>
               <Button label="=" onClick={() => handleEquals('0')}/> 
               <ButtonOp label="+" onClick={() => handleSumNumbers('=')}/>           
           </Row>
      </Content>    
     </Container>
  );
}

export default App;