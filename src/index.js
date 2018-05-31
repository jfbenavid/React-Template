import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css/animate.min.css';
import 'material-design-iconic-font/scss/_variables.scss';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import './static/styles/app_1.min.css';
import './static/styles/app_2.min.css';
import App from './components/common/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
