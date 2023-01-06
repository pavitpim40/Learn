
import bundler from '../bundler';
import { useState,useEffect } from 'react';
import CodeEditor from './code-editor';
import CodePreview from './code-preview';
import Resizable from './resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const [err,setErr] = useState('')

  useEffect(()=>{
    const timer = setTimeout(async ()=>{
      const {code,err} = await bundler(input)
      setCode(code)
      setErr(err)
    },1000)

    return () => {
      clearTimeout(timer)
    }
  },[input])

  return (
    <Resizable direction='vertical'>
    <div style={{height:'100%', display:'flex'}}>
      <Resizable direction='horizontal'>
      <CodeEditor initialValue='' onChange={(value) => setInput(value)} />
      </Resizable>
      <CodePreview code={code} err={err}/>
    </div>
    </Resizable>
  );
};

export default CodeCell


