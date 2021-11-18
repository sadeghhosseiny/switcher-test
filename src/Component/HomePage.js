import React, { useEffect, useState } from 'react';
import './HomePage.css';
import TimePickerWrapper from 'react-times';
import TimePicker from 'react-times';
import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';

function HomePage() {

  const GOOD = "GOOD";
  const FAST = "FAST";
  const CHEAP = "CHEAP";

  const [checkedList, setCheckedList] = useState([]);
  // console.log("CH1111 ", checkedList.includes(GOOD));
  const handleCheckboxChange = (value, cbName) => {
    console.log(value, cbName);
    // console.log('checked', checkedList);
    if (!value) {
      setCheckedList((prev) => prev.filter((item) => item !== cbName));
      return;
    }

    let tempChecklist = [...checkedList];
    tempChecklist.push(cbName);
    tempChecklist.sort();
    console.log('1111111111', tempChecklist);
    if (tempChecklist.length === 3) {
      // console.log(tempChecklist);
      if (cbName == 'CHEAP') {
        // console.log('1111111111');
        tempChecklist.splice(1, 1);
      }
      else if (cbName == 'FAST') {
        // console.log('2222222222');
        tempChecklist.pop();
      }
      else if (cbName == 'GOOD') {
        tempChecklist.shift();
      }
    }
    setCheckedList(tempChecklist);
    console.log('222222222', tempChecklist);

  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          checked={checkedList.includes(GOOD)}
          onChange={(e) => handleCheckboxChange(e.target.checked, GOOD)}
        />
        <label className="custom-control-label" for="customSwitch1">
          Good
        </label>
      </div>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch2"
          checked={checkedList.includes(FAST)}
          onChange={(e) => handleCheckboxChange(e.target.checked, FAST)}
        />
        <label class="custom-control-label" for="customSwitch2">
          Fast
        </label>
      </div>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch3"
          checked={checkedList.includes(CHEAP)}
          onChange={(e) => handleCheckboxChange(e.target.checked, CHEAP)}
        />
        <label class="custom-control-label" for="customSwitch3">
          Cheap
        </label>
      </div>
    </div>
  );
}

export default HomePage;