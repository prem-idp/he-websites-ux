import React from 'react';
import Headercomponent from '@packages/shared-components/common-utilities/campaign/header/Headercomponent';
import Footercomponent from '@packages/shared-components/common-utilities/campaign/footer/Footercomponent';

export default function rootCPCLayout({children}: {children: React.ReactNode}) {
  return (
      <html lang="en">
        <body> 
          <Headercomponent />    
          {children}
          <Footercomponent />
        </body>
      </html>
    );
  }