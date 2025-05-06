// A visual component that shows app and model-service versions
import useFetchVersion from '../hooks/fetchHome';

function Version() {
    const { appVersion, modelServiceVersion } = useFetchVersion("api/version");

    return (
        <div style={{ marginBottom: '2rem' }}>
            {/* <h3>Service Versions</h3> */}
            <p><strong>App version:</strong> {appVersion}</p>
            <p><strong>Model-service version:</strong> {modelServiceVersion}</p>
        </div>
    );
}

export default Version;
