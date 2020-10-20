/**
 *
 *  Вспомогательный компонент для тестирования компонента Lazy
 *
 */

import React from 'react'
import logo from '../logo.svg'

export default (props) => {
    const alt = props.alt || 'logo'
    return <img src={logo} alt={alt}/>
}