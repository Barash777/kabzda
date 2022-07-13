import React, {useCallback, useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import {ItemType, Select} from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'kabzda/UseCallback',
    //component: Button,
}// as ComponentMeta<typeof input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


const booksArray = ['red hat', 'war and peace', 'crime and punish', 'lord of the rings', '1984']

export const UseCallbackExample = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(booksArray);

    const filteredBooks = useMemo(() => books.filter(u => u.toLowerCase().indexOf('a') > -1), [books]);

    const addBook = () => {
        const newBook = 'AAA ' + new Date().getTime();
        setBooks([...books, newBook])
    }

    const memoAddBook = useMemo(() => addBook, [books])
    const memoAddBook2 = useCallback(addBook, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        {/*<button onClick={addBook}>add book</button>*/}
        <Books books={filteredBooks} addBook={memoAddBook2}/>
    </>
}

const BooksSecret = (props: { books: Array<string>; addBook?: () => void }) => {
    console.log('Books secret')
    return <>
        <button onClick={props.addBook}>add book</button>
        <div>{props.books.map((b, i) => <div key={i}>{b}</div>)}</div>
    </>
}

const Books = React.memo(BooksSecret)