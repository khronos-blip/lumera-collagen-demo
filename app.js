(() => {
'use strict';
const products={
'edition-15':{id:'edition-15',name:'The Prelude',note:'1 compact jar · 15 servings',price:32,image:'assets/prelude-640.webp'},
'edition-30':{id:'edition-30',name:'The Full Light',note:'1 jar · 30 servings + ribbed glass',price:58,image:'assets/full-light-640.webp'},
'edition-90':{id:'edition-90',name:'The Season',note:'3 jars · 90 servings total',price:148,image:'assets/season-640.webp'}
};
const cart=createDemoCart({overlay:'#overlay',trigger:'#openCart',list:'#cartItems',total:'#subtotal',badge:'#cartCount',currency:'EUR',noun:'bag',openClass:'open',overlayClass:'active',bodyClass:'cart-open'});
document.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>cart.add(products[b.dataset.add])));
})();
