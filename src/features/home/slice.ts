import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
    subjectA: string;
    subjectB: string;
}

const initialState: State = {
    subjectA: "",
    subjectB: ""
}

const slice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setA: (state: State, action: PayloadAction<string>) => {
            state.subjectA = action.payload
        },
        setB: (state: State, action: PayloadAction<string>) => {
            state.subjectB = action.payload
        }
    }
})

export const homeReducer = slice.reducer;
export const {setA, setB} = slice.actions;


