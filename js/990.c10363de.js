"use strict";(self["webpackChunknm_devhomework_ionic"]=self["webpackChunknm_devhomework_ionic"]||[]).push([[990],{8990:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return c}});var r=n(6587),o=n(545),i=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(e,t,n,c,s)=>{const a=e.ownerDocument.defaultView,u=(0,o.i)(e),h=e=>{const t=50,{startX:n}=e;return u?n>=a.innerWidth-t:n<=t},d=e=>u?-e.deltaX:e.deltaX,l=e=>u?-e.velocityX:e.velocityX,k=e=>h(e)&&t(),w=e=>{const t=d(e),n=t/a.innerWidth;c(n)},m=e=>{const t=d(e),n=a.innerWidth,o=t/n,i=l(e),c=n/2,u=i>=0&&(i>.2||t>c),h=u?1-o:o,k=h*n;let w=0;if(k>5){const e=k/Math.abs(i);w=Math.min(e,540)}s(u,o<=0?.01:(0,r.j)(0,o,.9999),w)};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:k,onStart:n,onMove:w,onEnd:m})}}}]);
//# sourceMappingURL=990.c10363de.js.map