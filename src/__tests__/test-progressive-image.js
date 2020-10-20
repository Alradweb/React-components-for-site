import React from 'react'
import {render, screen, fireEvent} from "@testing-library/react"
import {getByTestId} from "@testing-library/dom"
import ProgressiveImage, {filter} from '../components/progressive-image/ProgressiveImage'
import imageMin from "../images/temperance-min.jpg"
import imageMax from "../images/temperance.png"


describe('filter', () => {
    test('function excludes the given key from the object', () => {
        const obj = {'a': 1, 'b': 2, 'c': 3}
        expect(filter(obj, 'b')).toStrictEqual({'a': 1, 'c': 3})
    })
})

describe('ProgressiveImage', () => {
    test('renders ProgressiveImage component', async () => {
        render(<ProgressiveImage alt={'test'}
                                 title={'test'}
                                 overlaySrc={imageMin}
                                 src={imageMax}/>)
        const min = getByTestId(document.documentElement, 'min-img')
        const max = getByTestId(document.documentElement, 'max-img')
        expect(min).toBeInTheDocument()
        expect(max).toBeInTheDocument()
        expect(min).toHaveClass('image image-blur')
        expect(max).toHaveClass('visually-hidden')
        screen.debug()
        await fireEvent.load(max)
        screen.debug()
        expect(min).not.toBeVisible()
        expect(max).toHaveClass('image')
    })
})
