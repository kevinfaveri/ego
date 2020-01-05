import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HomeSection from '../components/LandingPage/HomeSection';
import AboutMeSection from '../components/LandingPage/AboutMeSection';
import TechstackSection from '../components/LandingPage/TechstackSection';
import WorkSection from '../components/LandingPage/WorkSection';
import OpenSourceSection from '../components/LandingPage/OpenSourceSection/OpenSourceSection';

const ReworkOpa = () => (
  <Layout>
    <SEO title="Home" />
    <HomeSection />
    <AboutMeSection />
    <TechstackSection />
    <WorkSection />
    <OpenSourceSection />
  </Layout>
);

export default ReworkOpa;
