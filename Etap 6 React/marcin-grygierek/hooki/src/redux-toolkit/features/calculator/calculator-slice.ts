import { createSlice } from "@reduxjs/toolkit";
import {CalculatorAction} from "../../../redux/action-types/calculator";

interface CalculatorState {
  first: number;
  second: number;
  history: string[];
  result: string | number;
}

const initialState: CalculatorState = {
  first: 0,
  second: 0,
  history: [],
  result: '',
}

interface SetFirst {
  payload: number;
}

interface SetSecond {
  payload: number;
}

interface SetResult {
  payload: number | string;
}

interface AddToHistory {
  payload: string;
}

interface ClearHistory {}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setFirst: (state, action: SetFirst) => {
      state.first = action.payload; //to jest niemutowalne
    },

    setSecond: (state, action: SetSecond) => {
      state.second = action.payload; //to jest niemutowalne
    },

    setResult: (state, action: SetResult) => {
      state.result = action.payload; //to jest niemutowalne
    },

    addToHistory: (state, action: AddToHistory) => {
      state.history.push(action.payload) //to jest niemutowalne
    },

    clearHistory: (state, action: ClearHistory) => {
      state.history = []; //to jest niemutowalne
    }
  }
})

export const { setFirst, setResult, setSecond, addToHistory, clearHistory} = calculatorSlice.actions;