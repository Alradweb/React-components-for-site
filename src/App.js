import React, {useRef} from 'react'
import loadable from '@loadable/component'
import FishText from './auxiliary-components/fish-text'
import Lazy from "./components/lazy/Lazy"
import ProgressiveImage from './components/progressive-image/ProgressiveImage'
import imageMax from './images/temperance.png'
import imageMin from './images/temperance-min.jpg'
import './App.css'


const ShowMe = loadable(() => import('./auxiliary-components/show-me'))

function App() {

    const testRef = useRef(null)
    return (
        <div className="App">
            <ProgressiveImage
                alt={'test'}
                title={'test'}
                overlaySrc={imageMin}
                src={imageMax}
            />
            <FishText num={10}/>
            <p ref={testRef} style={{color: 'red'}}>
                Scorpionfish crestfish burrowing goby, sixgill shark yellow-and-black triplefin lizardfish mudfish .
            </p>
            <Lazy reference={testRef} Component={ShowMe} alt='logo'/>
        </div>
    )
}

export default App
