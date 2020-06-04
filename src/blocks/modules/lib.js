import $ from './core';
import './display';
import './classes';
import './handlers';
import './actions';
import './effects';
import './dropdown/dropdown';
import './modal/modal';
import './tab/tab';
import './carousel/carousel';
import './accordion/accordion';

import './timer/timer';
import forms from './footer/forms/forms';
import images from './images/images';



export default $;

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
	forms();
	images();
});