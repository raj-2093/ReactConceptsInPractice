import { useState } from 'react';
import StandardRoutes from './routes/StandardRoutes';
import BaseLayout from './layouts/BaseLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BaseLayout>
      <StandardRoutes/>
    </BaseLayout>
    </>
  );
}

export default App;
