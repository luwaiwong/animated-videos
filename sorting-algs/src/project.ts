import {makeProject} from '@motion-canvas/core';

import "./packages/font-import.css";

import example from './scenes/example?scene';
import bubble from './scenes/bubble?scene';


export default makeProject({
  scenes: [bubble],
});
