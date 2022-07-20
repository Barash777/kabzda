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
        <button onClick={() => setCounter(counter + 1)}>c+</button>
        <button onClick={() => setFake(fake + 1)}>f+</button>
        counter: {counter}, fake: {fake}
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState<number>(0);
    const [fake, setFake] = useState<number>(0);

    useEffect(() => {
        console.log('UseEffect')

        /*setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString();
        }, 1000)*/

        setInterval(() => {
            console.log('setInterval, counter = ', counter)
            setCounter(state => state + 1)
        }, 1000)

    }, [])


    return <>
        <button onClick={() => setCounter(counter + 1)}>c+</button>
        <button onClick={() => setFake(fake + 1)}>f+</button>
        counter: {counter}, fake: {fake}
    </>
}

export const Clock = () => {
    console.log('Clock')

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('UseEffect')

        /*setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString();
        }, 1000)*/

        setInterval(() => {
            // console.log('setInterval, counter = ', counter)
            setDate(new Date())
        }, 1000)

    }, [])


    return <>
        clock: {date.toLocaleTimeString('Ru-ru')}
    </>
}
