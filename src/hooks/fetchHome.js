// A custom hook: handles the logic for fetching from a given URL
import { useEffect, useState } from 'react';

function useFetchVersion(url) {
    const [version, setVersion] = useState('Loading...');
  
    useEffect(() => {
        const fullUrl = `${import.meta.env.VITE_APP_SERVICE_URL}/api/version`;
        console.log('🌐 Fetching version from:', fullUrl);
      
        fetch(fullUrl)
          .then(res => res.json())
          .then(data => {
            console.log('✅ Response:', data);
            setVersion(data.version || data.model_version || 'No version');
          })
          .catch((err) => {
            console.error('❌ Fetch error:', err);
            setVersion('Error fetching');
          });
      }, []);
  
    return version;
  }

export default useFetchVersion;