import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HomeSection from '../components/LandingPage/HomeSection';
import AboutMeSection from '../components/LandingPage/AboutMeSection';
import TechstackSection from '../components/LandingPage/TechstackSection';
import WorkSection from '../components/LandingPage/WorkSection';
import OpenSourceSection from '../components/LandingPage/OpenSourceSection/OpenSourceSection';

/**
<div>CONTACT ME AND SOCIAL NETWORKS</div>
<div>SOCIAL NETWORKS FOR HOME SECTION</div>
<div>
  HEADER WITH SMOOTH SCROLLING CONTAINING ALL SECTIONS / BLOG OPTION WITH
  SOON LOGO
</div>
<div>DARK/LIGHT THEME OPTION</div>
<div>i18n PT/EN OPTION</div>
<div>REFAC FOR MOBILE (less than 1280 width)</div>
<div>ON SCROLL CHANGE PAGE TITLE ON BROWSER TAB</div>
DOWNLOAD CV
BLOG
 */
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeSection />
    <AboutMeSection />
    <TechstackSection />
    <WorkSection />
    <OpenSourceSection />
  </Layout>
);

export default IndexPage;
