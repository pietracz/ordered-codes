import React from 'react';
import { Helmet } from 'react-helmet';

const title = "Limitless Continuum";

function Header() {
    return (
        <Helmet>
          <meta charset="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>{title} | </title>
        </Helmet>
    );
}

export default Header;