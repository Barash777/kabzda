import React, {useEffect, useState} from 'react';
import css from './Clock.module.css'

export type clockMode = 'Digital' | 'Analog'

export type ClockPropsType = {
    mode?: clockMode
}

const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date());
    const localeDate = date.toLocaleTimeString('Ru-ru').split('')

    let hoursStyle = {}
    let minutesStyle = {}
    let secondsStyle = {}

    // change analog clock hands
    if (props.mode === 'Analog') {

        const hours = ((date.getHours() + 11) % 12 + 1);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;

        hoursStyle = {
            transform: `rotate(${hour}deg)`
        };

        minutesStyle = {
            transform: `rotate(${minute}deg)`
        };

        secondsStyle = {
            transform: `rotate(${second}deg)`
        };
    }


    useEffect(() => {
        const idInterval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])


    return (
        <div>
            {props.mode === 'Analog'
                ?
                <div className={css.clock}>
                    <div className={css.wrap}>
                        <span style={hoursStyle} className={css.hour}></span>
                        <span style={minutesStyle} className={css.minute}></span>
                        <span style={secondsStyle} className={css.second}></span>
                        <span className={css.dot}></span>
                    </div>
                </div>
                :
                <div className={css.digitalWrap}>
                    <div className={css.digitalClock}>
                        <div>
                            <div>
                                <div>{localeDate[0]}</div>
                            </div>
                            <div>
                                <div>{localeDate[1]}</div>
                            </div>
                        </div>
                        <div className={css.tick}>:</div>
                        <div>
                            <div>
                                <div>{localeDate[3]}</div>
                            </div>
                            <div>
                                <div>{localeDate[4]}</div>
                            </div>
                        </div>
                        <div className={css.tick}>:</div>
                        <div>
                            <div>
                                <div>{localeDate[6]}</div>
                            </div>
                            <div>
                                <div>{localeDate[7]}</div>
                            </div>
                        </div>
                    </div>
                </div>}
            {}
        </div>
    );
};

export default Clock;