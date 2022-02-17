import { render } from 'react-dom';
import { App } from './App'; //não preciso colocar a extensão. Já tem no arquivo webpack


render(<App />, document.getElementById('root')) //1 parametro, o que eu quero renderizar-exibir em tela e
//o segundo é dentro de qual elemento eu quero renderizar a informação;