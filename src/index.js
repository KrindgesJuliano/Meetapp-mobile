import React from 'react';
import {StatusBar} from 'react-native';

import './Config/ReactotronConfig';

import Routes from './routes';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#22202C" />
      <Routes />
    </>
  );
}
