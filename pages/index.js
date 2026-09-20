import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hi, I'm Ahmad Shahzad. I'm passionate about sports and love staying active
  whenever I can. When it comes to music, I'm all about Hip-Hop and R&amp;B.
  My favorite food is sinigang — nothing beats a warm bowl of it. Looking
  ahead, I see myself running my own business in the next 5 years, turning
  my ideas into something real.]</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}