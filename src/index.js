import ReactDOM from 'react-dom';
import createRoutes from './routes';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
const routes = createRoutes();

ReactDOM.render(routes, rootElement);

serviceWorker.unregister();