// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Param, Model } from './types';

const params: Param[] = [
  {
    id: 1,
    name: "Назначение",
    type: "string"
  },
  {
    id: 2,
    name: "Длина",
    type: "string"
  }
];

const model: Model = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное"
    },
    {
      paramId: 2,
      value: "макси"
    }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App params={params} model={model} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
