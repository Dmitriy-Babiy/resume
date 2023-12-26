import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n/i18n.ts';
import App from './App.tsx';
import './assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
);
