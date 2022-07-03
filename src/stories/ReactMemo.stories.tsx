import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'kabzda/ReactMemo',
    //component: Button,
}// as ComponentMeta<typeof input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const NewMessagesCounter = React.memo((props: { count: number }) => {
    return <div>{props.count}</div>
})

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Secret users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})

// const Users = React.memo(UsersSecret)

const usersArray = ['Alex', 'Volodya', 'Igor']

export const ReactMemoExample1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(usersArray);

    const addUser = () => {
        const newUser = 'XXX ' + new Date().getTime();
        setUsers([...users, newUser])

        // const newUser = 'XXX ' + new Date().getTime();
        // users.push(newUser)
        // setUsers(users)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
