import {makeProject} from '@motion-canvas/core';

import "./packages/font-import.css";

import transition from './scenes/transition?scene';
import bubble from './scenes/bubble?scene';


export default makeProject({
  scenes: [transition, bubble, transition],
});
