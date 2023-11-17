import Axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';

function FetchApi() {
  let [apiData, setApiData] = useState([]);
  let [showApi, setShowApi] = useState(false);
  let [showData, setShowData] = useState([]);

  useEffect(() => {
    Axios.get('https://dummyjson.com/users')
      .then((res) => setApiData(res.data.users))
      .catch((err) => console.log(err));
  }, []);
  // console.log(apiData);

  const calcEvenData = function () {
    const evenData = apiData.filter((data) => data.id % 2 === 0);
    console.log(evenData);
    setShowData(evenData);
  };

  //Range User
  const calcRangeData = function () {
    const fromNum = document.querySelector('.fromNum').value;
    const toNum = document.querySelector('.toNum').value;
    const rangeData = apiData.filter((data) => data.id >= fromNum && data.id <= toNum);
    console.log(rangeData);
    setShowData(rangeData);
    document.querySelector('.fromNum').value = '';
    document.querySelector('.toNum').value = '';
  };

  const clacOddData = function () {
    const oddData = apiData.filter((data) => data.id % 2);
    console.log(oddData);
    setShowData(oddData);
  };

  //Find User
  const calcFindData = function () {
    const findBox = document.querySelector('.findBox').value;
    const findData = apiData.filter(
      (data) =>
        data.id === Number(findBox) ||
        data.firstName ===
          findBox.slice(0, 1).toUpperCase() + findBox.slice(1).toLowerCase()
    );
    console.log(findData);

    setShowData(findData);

    document.querySelector('.findBox').value = '';
  };

  return (
    <div className='component'>
      <h1>Fetch API (list of {apiData.length} users)</h1>
      <br />
      <button className='btn' onClick={clacOddData}>
        Odd Data
      </button>
      <button className='btn' onClick={calcEvenData}>
        Even Data
      </button>
      <button className='btn' onClick={() => setShowData([])}>
        Clear
      </button>
      <div>
        <input type='number' className='textBox fromNum' placeholder='from' />
        <input type='number' className='textBox toNum' placeholder='to' />
        <button className='btn' onClick={calcRangeData}>
          Range Data
        </button>
      </div>
      <div>
        <input
          type='text'
          className='textBox findBox'
          placeholder='Search by ID or Name'
        />
        <button className='btn' onClick={calcFindData}>
          Find Data
        </button>
      </div>
      {showData.map((data, index) => (
        <li key={index}>
          {data.id}: {data.firstName}
        </li>
      ))}
      <br />
      <button className='btn' onClick={() => setShowApi(!showApi)}>
        {!showApi ? 'Show' : 'Hide'} Data
      </button>
      <br />
      <br />
    </div>
  );
}

export default FetchApi;
