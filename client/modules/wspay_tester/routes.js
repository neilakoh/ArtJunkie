import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.js';
import WspayTester from './containers/wspay_tester.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/wspaytester', {
    name: 'wspay.tester',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<WspayTester />)
      });
    }
  });
}
