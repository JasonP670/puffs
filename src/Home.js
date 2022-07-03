import React, { useEffect, useState } from 'react';
import './Home.css';
import { getData } from './utils';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await getData('/api/v1/products', null);
    setProducts(data);
  }

  const oddDisplay = (product) => (
    <div className='d-flex justify-content-between mt-3'>
      <img className='col-6 col-md-5' src='./resources/PXL_20201101_214741590.jpg' alt='' width={120} height={'auto'} />
      <div className='col-6 col-md-5 d-flex flex-column justify-content-center'>
        <h2 className='text-right'>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
  const evenDisplay = (product) => (
    <div className='d-flex justify-content-between mt-3'>
      <div className='col-6 col-md-4 d-flex flex-column justify-content-center'>
        <h2 className=''>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <img className='col-6 col-md-4 rounded' src='./resources/PXL_20201101_214741590.jpg' alt='' width={120} height={'auto'} />
    </div>
  );

  let displayProducts;
  if (products.length) {
    displayProducts = products.map((product, index) => {
      if (index % 2 === 1) {
        return oddDisplay(product);
      } else {
        return evenDisplay(product);
      }
    });
  }

  return (
    <>
      <div className='fluid-container'>
        <div className='col-12 hero-container d-flex justify-content-center align-items-center'>
          <img id='hero-img' src='./resources/PXL_20201101_214741590.jpg' alt='' />
        </div>
      </div>
      <div className='hero d-flex align-items-center justify-content-center '>
        <div className='fs-1'>Always A Puffin Good Time!</div>
      </div>
      <div className='container'>
        <div className='col-12 mt-5'>
          <h1>Flavors of the Week:</h1>
          {displayProducts}
        </div>
      </div>
    </>
  );
}
