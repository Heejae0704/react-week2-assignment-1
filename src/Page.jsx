import React from 'react';
import Buttons from './Buttons';
import Counter from './Counter';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
    </div>
  );
}

export default Page;
