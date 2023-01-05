import 'bulmaswatch/superhero/bulmaswatch.min.css'
import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './components/code-editor';


const App = () => {
  const esbuildRef = useRef<any>();
  const iframeRef = useRef<any>();
  const [input, setInput] = useState('');

  const startService = async () => {
    esbuildRef.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  };

  useEffect(() => {
    startService();
   
  }, []);

  const onClick = async () => {
    if (!esbuildRef.current) return;

    iframeRef.current.srcdoc = html;
    const result = await esbuildRef.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });

    iframeRef.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
  };

  const html = `
   <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener('message', (event)=> {
         try {
          eval(event.data)
         } catch (err){
            const root = document.querySelector("#root");
            root.innerHTML = '<div style="color:red;"><h4>Runtime Error</h4>'+err +'</div>'
            // throw(err)
            console.error(err)
         }
        },false)
      </script>
    </body>
   </html>
  `;

  return (
    <div>
      <CodeEditor 
      initialValue='const a = 5;'
      onChange={(value)=> setInput(value)}
      />
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div><button onClick={onClick}>Submit</button></div>

      <iframe srcDoc={html} title='code preview' sandbox='allow-scripts' ref={iframeRef} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
