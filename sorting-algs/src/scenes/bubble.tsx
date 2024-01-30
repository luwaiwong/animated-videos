import {Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {waitFor} from '@motion-canvas/core';

import  {CreateList, sortSettings, defaultSettings} from "../packages/sorting-core"

import * as colors from "../packages/colors" ;

// Set settings
let settings: sortSettings = defaultSettings;

settings.rectWidth = 200;
settings.rectHeight = 200;
settings.rectFillColor = colors.BACKGROUND;
settings.rectStrokeColor = colors.FOREGROUND
settings.rectStrokeWidth = 10;
settings.rectRadius = 20;

export default makeScene2D(function* (view) {
    let list: Rect[] = [];

    view.fill(colors.BACKGROUND);
    view.add(CreateList(list, settings));
    view.add(<Txt fontFamily={"Martian Mono"}>bruh</Txt>)

    yield* waitFor(5);
});
