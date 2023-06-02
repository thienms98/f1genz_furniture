import Head from 'next/head';
import HomeLayout from '.';

const News = ({ children }) => {
  return (
    <HomeLayout>
      <Head>
        <title></title>
        <link rel="stylesheet" href="/css/news_page.css" type="text/css" media="all" />
      </Head>
      {children}
    </HomeLayout>
  );
};

export default News;
