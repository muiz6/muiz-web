import React from 'react';

import ContactSection from 'components/ContactSection';
import FooterSection from 'components/FooterSection';
import HeaderSection from 'components/HeaderSection';
import NavBar from 'components/NavBar';
import ProjectSection from 'components/ProjectSection';
import ServiceSection from 'components/ServiceSection';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeaderSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
