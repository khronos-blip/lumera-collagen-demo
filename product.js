(() => {
  const editions = {
    '15': {name:'The Prelude',tag:'15 servings / Compact jar',title:'The<br><em>Prelude.</em>',lead:'A first taste of Citrus Glow.',description:'The compact jar holds 15 servings in the same Citrus Glow formula.',format:'15-serving compact jar',price:'€32',image:'lumera-prelude',size:1122,alt:'LUMERA compact jar held in one hand'},
    '30': {name:'The Full Light',tag:'30 servings / Jar + glass',title:'The Full<br><em>Light.</em>',lead:'The complete Citrus Glow morning ritual.',description:'A 30-serving jar paired with a ribbed glass for a considered daily start.',format:'30-serving jar + glass',price:'€58',image:'full-light',size:1254,alt:'LUMERA jar and ribbed glass'},
    '90': {name:'The Season',tag:'90 servings / Three jars',title:'The<br><em>Season.</em>',lead:'A longer routine, beautifully gathered.',description:'Three jars of Citrus Glow, presented together for 90 servings total.',format:'3 jars / 90 servings',price:'€148',image:'season',size:1254,alt:'Three LUMERA jars in a green presentation box'}
  };
  const key=new URLSearchParams(location.search).get('edition');
  const selected=Object.hasOwn(editions,key)?key:'30';
  const edition=editions[selected];
  document.title=edition.name+' — LUMERA';
  document.getElementById('product-tag').textContent=edition.tag;
  document.getElementById('product-title').innerHTML=edition.title;
  document.getElementById('product-lead').textContent=edition.lead;
  document.getElementById('product-description').textContent=edition.description;
  document.getElementById('product-format').textContent=edition.format;
  document.getElementById('product-price').textContent=edition.price;
  const img=document.getElementById('product-image');
  img.src='assets/'+edition.image+'.webp';
  img.srcset='assets/'+edition.image+'-640.webp 640w, assets/'+edition.image+'.webp '+edition.size+'w';
  img.sizes='(max-width:780px) 100vw, 52vw';
  img.alt=edition.alt;
  const add=document.getElementById('product-add');
  add.href='index.html?add=edition-'+selected+'#editions';
  add.textContent='Add to bag · '+edition.price+' ↗';
  document.querySelector('[data-related="'+selected+'"]').setAttribute('aria-current','page');
  setDetailProduct({id:'edition-'+selected,name:edition.name,note:edition.format,price:Number(edition.price.replace('€','')),image:'assets/'+edition.image+'-640.webp'});
})();
