import React from 'react';

import './ErrorMessage.css';

const ErrorMessage = props => (
  <div className="error-container">
    <p className='error-message'>
      There was an error loading data.
    </p>
    <button className="error-button" onClick={props.refresh}>Try again</button>
  </div>
)

export default ErrorMessage