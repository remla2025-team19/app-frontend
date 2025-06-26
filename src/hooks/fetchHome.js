// A custom hook: handles the logic for fetching from a given URL
import { useEffect, useState } from 'react';
import { fetchWithUserHeader } from '../fetchWithUserHeader';

function useFetchVersion(url) {
    const [versions, setVersions] = useState({ appVersion: 'Loading...', modelServiceVersion: 'Loading...' });
  
    useEffect(() => {
        console.log('🌐 Fetching versions from:', url);
        fetchWithUserHeader(url)
          .then(res => res.json())
          .then(data => {
            console.log('✅ Response:', data);
            setVersions({
              appVersion: data.appVersion || 'N/A', // Assuming API returns data.appVersion
              modelServiceVersion: data.modelServiceVersion || 'N/A' // Assuming API returns data.modelServiceVersion
            });
          })
          .catch((err) => {
            console.error('❌ Fetch error:', err);
            setVersions({ appVersion: 'Error', modelServiceVersion: 'Error' });
          });
      }, [url]);
  
    return versions;
  }

export default useFetchVersion;
