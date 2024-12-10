import Link from 'next/link';
import React from 'react';

function Header(props) {
   return (
      <header>
         <nav>
            <ul>
               <li><Link href="/">Home</Link></li>
               <li><Link href="/sub1">Sub1</Link></li>
               <li><Link href="/sub2">Sub2</Link></li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;