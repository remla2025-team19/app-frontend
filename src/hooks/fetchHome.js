// A custom hook: handles the logic for fetching from a given URL
import { useEffect, useState } from 'react';

function useFetchVersion(url) {
  const [versionInfo, setVersionInfo] = useState({
    app_version: 'Loading...',
    model_service_version: 'Loading...',
  });

  useEffect(() => {
    console.log('Fetching version from:', url);
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Response:', data);
        setVersionInfo({
          app_version: data.app_version || 'No app version',
          model_service_version: data.model_service_version || 'No model version',
        });
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setVersionInfo({
          app_version: 'Error fetching',
          model_service_version: 'Error fetching',
        });
      });
  }, [url]);
  

  return versionInfo;
}

export default useFetchVersion;