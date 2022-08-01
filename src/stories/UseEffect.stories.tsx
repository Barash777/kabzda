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

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')

    const [counter, setCounter] = useState<number>(0);
    const [fake, setFake] = useState<number>(0);

    useEffect(() => {
        console.log('UseEffect')

        /*setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString();
        }, 1000)*/

        const id = setInterval(() => {
            console.log('setInterval, counter = ', counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(id)
        }

    }, [])


    return <>
        <button onClick={() => setCounter(counter + 1)}>c+</button>
        <button onClick={() => setFake(fake + 1)}>f+</button>
        counter: {counter}, fake: {fake}
    </>
}

export const ResetUseEffectExample = () => {
    console.log('ResetUseEffectExample')

    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log('UseEffect')

        return () => {
            console.log('Reset UseEffect')
        }
    }, [])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        counter: {counter}
    </>
}

export const OnKeyTrackerExample = () => {
    console.log('OnKeyTrackerExample')

    const [text, setText] = useState<string>('');

    useEffect(() => {
        console.log('UseEffect')

        const id = setTimeout(() => {
            console.log('TIMOUT FINISHED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            console.log('Reset UseEffect')
            clearTimeout(id)
        }
    }, [text])


    return <>
        Text: {text}
    </>
}