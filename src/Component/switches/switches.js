import React, { useState } from 'react';
import ToggleButton from '../toggleButton/toggleButton';

function Switches() {

  const [checkedList, setCheckedList] = useState([]);
  const [cs, setCs] = useState([]);

  const switches = [
    { label: 'GOOD', switch: 'sw1' },
    { label: 'FAST', switch: 'sw2' },
    { label: 'CHEAP', switch: 'sw3' }
  ];
  const _switches = switches.map(item => (
    <ToggleButton cs={cs} setCs={setCs} checkedList={checkedList} setCheckedList={setCheckedList} item={item} />
  ));

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>
        {_switches}
      </div>
    </div>
  );
}

export default Switches;
