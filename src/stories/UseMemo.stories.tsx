import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import {ItemType, Select} from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'kabzda/UseMemo',
    //component: Button,
}// as ComponentMeta<typeof input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DifficultMeasure = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeV = Math.random()
            }

            temp *= i
        }

        return temp
    }, [a])

    let resultB = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= b; i++) {
            temp *= i
        }

        return temp
    }, [b])


    return <>
        <input type="text" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input type="text" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            result for A: {resultA}
        </div>
        <div>
            result for B: {resultB}
        </div>
    </>
}

const usersArray = ['Alex', 'Volodya', 'Igor', 'Aleshhh', 'Oleggg', 'Gavnoed']

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})


export const UseMemoWithReactMemo = () => {
    console.log('WithReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(usersArray);

    const filteredUsers = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users]);

    const addUser = () => {
        const newUser = 'AAA ' + new Date().getTime();
        setUsers([...users, newUser])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={addUser}>add user</button>
        <Users users={filteredUsers}/>
    </>
}


type cityType = {
    countryID: number
    title: string
    citizens: number
}
const citiesArray: cityType[] = [
    {countryID: 1, title: 'Minsk', citizens: 2000},
    {countryID: 1, title: 'Gomel', citizens: 500},
    {countryID: 1, title: 'Kalinkovichi', citizens: 40},
    {countryID: 1, title: 'Zhlobin', citizens: 70},

    {countryID: 2, title: 'Moscow', citizens: 15000},
    {countryID: 2, title: 'Saint-Petersbourg', citizens: 5000},
    {countryID: 2, title: 'Rostov', citizens: 800},
    {countryID: 2, title: 'Kazan', citizens: 2500},

    {countryID: 3, title: 'Kiev', citizens: 1500},
    {countryID: 3, title: 'L\'vov', citizens: 300},
    {countryID: 3, title: 'Har\'kov', citizens: 1150},
    {countryID: 3, title: 'Ivanofronkovsk', citizens: 150},
]

export const UseMemoForSelectHW = () => {
    console.log('UseMemoForSelectHW component')

    const [counter, setCounter] = useState(0);
    const [cities, setCities] = useState<Array<cityType>>(citiesArray);

    const [select1, setSelect1] = useState<Array<ItemType>>([]);
    const [select2, setSelect2] = useState<Array<ItemType>>([]);
    const [select3, setSelect3] = useState<Array<ItemType>>([]);

    const [value1, setValue1] = useState<string>('0')
    const [value2, setValue2] = useState<string>('0')
    const [value3, setValue3] = useState<string>('0')

    const memo = useMemo(() => {
        console.log('use memo')

        let cs = cities.filter(u => u.title.toLowerCase().indexOf('a') > -1).map((u, i) => ({
            title: u.title,
            value: i.toString()
        }))
        setSelect1(cs);


        cs = cities.filter(u => u.countryID === 1).map((u, i) =>
            ({
                title: u.title,
                value: i.toString()
            }))
        setSelect2(cs);


        cs = cities.filter(u => u.citizens >= 2000).map((u, i) =>
            ({
                title: u.title,
                value: i.toString()
            }))
        setSelect3(cs);

        return 0;
    }, [cities]);

    const selectStyle = {
        display: 'inline-block',
        margin: '10px'
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <span style={selectStyle}><Select value={value1} items={select1}
                                          onChange={setValue1}/></span>
        <span style={selectStyle}><Select value={value2} items={select2}
                                          onChange={setValue2}/></span>
        <span style={selectStyle}><Select value={value3} items={select3}
                                          onChange={setValue3}/></span>
    </>
}
