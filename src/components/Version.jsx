// A visual component that shows app and model-service versions
import useFetchVersion from '../hooks/fetchHome';

function Version() {
  const appVersion = useFetchVersion(`${import.meta.env.VITE_APP_SERVICE_URL}/api/version`);

  // Model-service not available yet, so we just show a placeholder
  const modelVersion = 'TODO: model-service not available yet';

  return (
    <div style={{ marginBottom: '2rem' }}>
      {/* <h3>Service Versions</h3> */}
      <p><strong>App version:</strong> {appVersion}</p>
      <p><strong>Model-service version:</strong> {modelVersion}</p>
    </div>
  );
}

export default Version;
