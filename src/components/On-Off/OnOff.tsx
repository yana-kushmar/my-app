import React from "react";
import s from './OnOff.module.css'

type SwitcherPropsType = {
    isActive: boolean
    setIsActive: (flag: boolean) => void

}


export const Switcher = (props: SwitcherPropsType) => {
    return (
        <div className={s.all}>
            <div>
                <button onClick={() => props.setIsActive(true)
                } className={s.on}>ON
                </button>
            </div>
            <div>
                <button onClick={() => props.setIsActive(false)} className={s.off}>OFF</button>
            </div>

            {props.isActive ? <div className={s.circleON}></div>
                : <div className={s.circle}>

                </div>
            }

        </div>
    )
}



