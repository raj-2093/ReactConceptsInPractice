import { useState } from 'react';
import StandardRoutes from './routes/StandardRoutes';
import BaseLayout from './layouts/BaseLayout';
import FreeLayout from './layouts/FreeLayout';
import { useLocation } from 'react-router';
import Layout from './layouts/Layout';

function App() {
  const [count, setCount] = useState(0);
  let location = useLocation();
  console.log("location-",location.pathname);


  return (
    <>
    <Layout>
      <StandardRoutes/>
    </Layout>
    </>
  );
}

export default App;
