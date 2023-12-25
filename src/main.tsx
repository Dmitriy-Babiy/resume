import ReactDOM from 'react-dom/client';

import './assets/styles/index.scss';
import App from './App.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
);
