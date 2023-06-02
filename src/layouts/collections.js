import React from 'react';
import Head from 'next/head';

import MainLayout from '.';

const Collections = ({ children }) => {
  return (
    <MainLayout>
      <Head>
        <title>Tất cả sản phẩm – F1GENZ Furniture</title>
        <link rel="stylesheet" href="/css/collection.css" />
      </Head>
      {children}
    </MainLayout>
  );
  // <div>{children}</div>;
};

export default Collections;
