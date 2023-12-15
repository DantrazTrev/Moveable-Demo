import React, { useEffect, useState } from 'react';
import styles from '@/styles/editor.module.css';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { addSquare, reset, updateSquare } from '@/stores/canvasReducer';
import Squares from './Squares';
import ColorRibbon from './ColorRibbon';
import Moveable from 'react-moveable';

interface CanvasProps {
    editMode:boolean;
}

const Canvas:React.FC<CanvasProps> = ({editMode}) => {


    const dispatch = useAppDispatch();
    const squares = useAppSelector(state => state.canvas.squares);
    const [targets, setTargets] = useState<HTMLElement[]>([]);
    const [targetId, setTargetId] = useState<string>('');
    const selectSquare = (id: string,element: HTMLElement)=>{
        if(!editMode) return;
       setTargets([element]);
        setTargetId(id);
    }
    const updateColor = (color:string)=>{  
        dispatch(updateSquare({id:targetId,square:{color}}))
     }

     const handleOusideClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        //Check if click is outside of squares
        if(!((e.target as HTMLElement).classList.contains('squares'))){
            setTargetId('');
            setTargets([]);
        }
     }
    useEffect(()=>{
        setTargetId('');
        setTargets([]);
    },[editMode]) 
    return (
        <main className={styles.editor}>
            <div
            className='flex px-4'
            style={{visibility:targetId!=''?'visible':'hidden'}}>
             <ColorRibbon
            onChange={updateColor}/>
            </div>
        <div
        onClick={handleOusideClick}
         className={styles.canvas}> 

            <Moveable
            target={targets}
            draggable={editMode}
            resizable={editMode}
            rotatable={editMode}
            snappable={editMode}
            origin={editMode}
            dragArea={editMode}
            dragContainer={styles.canvas}
              onDrag={e => {
                e.target.style.transform = e.transform;
                   }}
            onDragEnd={({ target, isDrag, lastEvent }) => {
                const newX = parseFloat(lastEvent.beforeTranslate[0]);
                const newY = parseFloat(lastEvent.beforeTranslate[1]);
                dispatch(updateSquare({id:targetId,square:{x:newX,y:newY}}))
            }}
            onRotate={({ target, transform }) => {
                target.style.transform
                    = transform;
            }}
            onRotateEnd={({ target, lastEvent, clientX, clientY }) => {
                const rotation = lastEvent.rotation;
                dispatch(updateSquare({id:targetId,square:{rotation}}))

            }}
            onResize={({ target, width, height, drag }) => {
                target.style.width = `${width}px`;
                target.style.height = `${height}px`;
            }}
            onResizeEnd={({ target, isDrag, clientX, clientY }) => {
                const width = parseFloat(target.style.width);
                const height = parseFloat(target.style.height);
                dispatch(updateSquare({id:targetId,square:{width,height}}))
            }}
            />
            <Squares
            selectSquare={selectSquare}
            />   
            </div>
            <button
            style={{visibility:editMode?'visible':'hidden'}}
            onClick={()=>{dispatch(addSquare())}} className={styles.button}>Add Square</button>
             <button
            style={{visibility:editMode?'visible':'hidden'}}
            onClick={()=>{dispatch(reset())}} className={styles.clear}>Clear Canvas</button>
        </main>
    );
};

export default Canvas;
