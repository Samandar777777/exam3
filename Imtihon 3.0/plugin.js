"use strict";

//==== SELECTOR PLUGIN ====//
const $ = function (selector){
    return document.querySelector(selector) 
};

const $all = function (selector){
    return document.querySelectorAll(selector) 
};

//==== CREATE ELEMENT ====//
const createElement = function(tagName, className, textContent){
    const newElement = document.createElement(tagName);
    if(className){
        newElement.setAttribute('class', className);
    }
    if(textContent){
        newElement.innerHTML = textContent;
    }
    return newElement;
};