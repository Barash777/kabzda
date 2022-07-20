import React, {useEffect, useState} from 'react';

export default {
    title: 'kabzda/UseEffect',
}// as ComponentMeta<typeof input>;

export const SimpleExample = () => {
    console.log('SimpleExample')

    const [counter, setCounter] = useState<number>(0);
    const [fake, setFake] = useState<number>(0);

    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('UseEffect only 1st render')
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('UseEffect 1st render and when counter changed')
        document.title = counter.toString();
    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
        counter: {counter}, fake: {fake}
    </>
}
