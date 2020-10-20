import React from 'react'
import {render, screen} from '@testing-library/react'


import FishText from '../auxiliary-components/fish-text'

describe('FishText', () => {
    test('renders FishText component', () => {
        render(<FishText num={1}/>)
        expect(screen.getByTestId('0')).toBeInTheDocument()
        expect(screen.getByText(/Goldeye mudminnow, glass catfish threadfin/)).toBeInTheDocument()
    })
})