import React from 'react';
import {ResponsiveContainer, LineChart, Line} from 'recharts';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { Container, GraphContainer, InfoContainer, Title } from './OverallItem.styles';

const OverallItem = ({data, category}) => {
  let diff = data && data[data.length - 1].value - data[data.length -2].value;
  let increase = diff > 0;
  return (
    <Container>
        {
          data && (
            <>
              <GraphContainer>
                <LineChart width={300} height={40} data={data}>
                  <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false}/>
                </LineChart>
              </GraphContainer>
              <InfoContainer>
                <h3 style={{color: increase ? 'red': 'green'}}>{data[data.length - 1].value}</h3>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {diff <= 0 ? <FaArrowDown color={'green'}/> : <FaArrowUp color={'red'}/> }
                  <h3 style={{color: increase ? 'red': 'green', marginLeft: '10px'}}>{diff}</h3>
                </div>
              </InfoContainer>
            </>
          )
        }
      <Title>{category}</Title>
    </Container>
  )
}

export default OverallItem