import {Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {waitFor, createRef, all, fadeTransition} from '@motion-canvas/core';

import  {createList, sortSettings, defaultSettings, swapItems, checkItems, uncheckItems, finishSort} from "../packages/sorting-core"

import * as colors from "../packages/colors" ;

// Set settings
let settings: sortSettings = defaultSettings;

settings.listSize = 5;
settings.rectWidth = 200;
settings.rectHeight = 200;
settings.rectFillColor = colors.BACKGROUND;
settings.rectStrokeColor = colors.FOREGROUND
settings.rectStrokeWidth = 10;
settings.rectRadius = 20;

settings.swapTime = 1;
settings.checkTime = 0.5;
settings.paddingTime = 0.5;
settings.finishTime = 0.2;

export default makeScene2D(function* (view) {

    view.fill(colors.BACKGROUND);
    // Starting List [8, 5, 3, 9, 1]
    yield* fadeTransition(0.5)
    yield* waitFor(0.5);
});
