import './App.css';

function App() {
  return (
    <body>
      <div className="App">
      <div className='cards'>
        <div className='card-back'></div>
        <div className='card-front'></div>
        <div className='card-logo'></div>
        <div className='card-details'>
          <div className='acc-no'>0000 0000 0000 0000</div>
          <div className='acc-name'>JANE APPLESEED</div>
          <div className='acc-date'>00/00</div>
        </div>
      </div>
      {/* <div className='form-section'>
        <div className='c-text'>CARDHOLDER NAME</div>
        <div className='c-name'><input placeholder='e.g. Jane Appleseed'></input></div>
        <div className='c-text'>CARD NUMBER</div>
        <div className='c-no'><input placeholder='e.g. 1234 5678 9123 0000'></input></div>
        <div className='date-cvc'>
          <div className='date-header c-text'>EXP. DATE (MM/YY)</div>
          <div className='cvc-header c-text'>CVC</div>
          <input className='month-slot' placeholder='MM'></input>
          <input className='year-slot'placeholder='YY'></input>
          <input className='cvc-slot' placeholder='e.g. 123'></input>
        </div>
      <div><button className='confirm-btn'>Confirm</button></div>
      </div> */}
      <div className='Thank-you-section'>
        <div className='tq-icon'></div>
        <div className='tq-msg'>THANK YOU!</div>
        <div className='msg'>We've added your card details</div>
        <button className='continue-btn'>Continue</button>
      </div>
      </div>
    </body>
  );
}

export default App;
