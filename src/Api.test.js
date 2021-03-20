import { render, wait, cleanup } from '@testing-library/react';
import mockedAxios from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [ data, setData ] = useState([]);
    useEffect(() => {
     fetchData();
    }, []);
    const fetchData = async () => {
      const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
      const res = await axios.get(url);
      setData(res.data);
    };
    return (
    <div className="App">
        <ul style={{ textAlign: 'left' }}>
           {data.map((item, key) => {
              return <li key={key}>{item.title}</li>;
           })}
        </ul>
    </div>
    );
    }


afterEach(cleanup);
test('mocking axios request', async () => {
const data = {
data: [
 {
   id: 1,
   title: 'title 1'
 },
 {
   id: 2,
   title: 'title 2'
 },
 {
   id: 3,
   title: 'mocked title'
}]
};
mockedAxios.get.mockResolvedValueOnce(data);
const { getByText } = render(<App />);
await wait(() => {
  expect(getByText('mocked title'));
});
});