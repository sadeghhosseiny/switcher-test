import React from 'react';
import styles from './toggleButton.module.css';

function ToggleButton({ checkedList, setCheckedList, item }) {

  const handleCheckboxChange = (value, cbName) => {
    if (!value) {
      setCheckedList((prev) => prev.filter((item) => item !== cbName));
      return;
    }

    let tempChecklist = [...checkedList];
    tempChecklist.push(cbName);
    tempChecklist.sort();
    if (tempChecklist.length === 3) {
      if (cbName == 'CHEAP') {
        tempChecklist.splice(1, 1);
      }
      else if (cbName == 'FAST') {
        tempChecklist.pop();
      }
      else if (cbName == 'GOOD') {
        tempChecklist.shift();
      }
    }
    setCheckedList(tempChecklist);
  };

  const switchClasses = {
    GOOD: 'good-lbl',
    CHEAP: 'cheap-lbl',
  };

  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id={item.switch}
        checked={checkedList.includes(item.label)}
        onChange={(e) => handleCheckboxChange(e.target.checked, item.label)}
      />
      <label className={`${checkedList.includes(item.label) ? styles[switchClasses[item.label]] : 'custom-control-label'} custom-control-label`}
        htmlFor={item.switch}>
        {item.label}
      </label>
    </div>
  );
}

export default ToggleButton;
