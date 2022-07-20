import React, {useMemo, useState} from 'react';

export default {
    title: 'kabzda/UseState',
}// as ComponentMeta<typeof input>;

const generate = () => {
    console.log('generate')
    return 2347238947
}
export const UseStateExample1 = () => {
    console.log('UseStateEx1')

    // const init = useMemo(generate, [])

    const [counter, setCounter] = useState<number>(generate);

    const changer = (state: number) => state + 1

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
