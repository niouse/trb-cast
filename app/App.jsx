import React from 'react';
import { render } from 'react-dom';


import App from './ui/app.component.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



@App()
class $App {}



render(<$App />, document.getElementById('render-target'));
