import React from 'react';

// import { Container } from './styles';

import Initial from '../../components/Initial';
import Company from '../../components/Company';
import News from '../../components/News';
import Benefits from '../../components/Benefits';
import Contact from '../../components/Contact';

export default function WebSite() {
  return (
    <>
      <Initial />
      <Company />
      <News />
      <Benefits />
      <Contact />
    </>
  );
}
