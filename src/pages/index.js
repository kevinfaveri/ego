import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HomeSection from '../components/LandingPage/HomeSection';
import AboutMeSection from '../components/LandingPage/AboutMeSection';
import TechstackSection from '../components/LandingPage/TechstackSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeSection />
    <AboutMeSection />
    <TechstackSection />
    <div>WORK SECTION</div>
    <div>OPEN SOURCE PORTFOLIO</div>
    <div>CONTACT ME</div>
  </Layout>
);

export default IndexPage;
