import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.js';
import Home from './components/home.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
}
