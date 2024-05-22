import React from 'react';
import { Helmet } from 'react-helmet';

function Header({ site }) {
    return (
        <Helmet>
          <meta charset="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Limitless Continuum | {site}</title>
        </Helmet>
    );
}

export default Header;