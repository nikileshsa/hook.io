!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.sortable=t()}(this,function(){"use strict";function e(e,t,n){var r=null;return 0===t?e:function(){var a=n||this,o=arguments;clearTimeout(r),r=setTimeout(function(){e.apply(a,o)},t)}}var t,n,r,a=[],o=[],i=function(e,t,n){return void 0===n?e&&e.h5s&&e.h5s.data&&e.h5s.data[t]:(e.h5s=e.h5s||{},e.h5s.data=e.h5s.data||{},e.h5s.data[t]=n,void 0)},s=function(e){e.h5s&&delete e.h5s.data};switch(!0){case"matches"in window.Element.prototype:r="matches";break;case"mozMatchesSelector"in window.Element.prototype:r="mozMatchesSelector";break;case"msMatchesSelector"in window.Element.prototype:r="msMatchesSelector";break;case"webkitMatchesSelector"in window.Element.prototype:r="webkitMatchesSelector"}var l=function(e,t){if(!t)return Array.prototype.slice.call(e);for(var n=[],a=0;a<e.length;++a)"string"==typeof t&&e[a][r](t)&&n.push(e[a]),t.indexOf(e[a])!==-1&&n.push(e[a]);return n},d=function(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)d(e[r],t,n);else e.addEventListener(t,n),e.h5s=e.h5s||{},e.h5s.events=e.h5s.events||{},e.h5s.events[t]=n},c=function(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)c(e[n],t);else e.h5s&&e.h5s.events&&e.h5s.events[t]&&(e.removeEventListener(t,e.h5s.events[t]),delete e.h5s.events[t])},f=function(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)f(e[r],t,n);else e.setAttribute(t,n)},u=function(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)u(e[n],t);else e.removeAttribute(t)},p=function(e){var t=e.getClientRects()[0];return{left:t.left+window.scrollX,top:t.top+window.scrollY}},h=function(e){c(e,"dragstart"),c(e,"dragend"),c(e,"selectstart"),c(e,"dragover"),c(e,"dragenter"),c(e,"drop")},g=function(e){c(e,"dragover"),c(e,"dragenter"),c(e,"drop")},m=function(e,t){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text",""),e.dataTransfer.setDragImage&&e.dataTransfer.setDragImage(t.draggedItem,t.x,t.y)},v=function(e,t){return t.x||(t.x=parseInt(e.pageX-p(t.draggedItem).left)),t.y||(t.y=parseInt(e.pageY-p(t.draggedItem).top)),t},y=function(e){return{draggedItem:e}},b=function(e,t){var n=y(t);n=v(e,n),m(e,n)},E=function(e){s(e),u(e,"aria-dropeffect")},w=function(e){u(e,"aria-grabbed"),u(e,"draggable"),u(e,"role")},x=function(e,t){return e===t||void 0!==i(e,"connectWith")&&i(e,"connectWith")===i(t,"connectWith")},I=function(e,t){var n,r=[];if(!t)return e;for(var a=0;a<e.length;++a)n=e[a].querySelectorAll(t),r=r.concat(Array.prototype.slice.call(n));return r},S=function(e){var t=i(e,"opts")||{},n=l(e.children,t.items),r=I(n,t.handle);g(e),E(e),c(r,"mousedown"),h(n),w(n)},A=function(e){var t=i(e,"opts"),n=l(e.children,t.items),r=I(n,t.handle);f(e,"aria-dropeffect","move"),f(r,"draggable","true");var a=(document||window.document).createElement("span");"function"!=typeof a.dragDrop||t.disableIEFix||d(r,"mousedown",function(){if(n.indexOf(this)!==-1)this.dragDrop();else{for(var e=this.parentElement;n.indexOf(e)===-1;)e=e.parentElement;e.dragDrop()}})},C=function(e){var t=i(e,"opts"),n=l(e.children,t.items),r=I(n,t.handle);f(e,"aria-dropeffect","none"),f(r,"draggable","false"),c(r,"mousedown")},D=function(e){var t=i(e,"opts"),n=l(e.children,t.items),r=I(n,t.handle);h(n),c(r,"mousedown"),g(e)},M=function(e){return e.parentElement?Array.prototype.indexOf.call(e.parentElement.children,e):0},L=function(e){return!!e.parentNode},O=function(e){if("string"!=typeof e)return e;var t=document.createElement("div");return t.innerHTML=e,t.firstChild},T=function(e,t){e.parentElement.insertBefore(t,e)},W=function(e,t){e.parentElement.insertBefore(t,e.nextElementSibling)},k=function(e){e.parentNode&&e.parentNode.removeChild(e)},N=function(e,t){var n=document.createEvent("Event");return t&&(n.detail=t),n.initEvent(e,!1,!0),n},z=function(e,t){o.forEach(function(n){x(e,n)&&n.dispatchEvent(t)})},P=function(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)},Y=function(r,s){var c=String(s);return s=function(e){var t={connectWith:!1,placeholder:null,dragImage:null,disableIEFix:!1,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,debounce:0};for(var n in e)t[n]=e[n];return t}(s),"string"==typeof r&&(r=document.querySelectorAll(r)),r instanceof window.Element&&(r=[r]),r=Array.prototype.slice.call(r),r.forEach(function(r){if(/enable|disable|destroy/.test(c))return void Y[c](r);s=i(r,"opts")||s,i(r,"opts",s),D(r);var u,h,g=l(r.children,s.items),v=s.placeholder;if(v||(v=document.createElement(/^ul|ol$/i.test(r.tagName)?"li":"div")),v=O(v),v.classList.add.apply(v.classList,s.placeholderClass.split(" ")),!r.getAttribute("data-sortable-id")){var y=o.length;o[y]=r,f(r,"data-sortable-id",y),f(g,"data-item-sortable-id",y)}if(i(r,"items",s.items),a.push(v),s.connectWith&&i(r,"connectWith",s.connectWith),A(r),f(g,"role","option"),f(g,"aria-grabbed","false"),s.hoverClass){var E="sortable-over";"string"==typeof s.hoverClass&&(E=s.hoverClass),d(g,"mouseenter",function(){this.classList.add(E)}),d(g,"mouseleave",function(){this.classList.remove(E)})}d(g,"dragstart",function(e){e.stopImmediatePropagation(),s.handle&&!P(e.target,s.handle)||(s.dragImage?(m(e,{draggedItem:s.dragImage,x:0,y:0}),console.log("WARNING: dragImage option is deprecated and will be removed in the future!")):b(e,this),this.classList.add(s.draggingClass),t=this,f(t,"aria-grabbed","true"),u=M(t),n=parseInt(window.getComputedStyle(t).height),h=this.parentElement,z(r,N("sortstart",{item:t,placeholder:v,startparent:h})))}),d(g,"dragend",function(){var e;t&&(t.classList.remove(s.draggingClass),f(t,"aria-grabbed","false"),t.style.display=t.oldDisplay,delete t.oldDisplay,a.forEach(k),e=this.parentElement,z(r,N("sortstop",{item:t,startparent:h})),u===M(t)&&h===e||z(r,N("sortupdate",{item:t,index:l(e.children,i(e,"items")).indexOf(t),oldindex:g.indexOf(t),elementIndex:M(t),oldElementIndex:u,startparent:h,endparent:e})),t=null,n=null)}),d([r,v],"drop",function(e){var n;x(r,t.parentElement)&&(e.preventDefault(),e.stopPropagation(),n=a.filter(L)[0],W(n,t),t.dispatchEvent(N("dragend")))});var w=e(function(e,r){if(t)if(g.indexOf(e)!==-1){var o=parseInt(window.getComputedStyle(e).height),i=M(v),d=M(e);if(s.forcePlaceholderSize&&(v.style.height=n+"px"),o>n){var c=o-n,f=p(e).top;if(i<d&&r<f+c)return;if(i>d&&r>f+o-c)return}void 0===t.oldDisplay&&(t.oldDisplay=t.style.display),t.style.display="none",i<d?W(e,v):T(e,v),a.filter(function(e){return e!==v}).forEach(k)}else a.indexOf(e)!==-1||l(e.children,s.items).length||(a.forEach(k),e.appendChild(v))},s.debounce),I=function(e){x(r,t.parentElement)&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="move",w(this,e.pageY))};d(g.concat(r),"dragover",I),d(g.concat(r),"dragenter",I)}),r};return Y.destroy=function(e){S(e)},Y.enable=function(e){A(e)},Y.disable=function(e){C(e)},Y});
//# sourceMappingURL=html.sortable.min.js.map