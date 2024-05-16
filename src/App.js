import './App.css';
import { useState } from 'react';

function App() {
  

  const [numBlank,setNumBlank] = useState(false)
  const [nameBlank,setNameBlank] = useState(false)
  const [cvcBlank,setCVCBlank] = useState(false)
  const [monthBlank,setMonthBlank] = useState(false)
  const [yearBlank,setYearBlank] = useState(false)

  const [numError,setNumError] = useState(false)
  const [nameError,setNameError] = useState(false)
  const [cvcError,setCVCError] = useState(false)
  const [monthError,setMonthError] = useState(false)
  const [yearError,setYearError] = useState(false)

  const [tqpage,setPage] = useState(false)

  const defaultValues  = {
    field1: 'JANE APPLESEED',
    field2: '0000 0000 0000 0000',
    field3: '00',
    field4: '00',
    field5: '000',
  }
  const [inputValues, setInputValues] = useState(defaultValues);
 
  const changeNum = (e) => {
    const {name,value} = e.target
    
    if (value === "") {
      setNumBlank(true);
      setNumError(false); // Ensure only one error state is set
    } else if (!/^[0-9\s]+$/.test(value) || value.length !== 19) {
      setNumBlank(false); // Ensure only one error state is set
      setNumError(true);
    } else {
      setNumBlank(false);
      setNumError(false);
    }
  
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  

  const changeName = (f) => {
    const { name, value } = f.target;
   
    if (value === ""){
      setNameBlank(true)
      setNameError(false)
    }
    else if(!/^[A-Za-z\s]+$/.test(value)){
      setNameBlank(false)
      setNameError(true)
    }
    else{
      setNameBlank(false)
      setNameError(false)
    }
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value.toUpperCase(),
    }));
    
  }

  const changeMonth = (g) => {
    const { name, value } = g.target;
    
    if (value === "" ){
      setMonthBlank(true)
      setMonthError(false)
    }
    else if(!/^[0-9]+$/.test(value) || value.length != 2 || value > 12){
      setMonthBlank(false)
      setMonthError(true)
    }
    else{
      setMonthBlank(false)
      setMonthError(false)
    }
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    
  }

  const changeYear = (h) => {
    const { name, value } = h.target;
    if (value === "" ){
      setYearBlank(true)
      setYearError(false)
    }
    else if(!/^[0-9]+$/.test(value) || value.length != 2){
      setYearBlank(false)
      setYearError(true)
    }else{
      setYearBlank(false)
      setYearError(false)
    }
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    
  }

  const changeCVC = (i) => {
    const { name, value } = i.target;
    if (value === "" ){
      setCVCBlank(true)
      setCVCError(false)
    }
    else if(!/^[0-9]+$/.test(value) || value.length != 3){
      setCVCBlank(false)
      setCVCError(true)
    }
    else{
    setCVCBlank(false)
    setCVCError(false)
    }
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
        
  }

  const changePage = () =>{
    const areAllFieldsFilled = Object.keys(inputValues).every(
      (key) => inputValues[key].trim() !== '' && inputValues[key] !== defaultValues[key]);
    if(areAllFieldsFilled){
      setPage(!tqpage)
    }  
  }

  const backtoPage = () =>{
    const updatedValues = { ...inputValues };
    Object.keys(updatedValues).forEach(key => {
      updatedValues[key] = defaultValues[key];
    });
    setInputValues(updatedValues);
    setPage(!tqpage)
  }

  return (
    <body>
      <div className="App">
      <div className='cards'>
        <div className='card-back'></div>
        <div className='card-front'></div>
        <div className='card-logo'></div>
        <div className='card-details'>
          <div className='acc-no'>{inputValues.field2}</div>
          <div className='acc-name'>{inputValues.field1}</div>
          <div className='acc-date'>{inputValues.field3}/{inputValues.field4}</div>
        </div>
        <div className='card-cvc'>{inputValues.field5}</div>
      </div>
      <div className={`form-section ${tqpage ? "hide" : "show-flex"}`}>
        <div className='c-text'>CARDHOLDER NAME</div>
        <div className='c-name'><input onChange ={changeName} name="field1" className={`${(nameBlank || nameError) ? "err-border" : ""}`} placeholder='e.g. Jane Appleseed'></input></div>
        <div className={`only-letters ${ nameError ? "show" : "hide"}`}>Wrong format, only alphabets</div>
        <div className={`empty ${ nameBlank ? "show" : "hide"}`}>Can't be blank</div>
        <div className='c-text'>CARD NUMBER</div>
        <div className='c-no'><input onChange ={changeNum} name="field2" placeholder='e.g. 1234 5678 9123 0000'></input></div>
        <div className={`empty ${ numBlank ? "show" : "hide"}`}>Can't be blank</div>
        <div className={`only-numbers ${ numError ? "show" : "hide"}`}>Wrong format, only numbers</div>
        <div className='date-cvc'>
          <div className='date-header c-text'>EXP. DATE (MM/YY)</div>
          <div className='cvc-header c-text'>CVC</div>
          <input className={`month-slot ${(nameBlank || nameError) ? "err-border" : ""}`} name="field3" onChange ={changeMonth} placeholder='MM'></input>
          <input className={`year-slot ${(nameBlank || nameError) ? "err-border" : ""}`} name="field4" onChange ={changeYear} placeholder='YY'></input>
          <input className={`cvc-slot ${(nameBlank || nameError) ? "err-border" : ""}`} name="field5" onChange ={changeCVC} placeholder='e.g. 123'></input>
          <div className={`empty db ${ (monthBlank || yearBlank) ? "show" : "hide"}`}>Can't be blank</div>
          <div className={`empty cb ${ cvcBlank ? "show" : "hide"}`}>Can't be blank</div>
          <div className={`empty db ${ (monthError || yearError) ? "show" : "hide"}`}>Wrong Format</div>
          <div className={`empty cb ${ cvcError ? "show" : "hide"}`}>Wrong Format</div>
        </div>
      <div><button className='confirm-btn' onClick={changePage}>Confirm</button></div>
      </div>
      <div className={`Thank-you-section ${tqpage ? "show-flex" : "hide"} `}>
        <div className='tq-icon'></div>
        <div className='tq-msg'>THANK YOU!</div>
        <div className='msg'>We've added your card details</div>
        <button className='continue-btn'  onClick={backtoPage}>Continue</button>
      </div>
      </div>
    </body>
  );
}

export default App;
