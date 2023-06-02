import Head from 'next/head';
import HomeLayout from '.';

const Article = ({ children }) => {
  return (
    <HomeLayout>
      <Head>
        <link rel="stylesheet" href="/css/article.css" type="text/css" media="all" />
      </Head>
      {children}
    </HomeLayout>
  );
};

export default Article;
