import Version from '../components/Version';

function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>App Dashboard</h1>
      <Version />
    </div>
  );
}

export default HomePage;