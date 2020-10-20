import React, {useEffect, useRef} from 'react'
import {render, screen} from '@testing-library/react'
import loadable from '@loadable/component'
import Lazy from '../components/lazy/Lazy'
import FishText from '../auxiliary-components/fish-text'

const LazyComponent = loadable(() => import('../auxiliary-components/show-me'))

const Container = () => {
    const testRef = useRef(null)
    useEffect(() => {
        const ev = document.createEvent("HTMLEvents")
        ev.initEvent("scroll", true, true)
        testRef.current.dispatchEvent(ev)
    }, [])
    return (
        <div>
            <FishText num={1}/>
            <p ref={testRef}>test</p>
            <Lazy reference={testRef} Component={LazyComponent} alt='logo'/>
        </div>
    )
}

describe('Lazy', () => {
    test('renders Lazy component', async () => {
        render(<Container/>)
        //initially picture is not displayed
        expect(screen.queryByRole('img')).toBeNull()

        //when the scroll event fires the image is displayed
        expect(await screen.findByRole('img')).toBeInTheDocument()

        //screen.debug()
    })
})
