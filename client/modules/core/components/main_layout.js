import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <div className="mainWrapper">
      {content()}
    </div>
  </div>
);

export default Layout;
