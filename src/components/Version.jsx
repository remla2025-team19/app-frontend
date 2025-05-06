// A visual component that shows app and model-service versions
import useFetchVersion from '../hooks/fetchHome';

function Version() {
  const versionData = useFetchVersion(`${import.meta.env.VITE_APP_SERVICE_URL}/api/version`);

  const appVersion = versionData?.app_version || 'Loading...';
  const modelVersion = versionData?.model_service_version || 'Loading...';

  return (
    <div style={{ marginBottom: '2rem' }}>
      <p><strong>App version:</strong> {appVersion}</p>
      <p><strong>Model-service version:</strong> {modelVersion}</p>
    </div>
  );
}

export default Version;
