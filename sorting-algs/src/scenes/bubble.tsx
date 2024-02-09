import {Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {waitFor, createRef, all} from '@motion-canvas/core';

import  {createList, sortSettings, defaultSettings, swapItems, checkItems, uncheckItems} from "../packages/sorting-core"

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

export default makeScene2D(function* (view) {
    let list: Rect[] = [];
    let listValues: number[] = [8,5,3,9,1];

    view.fill(colors.BACKGROUND);
    view.add(createList(list, listValues,settings));
    view.add(
        <Txt 
            fontFamily={"Martian Mono"} 
            fontSize={50}
            fill={colors.FOREGROUND}
            x={0}
            y={-300}
        >
            Bubble Sort
        </Txt>
    )

    // Starting List [8, 5, 3, 9, 1]

    yield* checkItems(list, [0,1], settings);
    yield* swapItems(list, 0, 1, settings);
    // List [5, 8, 3, 9, 1]
    yield* uncheckItems(list, [0,1], settings);

    yield* swapItems(list, 0, 2, settings);
    // List [5, 3, 8, 9, 1]

    yield* checkItems(list, [0,3], settings);
    yield* uncheckItems(list, [0,3], settings);

    yield* swapItems(list, 3, 4, settings);
    // List [5, 3, 8, 1, 9]

    
    yield* swapItems(list, 1, 2, settings);
    // List [3, 5, 8, 1, 9]
    
    yield* swapItems(list, 0, 4, settings);
    // List [3, 5, 1, 8, 9]

    yield* swapItems(list, 1, 4, settings);
    // List [3, 1, 5, 8, 9]
    
    yield* swapItems(list, 2, 4, settings);
    // List [3, 1, 5, 8, 9]

    yield* waitFor(2);
});
