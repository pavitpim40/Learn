import './resizable.css';
import React,{useEffect,useState} from 'react';
import { ResizableBox,ResizableBoxProps } from 'react-resizable';

const INIT_FACTOR = 0.5
interface ResizableProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight,setInnerHeight] = useState(window.innerHeight);
  const [innerWidth,setInnerWidth] = useState(window.innerWidth)
  const [width,setWidth] = useState(innerWidth*INIT_FACTOR)
useEffect(()=>{
  let timer:any;
  const listener = () => {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth)
    if(window.innerWidth*INIT_FACTOR < width) {
      setWidth(window.innerWidth*INIT_FACTOR)
    }
    },100)
    
  }
  window.addEventListener('resize', listener)

  return ()=> {
    window.removeEventListener('resize',listener)
  }
},[width])


  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints:[innerWidth*0.2, Infinity],
      maxConstraints:[innerWidth*INIT_FACTOR, Infinity],
      height:Infinity,
      width:width,
      resizeHandles:['e'],
      onResizeStop: (event,data) => {
        // console.log(data)
        setWidth(data.size.width)
      }
   }
  } else {
    resizableProps = {
      minConstraints:[Infinity, 50],
      maxConstraints:[Infinity, innerHeight * 0.9],
      height:400,
      width:Infinity,
      resizeHandles:['s'],
    }
  }

  return (
    <ResizableBox
     {...resizableProps}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
