// import Version from '../components/Version';
// import QueryForm from '../components/Query';

// function HomePage() {
//   return (
//     <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
//       <h1>App Dashboard</h1>
//       <Version />
//       <QueryForm />
//     </div>
//   );
// }

// export default HomePage;

import Version from '../components/Version';
import QueryForm from '../components/Query';

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#fff6ec', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ 
        backgroundColor: '#4c775d',
        borderRadius: '10px',
        padding: '2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>Application Dashboard</h1>
        <Version />
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <QueryForm />
      </div>
    </div>
  );
}

