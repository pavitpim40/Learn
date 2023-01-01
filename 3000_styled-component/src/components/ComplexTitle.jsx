import React from 'react'
import styled from 'styled-components'
function ComplexTitle({title}) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
      {/* <h2 className='title'>Random</h2>
      <div className="box"></div> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
/* background:grey ; */
h1 {
  text-transform: capitalize ;
  text-align: center ;
}
.underline {
  width: 500px ;
  height: 5px ;
  background: var(--primary) ;
  margin: 0 auto ;
}
.title{
  color:blue;
}

.box {
  height:10px ;
  border: var(--mainBorder);
}
`



export default ComplexTitle




