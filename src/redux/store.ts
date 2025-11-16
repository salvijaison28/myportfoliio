import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  value: number
}

const initialState: CounterState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, setValue } = counterSlice.actions

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
