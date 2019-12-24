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
    <div>CONTACT ME AND SOCIAL NETWORKS</div>
    <div>FOOTER AND COPYRIGHT</div>
    <div>SOCIAL NETWORKS FOR HOME SECTION</div>
    <div>HEADER WITH SMOOTH SCROLLING CONTAINING ALL SECTIONS</div>
    <div>DARK/LIGHT THEME OPTION</div>
    <div>i18n PT/EN OPTION</div>
    <div>REFAC FOR MOBILE (less than 1280 width)</div>
  </Layout>
);

export default IndexPage;
