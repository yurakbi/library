// import $ from '../core';

// $.prototype.setAttribute = function(...attributeNames) {
//     for (let i = 0; i < this.length; i++) {
//         if(!this[i].classList) {
//             continue;
//         }
//         this[i].classList.add(...attributeNames);
//     }

//     return this;
// };

// $.prototype.removeAttribute = function(...attributeNames) {
//     for (let i = 0; i < this.length; i++) {
//         if(!this[i].classList) {
//             continue;
//         }
//         this[i].classList.remove(...attributeNames);
//     }

//     return this;
// };

// $.prototype.getAttribute = function(getAttribute) {
//     for (let i = 0; i < this.length; i++) {
//         if(!this[i].classList) {
//             continue;
//         }
//         this[i].classList.toggle(getAttribute);
//     }

//     return this;
// };