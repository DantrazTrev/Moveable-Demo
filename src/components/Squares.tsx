import React from 'react';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';

interface SquaresProps {
    selectSquare: (id: string,element: HTMLElement) => void;
}

const Squares:React.FC<SquaresProps>  = ({selectSquare}) => {

    const dispatch = useAppDispatch();
    const squares = useAppSelector(state => state.canvas.squares);
    return (
        <>
           {squares.map((square, index) => {
            return(
                 <div key={square.id} 
                 className='squares'
                 onClick={(e)=>{selectSquare(square.id,e.target as HTMLElement)}}
                 style={{
                  
                    transform: `translate(${square.x}px,${square.y}px) rotate(${square.rotation}deg)`,
                    width: square.width, height: square.height, backgroundColor: square.color}}></div>

            )
           })}
        </>
    );
};

export default Squares;
