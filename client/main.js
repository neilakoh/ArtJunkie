import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import wspayTesterModule from './modules/wspay_tester';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(wspayTesterModule);
app.init();

// site info
var title = 'ArtJunkie';
DocHead.setTitle(title);

// site tools
var cssBootstrap = {rel: 'stylesheet', href: '/bootstrap-3.3.6/css/bootstrap.min.css'};
var cssTheme = {rel: 'stylesheet', href: '/bootstrap-3.3.6/css/bootstrap-theme.css'};
var bsScript = '/bootstrap-3.3.6/js/bootstrap.min.js';
DocHead.addLink(cssBootstrap);
DocHead.addLink(cssTheme);
DocHead.loadScript(bsScript);
