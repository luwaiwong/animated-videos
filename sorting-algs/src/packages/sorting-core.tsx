
import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, waitFor, makeRef, range, Type} from '@motion-canvas/core';
import * as colors from "./colors" ;

// List: a collection of visual items
// Item: a single visual item in the list

export type sortSettings = {
    font: string,
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
    font: "Martian Mono",
    listSize: 4,
    x: 0,
    y: 0,
    rectWidth : 100, 
    rectHeight: 100, 
    rectStrokeColor: colors.FOREGROUND,
    rectFillColor: 'red',
    rectStrokeWidth: 1,
    rectMargin: 50,
    rectRadius: 1,
};

function calculateListX(index:number, s: sortSettings) {
    // Calculate offset position for centering the list at s.x
    let offset = (s.rectWidth+s.rectMargin)*(s.listSize/2-0.5) - s.x;

    // Calculate actual position based on index
    return index*(s.rectWidth+s.rectMargin) - offset
}

export function createList(refs: Rect[], values: number[], s: sortSettings) {

    return range(s.listSize).map(i => (
        createItem(refs, values[i]==null? 0: values[i] , i, s)
    )); 
}

export function createItem(refs: Rect[], value: number, i: number, s: sortSettings) {
    return (
        <Rect 
            ref = {makeRef(refs, i)}
            width={s.rectWidth}
            height={s.rectHeight}
            x={calculateListX(i, s)}
            y={s.y}
            stroke={s.rectStrokeColor}
            lineWidth={s.rectStrokeWidth}
            fill={s.rectFillColor}
            radius={s.rectRadius}
        >
            <Txt
                y={6}
                fontSize={s.rectHeight/2}
                fontFamily={s.font}
                fill={colors.FOREGROUND}
            >
                {value.toString()}
            </Txt>
        </Rect>
        );
}

export function* swapItems(refs: Rect[], i: number, j: number, s: sortSettings) {
    let temp = refs[i];
    yield refs[i].position.x(refs[j].position.x(),1);
    yield refs[j].position.x(temp.position.x(),1);
    yield* waitFor(1);
}

export function* checkItems(refs: Rect[], items: number[], s: sortSettings) {
    // Flash both items the check color
    for (let i of items){
        yield refs[i].stroke(colors.CHECK, 1)
    }
    yield* waitFor(1);
    
}

export function* uncheckItems(refs: Rect[], items: number[], s: sortSettings) {
    // Flash both items the check color
    for (let i of items){
        yield refs[i].stroke(colors.FOREGROUND, 1)
    }
    yield* waitFor(1);
    
}


export function* finishSort(refs: Rect[], i: number, x: number, s: sortSettings) {
    // makes everything green
}

