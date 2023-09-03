// dette er text/Layout som jeg skal ha i en av firkantene

import React from 'react';

// dette er en child jeg har laget som kan bli importert ved og skrive Layout
const Layout = () => {
  return (
    <div>
      {/* har kun en <p> men kan adde på mer */}
      <p>Test. Jeg heter Zander, og dette er teksten i den første square.</p>
    </div>
  );
};

export default Layout;
