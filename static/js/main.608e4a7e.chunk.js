(this["webpackJsonpalvarium-soft-test"]=this["webpackJsonpalvarium-soft-test"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"products":[{"id":0,"name":"Samsung Galaxy S20","price":19999,"image":"1.jpg","description":"Measured diagonally, Galaxy S20 FE 5G\u2019s screen size is 6.5\u201d in the full rectangle and 6.4\u201d with accounting for the rounded corners; Galaxy S20 5G\'s screen size is 6.2\\" in the full rectangle and 6.1\\" with accounting for the rounded corners; Galaxy S20+ 5G\'s screen size is 6.7\\" in the full rectangle and 6.5\\" with accounting for the rounded corners; and Galaxy S20 Ultra 5G\'s screen size is 6.9\\" in the full rectangle and 6.7\\" with accounting for the rounded corners; actual viewable area is less due to the rounded corners and camera hole."},{"id":1,"name":"Apple iPhone 12","price":29999,"image":"2.jpg","description":"The iPhone 12 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. "},{"id":2,"name":"Redmi Note 8 Pro","price":6499,"image":"3.jpg","description":"25 times of pixels of the display. Zoom in for more details."},{"id":3,"name":"SAMSUNG Galaxy A51","price":8199,"image":"4.jpg","description":"How many of us are you looking for a smart phone? Great display, low battery, quick performance of the camera? Todi you can make fun of it - you know the most beautiful version of the Samsung Galaxy A51."},{"id":4,"name":"Apple AirPods Pro","price":8299,"image":"5.jpg","description":"Experience the ultimate comfort of using Apple AirPods Pro with Active Noise Cancellation, selectable earbud sizes, and enhanced immersion."},{"id":5,"name":"Samsung VC07T355MVC","price":2999,"image":"6.jpg","description":"Vacuum cleaner, telescopic tube, nozzle holder, crevice nozzle, wide dust nozzle, narrow dust nozzle"},{"id":6,"name":"Lenovo IdeaPad 3 15IIL","price":15299,"image":"7.jpg","description":"With the very best equipment, the new Lenovo IdeaPad 3 15IIL (81WE00Q2RA) Platinum Gray is ready to give you all-round possibilities. It offers a wide variety of uses, ranging from teaching functions, running work applications, to tons of entertainment."},{"id":7,"name":"Dell Vostro 3591","price":16499,"image":"8.jpg","description":"You are viewing: DELL Vostro 3591 15.6-inch Laptop (10th Gen Core i5-1035G1/16GB/512GB SSD/2GB Nvidia MX230/Window 10 + Microsoft Office), BlackYou are viewing: DELL Vostro 3591 15.6-inch\u2026"},{"id":8,"name":"Defunc True Go Slim TWS Red","price":1199,"image":"9.jpg","description":"Defunc True Go Slim - the wings of Sweden, TWS-headphones, with their unique ergonomic power-saving tabs, broken down to the anatomical features of the wooh, as they sound uncomfortable and sound."},{"id":9,"name":"KARCHER NT 65","price":27999,"image":"10.jpg","description":"For the smart minds of industrial tidying up a 2-motor pilot cleaner for dry cleaning"}]}')},,,,,,,function(e,r,t){},,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},,function(e,r,t){},,,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},,function(e,r,t){"use strict";t.r(r);var c=t(1),n=t.n(c),i=t(7),o=t.n(i),a=(t(18),t(19),t(20),t(0));var s=function(){return Object(a.jsxs)("div",{className:"addProduct",children:[Object(a.jsxs)("div",{className:"addProduct-name",children:[Object(a.jsx)("label",{for:"addProductName",className:"form-label",children:"\u0418\u043c\u044f"}),Object(a.jsx)("input",{type:"text",id:"addProductName",className:"form-control"})]}),Object(a.jsxs)("div",{className:"addProduct-price",children:[Object(a.jsx)("label",{for:"addProductPrice",className:"form-label",children:"\u0426\u0435\u043d\u0430"}),Object(a.jsx)("input",{type:"number",id:"addProductPrice",className:"form-control"})]}),Object(a.jsx)("div",{className:"addProduct-description",children:Object(a.jsx)("textarea",{className:"form-control"})}),Object(a.jsxs)("div",{className:"addProduct-img",children:[Object(a.jsx)("label",{for:"addProductImg",className:"form-label",children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(a.jsx)("input",{type:"file",id:"addProductImg",className:"form-control"})]}),Object(a.jsx)("button",{className:"btn btn-primary",children:"Save"})]})},d="UPDATE-PRICE";t(22);var u=function(e){return Object(a.jsxs)("div",{className:"filter-price",children:[Object(a.jsx)("h3",{children:"\u0426\u0435\u043d\u0430"}),Object(a.jsx)("label",{htmlFor:"priceFrom",className:"form-label",children:"\u043e\u0442:"}),Object(a.jsx)("label",{htmlFor:"priceTo",className:"form-label",children:"\u0434\u043e:"}),Object(a.jsx)("input",{type:"number",id:"priceFrom",className:"form-control",value:e.price.min,onChange:function(r){e.updatePrice(r.target.value,e.price.max)}}),Object(a.jsx)("input",{type:"number",id:"priceTo",className:"form-control",value:e.price.max,onChange:function(r){e.updatePrice(e.price.min,r.target.value)}})]})},l=t(2),p=Object(l.b)((function(e){return{price:e.data.currentPrice}}),(function(e){return{updatePrice:function(r,t){e(function(){return{type:d,min:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,max:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}}(r,t))}}}))(u);t(29),t(30);var m=function(e){return Object(a.jsxs)("div",{className:"filter-currency",children:[Object(a.jsx)("h3",{children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"priceUSD",children:"USD"}),Object(a.jsx)("input",{type:"radio",id:"priceUSD",checked:(r=e.currency,"USD"===r?"checked":""),onChange:function(){return e.chooseCurrency("USD")},className:"form-check-input"}),Object(a.jsx)("input",{type:"radio",id:"priceUAH",checked:function(e){return"UAH"===e?"checked":""}(e.currency),onChange:function(){return e.chooseCurrency("UAH")},className:"form-check-input"}),Object(a.jsx)("label",{htmlFor:"priceUAH",children:"UAH"})]})]});var r},h=Object(l.b)((function(e){return{currency:e.data.currentCurrency}}),(function(e){return{chooseCurrency:function(r){e(function(e){return{type:"CHOOSE-CURRENCY",currency:e}}(r))}}}))(m);t(31);var j=function(e){return Object(a.jsxs)("div",{className:"filter-sorting",children:[Object(a.jsx)("h3",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"sortPriceUp",className:"form-check-input",checked:(r=e.sortingMethod,"sortPriceUp"===r?"checked":""),onChange:function(){return e.chooseFilterMethod("sortPriceUp")}}),Object(a.jsx)("label",{htmlFor:"sortPriceUp",children:"\u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"sortPriceDown",className:"form-check-input",checked:function(e){return"sortPriceDown"===e?"checked":""}(e.sortingMethod),onChange:function(){return e.chooseFilterMethod("sortPriceDown")}}),Object(a.jsx)("label",{htmlFor:"sortPriceDown",children:"\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"sortAlphabet",className:"form-check-input",checked:function(e){return"sortAlphabet"===e?"checked":""}(e.sortingMethod),onChange:function(){return e.chooseFilterMethod("sortAlphabet")}}),Object(a.jsx)("label",{htmlFor:"sortAlphabet",children:"\u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"})]})]});var r},f=Object(l.b)((function(e){return{sortingMethod:e.data.sortingMethod}}),(function(e){return{chooseFilterMethod:function(r){e(function(e){return{type:"CHOOSE-FILTER-METHOD",sortingMethod:e}}(r))}}}))(j);var b=function(){return Object(a.jsxs)("div",{className:"filters",children:[Object(a.jsx)(p,{}),Object(a.jsx)(h,{}),Object(a.jsx)(f,{})]})};t(32);var g=function(e){return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsx)("img",{src:e.img,alt:e.name}),Object(a.jsx)("h2",{children:e.name}),Object(a.jsx)("div",{className:"productPrice",children:e.price+" "+e.currency}),Object(a.jsx)("div",{className:"productDescription",children:e.description})]})};t(12);var O=function(e){var r=1;return"USD"===e.currency&&(r=.036),Object(a.jsx)("div",{className:"products",children:e.products.map((function(t){return Object(a.jsx)(g,{name:t.name,price:Math.ceil(t.price*r),img:t.img,currency:e.currency,description:t.description})}))})},x=Object(l.b)((function(e){return{products:e.data.filteredProducts,currency:e.data.currentCurrency}}),(function(){return{}}))(O);var P=function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(b,{}),Object(a.jsx)(x,{}),Object(a.jsx)(s,{})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(r){var t=r.getCLS,c=r.getFID,n=r.getFCP,i=r.getLCP,o=r.getTTFB;t(e),c(e),n(e),i(e),o(e)}))},y=(t(33),t(4)),w=t(6),N=t(3),S=t(5),C=t.p+"static/media/1.5fbbedd5.jpg",k=t.p+"static/media/2.a7c6a9b0.jpg",D=t.p+"static/media/3.8661ee75.jpg",A=t.p+"static/media/4.a741bbb6.jpg",U=t.p+"static/media/5.e2709996.jpg",M=t.p+"static/media/6.e7c79162.jpg",E=t.p+"static/media/7.0deb21a2.jpg",F=t.p+"static/media/8.f5d96d93.jpg",G=t.p+"static/media/9.c50c4170.jpg",T=t.p+"static/media/10.fa8fb071.jpg",I="UPDATE-PRICE",L="CHOOSE-CURRENCY",H="CHOOSE-FILTER-METHOD",R="ADD-PRODUCT",z=[C,k,D,A,U,M,E,F,G,T],B=0;S.products.map((function(e){e.img=z[B],B++})),S.products.sort((function(e,r){return e.price-r.price}));var V={productsStore:Object(N.a)(S.products),filteredProducts:Object(N.a)(S.products),newProduct:{name:"",price:0,description:"",img:{}},currentPrice:{min:"",max:""},currentCurrency:"UAH",sortingMethod:"sortPriceUp"},W=Object(y.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,r=arguments.length>1?arguments[1]:void 0,t=Object(w.a)(Object(w.a)({},e),{},{productsStore:Object(N.a)(e.productsStore),filteredProducts:Object(N.a)(e.filteredProducts),newProduct:Object(w.a)({},e.newProduct),currentPrice:Object(w.a)({},e.currentPrice)});switch(r.type){case I:t.currentPrice={min:r.min,max:r.max};var c=[];c=r.max?t.productsStore.filter((function(e){return e.price>=t.currentPrice.min&&e.price<=t.currentPrice.max})):t.productsStore.filter((function(e){return e.price>=t.currentPrice.min})),t.filteredProducts=Object(N.a)(c);break;case L:t.currentCurrency=r.currency;break;case H:switch(t.sortingMethod=r.sortingMethod,t.sortingMethod){case"sortPriceUp":t.filteredProducts.sort((function(e,r){return e.price-r.price}));break;case"sortPriceDown":t.filteredProducts.sort((function(e,r){return r.price-e.price}));break;case"sortAlphabet":t.filteredProducts.sort((function(e,r){var t=e.name.toLowerCase(),c=r.name.toLowerCase();return t<c?-1:t>c?1:0}))}break;case R:t.newProduct={id:e.productsStore.length,name:r.name,price:r.price,description:r.description,img:r.img},t.products.push(e.newProduct)}return t}}),Y=Object(y.c)(W),q=Y;window.store=Y,o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(l.a,{store:q,children:Object(a.jsx)(P,{})})}),document.getElementById("root")),v()}],[[34,1,2]]]);
//# sourceMappingURL=main.608e4a7e.chunk.js.map