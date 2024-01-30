
import {makeScene2D, Rect} from '@motion-canvas/2d';
import {all, waitFor, makeRef, range, Type} from '@motion-canvas/core';

export type sortSettings = {
    listSize: number,
    x: number,
    y: number,
    rectWidth : number, 
    rectHeight: number, 
    rectStrokeColor: string,
    rectFillColor: string,
    rectStrokeWidth: number,
    rectMargin: number,
    rectRadius: number,
};
export let defaultSettings: sortSettings = {
    listSize: 4,
    x: 0,
    y: 0,
    rectWidth : 100, 
    rectHeight: 100, 
    rectStrokeColor: 'white',
    rectFillColor: 'red',
    rectStrokeWidth: 1,
    rectMargin: 50,
    rectRadius: 1,
};

function CalculateListX(index:number, s: sortSettings) {
    // Calculate offset position for centering the list at s.x
    let offset = (s.rectWidth+s.rectMargin)*(s.listSize/2-0.5) - s.x;

    // Calculate actual position based on index
    return index*(s.rectWidth+s.rectMargin) - offset
}

export function CreateList(refs: Rect[],s: sortSettings) {
  return range(s.listSize).map(i => (
        <Rect 
            ref = {makeRef(refs, i)}
            width={s.rectWidth}
            height={s.rectHeight}
            x={CalculateListX(i, s)}
            y={s.y}
            stroke={s.rectStrokeColor}
            lineWidth={s.rectStrokeWidth}
            fill={s.rectFillColor}
            radius={s.rectRadius}
        />
        ));
}

export function CoveRects(){}