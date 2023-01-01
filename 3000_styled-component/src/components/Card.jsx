import React from 'react'
import styled from 'styled-components'

function Card() {
  return (
    <StyledCard>
      <img  src='https://v5.airtableusercontent.com/v1/13/13/1672480800000/XwC9h3OTSASFbOcXGRNHFw/2epS6K6TdNHaz4qfOt9McdWnE1SG4aqPWN465jAWt8M88Oo83pCiIYpkdIWDRphVbFrHxxec4zckWriS0PsFcw/ER8oKi4ByW9Oig1DJMfINIy9imyqoI8yykRyumWC4do' alt='product'/>
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`

width: 90vw;
max-width: 300px;
background:var(--white);
border-radius:0.25rem ;
transition: all 0.5s ease-in-out ;

img {
  width: 100%;
  border-top-left-radius:0.25rem;
  border-top-right-radius:0.25rem ;
}

footer {
  display: flex ;
  justify-content: space-between ;
  align-items: center ;
  padding: 0 2rem ;

  h4 {
  text-transform: capitalize ;
  
  &:hover {
    color:green;
  }
  &::before {
    content: 'Name : ' ;
    color:red;
  }
}

p {
  color:var(--primary);
  font-weight: 700 ;
}
&:hover {
  background:red
}
}

&:hover {
  box-shadow:0 3px 3px #222;
}

@media (min-width:768px) {
  max-width: 600px ;
}
`

export default Card