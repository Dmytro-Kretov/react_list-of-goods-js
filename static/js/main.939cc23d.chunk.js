(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),i=n(8),r=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=function(t){var e=t.good;return Object(u.jsx)("li",{"data-cy":"Good",children:e})},j=function(t){var e=t.goods;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(b,{good:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="alphabet",g="length";var f=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),a=Object(o.a)(s,2),b=a[0],f=a[1],p=function(t,e){var n=e.sortField,c=e.confirmation,s=Object(i.a)(t);return n&&s.sort((function(t,e){switch(n){case h:return t.localeCompare(e);case g:return t.length-e.length;default:return 0}})),c&&s.reverse(),s}(d,{sortField:n,confirmation:b});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-ligth":n!==h}),onClick:function(){c(h)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-success",{"is-ligth":n!==g}),onClick:function(){c(g)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-ligth":!b}),onClick:function(){f(!b)},children:"Reverse"}),(n||b)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),f(!1)},children:"Reset"})]}),Object(u.jsx)(j,{goods:p})]})};s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.939cc23d.chunk.js.map