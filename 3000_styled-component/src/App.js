import React from 'react';
// import { HipsterButton, DefaultButton } from './components/Buttons';
import Products from './components/Products';
// function App() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <HipsterButton>click me</HipsterButton>
//       <HipsterButton
//         css={`
//           color: green;
//         `}
//         as='a'
//         href='wwww.google.com'
//         target='_blank'
//       >
//         click me
//       </HipsterButton>
//       <HipsterButton>click me</HipsterButton>
//       <div
//         css={`
//           color: green;
//         `}
//       >
//         <h2>hello world</h2>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* <DefaultButton>click me</DefaultButton>
      <DefaultButton large>click me</DefaultButton> */}
      <Products />
    </div>
  );
}

export default App;
