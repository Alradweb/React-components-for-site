/**
 *
 *  Компонент принимает две ссылки на картинки:
 *  первая - низкого качества, а вторая - полноразмерная версия.
 *  Пока не загрузится полная версия, в браузере отображается
 *  минимальная с эффектом blur.
 *
 */

import React, {useState} from 'react'
import './progressive-image.scss'

export const filter = (obj, exclude) => {
    return Object.entries(obj).reduce((res, [key, value]) => {
        if (key !== exclude) res[key] = value
        return res
    }, {})
}

export default (props) => {
    const [highResImageLoaded, setHighResImageLoaded] = useState(false)
    const {src, overlaySrc} = props
    const filteredProps = filter(props, "overlaySrc")
    return (
        <>
            <img
                {...filteredProps}
                onLoad={() => {
                    setHighResImageLoaded(true)
                }}
                src={src}
                data-testid="max-img"
                className={!highResImageLoaded ? 'visually-hidden' : 'image'}
            />
            {
                <img
                    {...filteredProps}
                    className='image image-blur'
                    {...highResImageLoaded && {style: {display: 'none'}}}
                    src={overlaySrc}
                    data-testid="min-img"
                />
            }
        </>
    )
}