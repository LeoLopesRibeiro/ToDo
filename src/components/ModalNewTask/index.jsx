import { animated, useSpring } from '@react-spring/web'
import "./index.css"

export default function Modal({ style }) {
    console.log(style)
    return (

        <div className={`${style} container-new`} style={{ width: style == "slide-right" ? "40vw" : 0}}>
            <div className='container-second'>
                
            </div>
        </div>

    )
}