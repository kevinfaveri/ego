import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import LazyImage from '../components/LazyImage';
import SEO from '../components/seo';
import Hero from '../components/Hero';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, display: 'block' }}>
        <LazyImage />
      </div>
    </Hero>
    <Hero>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, display: 'block' }}>
        <LazyImage />
      </div>
    </Hero>
  </Layout>
);

export default IndexPage;
