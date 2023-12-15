import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type Square = {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation?: number;
    color: string;
}

export interface CanvasState {
    squares: Square[];
}

// Define the initial state
const initialState: CanvasState = {
    squares: [],
};

const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        addSquare: (state) => {
            const newSquare = randomSquare();
            state.squares.push(newSquare);
        },
        removeSquare: (state, action: PayloadAction<string>) => {
            state.squares = state.squares.filter((square) => square.id !== action.payload);
        },
        updateSquare: (state, action: PayloadAction<{ id: string, square: Partial<Square> }>) => {
            const { id, square } = action.payload;
            const updatedSquares = state.squares.map((s) => {
                if (s.id === id) {
                    return {
                        ...s,
                        ...square,
                    };
                }
                return s;
            });
            state.squares = updatedSquares;
        },
        reset: () => initialState,
    },
});

export const { addSquare, removeSquare, updateSquare, reset } = canvasSlice.actions;

export default canvasSlice.reducer;

const randomSquare = (): Square => {
    return {
        id: uuidv4(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        width:20 + Math.random() * 100 ,
        height:20 +  Math.random() * 100,
        rotation: Math.random() * 360,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
    };
};
