import { loadRouter } from './routes';

export default class Core {
  bootstrap() {
    loadRouter();
  }
}
