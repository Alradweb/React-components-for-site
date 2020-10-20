/**
 *
 *  Когда user прокручивает страницу до указанной метки reference,
 *  webpack загружает с сервера компонент Component посредством @loadable/component
 *
 */

import React, {useEffect, useState} from "react"

const isTest = process.env.NODE_ENV === 'test'

const Lazy = (props) => {
    const [show, setShow] = useState(false)
    const {reference, Component, ...rest} = props
    useEffect(() => {
        const elementIsVisible = (elem) => {
            if (elem.getBoundingClientRect().top < document.documentElement.clientHeight || isTest) { //TODO
                setShow(true)
                window.removeEventListener("scroll", onScroll)
            }
        }
        const onScroll = () => {
            elementIsVisible(reference.current)
        }
        if (reference.current) {
            window.addEventListener("scroll", onScroll)
            return () => window.removeEventListener("scroll", onScroll)
        }
        // eslint-disable-next-line
    }, [])

    return show && <Component {...rest}/>
}
export default Lazy