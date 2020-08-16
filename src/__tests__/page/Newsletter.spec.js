import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../pages/Home';

describe('Send Mail Newsletter', () => {
  it('shoud be able to send e-mail from newsletter', () => {
    const { debug } = render(<Home />);

    debug();
  });
});