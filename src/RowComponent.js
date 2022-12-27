import React from 'react';

const Loader = ({style}) => (
  <div style={style} className="list-group-loader">
    <div className="loader"></div>
  </div> 
);

const Item = ({ image, num, style, loading }) => (
  <div style={style} className="list-group-item">
    <div className="avatar">
      <img alt="avatar" src={image} />
    </div>
    <div className="info">
      <p className="number">Number: #{num + 1}</p>
    </div>
  </div>
);

const RowComponent = ({ image, num, style, loading }) => {  
  return loading ? <Loader style={style} /> : <Item image={image} num={num} style={style} loading={loading} />;
}

export default RowComponent;