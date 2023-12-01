import React, { useState } from 'react';

function ChangeDateFormat() {
  const [psgnConcDOB, setPsgnConcDOB] = useState('');
  const [OldDateFormat, setOldDateFormat] = useState('');

  const inputnationalitybox = (e) => {
    const value = new Date(e.target.value);
    setOldDateFormat(e.target.value)
    console.log('value', value);

    // Format the date as "yyyy/mm/dd"
    const formattedDate = value.toISOString().split('T')[0].replace(/-/g, '');
    console.log('formattedDate', formattedDate);

    setPsgnConcDOB(formattedDate);
  };

  return (
    <div>
      <div className="passangerPref">
        <div className="passangerPref_title">DOB</div>
        <div className="passangerPref_Select">
          <input
            type="date"
            className="form-control genderSelect_4"
            style={{ fontSize: "11px" }}
            id="exampleInputdate"
            value={psgnConcDOB}
            onChange={(e) => inputnationalitybox(e)}
          />
          <p> OLD Date Formate- {OldDateFormat}</p>
          <p>New Date Formate- {psgnConcDOB}</p>
        </div>
      </div>
    </div>
  );
}

export default ChangeDateFormat;
