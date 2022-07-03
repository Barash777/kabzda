import {reducer, StateType, TOGGLE_COLLAPSED} from './UncontrolledAccordion';

test('collapsed should be changed', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expection
    expect(state).not.toEqual(newState)
    expect(newState.collapsed).toBe(!state.collapsed)


    state.collapsed = !state.collapsed
    const newState2 = reducer(state, {type: TOGGLE_COLLAPSED})

    // expection
    expect(state).not.toEqual(newState2)
    expect(newState2.collapsed).toBe(!state.collapsed)
})

test('wrong action', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    expect(() => {
        reducer(state, {type: 'sdfs'})
    }).toThrowError('Bad action type')
})