import * as esbuild from 'esbuild-wasm'
import {useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
import { fetchPlugin } from './plugins/fetch-plugin'

const App =() => {
  const esbuildRef = useRef<any>()
  const [input,setInput] = useState('')
  const [code,setCode] = useState('')

  const startService = async () => {
    esbuildRef.current =  await esbuild.startService({
      worker:true,
      wasmURL : 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    })
  }

  useEffect(()=>{
    startService()
  },[])

  const onClick = async () => {
  if(!esbuildRef.current) return;

  const result = await esbuildRef.current.build({
    entryPoints:['index.js'],
    bundle:true,
    write : false,
    plugins : [
      unpkgPathPlugin(),
      fetchPlugin(input)
    ],
    define : {
      'process.env.NODE_ENV': '"production"',
      global: 'window'
    }
  })

  setCode(result.outputFiles[0].text)
  console.log(result)
  }
  return (
    <div>
      <textarea 
      value={input}
      onChange={e=> setInput(e.target.value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}


ReactDOM.render(
  <App/>,document.querySelector("#root")
)