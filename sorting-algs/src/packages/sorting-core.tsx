
import {makeScene2D, Rect} from '@motion-canvas/2d';
import {all, waitFor, makeRef, range, Type} from '@motion-canvas/core';

export type sortSettings = {
    listSize: number,
    rectWidth : number, 
    rectHeight: number, 
    rectStrokeColor: string,
    rectFillColor: string,
    rectStrokeWidth: 1,
    rectMargin: 1,
};
export let defaultSettings: sortSettings = {
    listSize: 4,
    rectWidth : 100, 
    rectHeight: 1, 
    rectStrokeColor: 'red',
    rectFillColor: 'red',
    rectStrokeWidth: 1,
    rectMargin: 1,
};

function calculateListX(index:number, settings: sortSettings) {}

export function createList(refs: Rect[],settings: sortSettings) {
  return range(settings.listSize).map(i => (
        <Rect 
            ref = {makeRef(refs, i)}
            width={settings.rectWidth}
        />
        ));
}

export function moveRects(){}