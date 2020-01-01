import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HomeSection from '../components/LandingPage/HomeSection';
import AboutMeSection from '../components/LandingPage/AboutMeSection';
import TechstackSection from '../components/LandingPage/TechstackSection';
import WorkSection from '../components/LandingPage/WorkSection';
import OpenSourceSection from '../components/LandingPage/OpenSourceSection/OpenSourceSection';

/**
TODO: LINK PARA PATREON E KOFI
TODO: 404 PAGE
TODO: i18n PT/EN OPTION</div>
TODO: DOWNLOAD CV
TODO: BLOG
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
