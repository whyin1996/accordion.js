# Accordion.js

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

It is a simple accordion javascript library providing flexible control with using accordion in html

## Special

> The accordion.js library are fully separated from CSS so you can fully design your own accordion without limitation.

## Prerequisite

> You must import jquery before using accordion.js
```sh
<script src="{{YOUR JQUERY PATH}}"></script>
```
> then, add accordion.js
```sh
<script src="{{ACCORDION JS PATH}}"></script>
```

## How to use

> Call accordion([object: object]) method
```sh
    <script>
        $(function(){
            accordion({
                container: ".k-accordion",
                button: ".k-accordion__button",
                content: ".k-accordion__content"
            });
        })
    </script>
```

> Available options: 

| Options | Type | Default | 
| ------ | ------ | ------ | 
| container | class of element (String) | .k-accordion |
| button | class of element (String) | .k-accordion__button |
| content | class of element (String) | .k-accordion__content |

> You are feel free to change these class and what you need to do is to pass the relevant valid class string of your elements to accordion.js

# The structure of accordion view

> The structure of accordion view are shown as below 

```
<div class="{{CONTAINER}}">
    <div class="{{BUTTON}}"></div>
    <div class="{{CONTENT}}"></div>
</div>
```

> the button and the content element must within container element while you are feel free to change the order of the elements within container. for example...

```
<div class="{{CONTAINER}}">
    <div class="{{CONTENT}}"></div>
    <div class="{{BUTTON}}"></div>
</div>
```

> but you CANNOT ...
```
<div class="{{CONTAINER}}">
    <div class="{{CONTENT}}"></div>
</div>
<div class="{{BUTTON}}"></div>
```

#### For further information, please refer to the example in dist folder. 
