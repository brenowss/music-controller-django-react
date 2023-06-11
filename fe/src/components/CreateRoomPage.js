import React from 'react';

export default function CreateRoomPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data/')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <h1>room create page</h1>;
}
