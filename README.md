# accordion.js
It is a simple accordion javascript library providing flexible control with using accordion in html

## special
The accordion.js library are fully separated from CSS so you can fully design your own accordion without limitation.

## prerequisite

You must import jquery before using accordion.js
e.g. "<script src="{{YOUR JQUERY PATH}}"></script>"

then, add accordion.js
e.g. "<script src="{{ACCORDION JS PATH}}"></script>"

## How to use

1. call accordion([object: object]) method

available options: 
    - container (the class of your accordion container element)
        * DEFAULT ".k-accordion"
        * OPTIONAL
    - button (the class of your accordion button element)
        * DEFAULT ".k-accordion__button"
        * OPTIONAL
    - content (the class of your accordion content element)
        * DEFAULT ".k-accordion__content"
        * OPTIONAL

e.g. 
accordion(
    {
        container: ".k-accordion",
        button: ".k-accordion__button",
        content: ".k-accordion__content", 
    }
);




