import React from 'react';
import {render, screen} from '@testing-library/react'

import ShowMe from '../auxiliary-components/show-me'

describe('ShowMe', () => {
    test('renders ShowMe component', () => {
        render(<ShowMe/>)
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByAltText(/.+/)).toBeInTheDocument()
    })
})