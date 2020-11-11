import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';

import './Graph1.css'

const data = [
  
  {
    name: '5am', uv: -1000, pv: 9800
  },
  {
    name: '2am', uv: 1000, pv: 3908
  },
  {
    name: '6pm', uv: -1000, pv: 4800
  },
  
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map(i => i.uv));
  const dataMin = Math.min(...data.map(i => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class Graph1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/64v6ocdx/';

  render() {
    return (
      <ResponsiveContainer height={200} width="100%" >
        <AreaChart
          // width={500 }
          // height={180}
          data={data}
          margin={{
            top: 10, right: 30, left: 30, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="#fdfd78" stopOpacity={1} />
              <stop offset={off} stopColor="#111" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="#acac16" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
