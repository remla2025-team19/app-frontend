// A custom hook: handles the logic for fetching from a given URL
import { useEffect, useState } from 'react';

function useFetchVersion(url) {
    const [version, setVersion] = useState('Loading...');
  
    useEffect(() => {
        console.log('🌐 Fetching version from:', url);
        fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log('✅ Response:', data);
            setVersion(data.version || data.model_version || 'No version');
          })
          .catch((err) => {
            console.error('❌ Fetch error:', err);
            setVersion('Error fetching');
          });
      }, [url]);
  
    return version;
  }

export default useFetchVersion;
