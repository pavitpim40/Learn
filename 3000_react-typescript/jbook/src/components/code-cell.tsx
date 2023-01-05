
import bundler from '../bundler';
import { useState } from 'react';
import CodeEditor from './code-editor';
import CodePreview from './code-preview';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const result = await bundler(input);
    setCode(result);
  };

  return (
    <div>
      <CodeEditor initialValue='const a = 5;' onChange={(value) => setInput(value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <CodePreview code={code} />
    </div>
  );
};

export default CodeCell


