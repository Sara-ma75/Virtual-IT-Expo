import React from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import Dynamic from 'containers/Dynamic';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.scss?v1.1.0";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([ `dynamic` ]);

const App: React.FC = () =>
  <Root>
    <React.Suspense fallback={<em>Loading...</em>}>
      <Router>
        <Dynamic path="dynamic" />
        <Routes path="*" />
      </Router>
    </React.Suspense>
  </Root>;

export default App;
