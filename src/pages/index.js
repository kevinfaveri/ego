import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PresentationSection from '../components/HomePage/PresentationSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PresentationSection />
    <div>ABOUT ME SECTION</div>
    <div>WORK SECTION</div>
    <div>OPEN SOURCE PORTFOLIO</div>
    <div>CONTACT ME</div>
  </Layout>
);

export default IndexPage;
