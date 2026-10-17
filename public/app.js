(() => {
  const base = new URL('./', location.href);
  const asset = path => new URL(String(path || '').replace(/^\/+/, ''), base).href;
  const portal = 'https://innova-boutique.com';
  if(window.parent===window && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname)){
    location.replace(`${portal}/jisco/${location.hash}`);
    return;
  }
  const copy = {
    es:{back:'← Volver a Innova Boutique',distribution:'Distribución profesional para Centroamérica y Latinoamérica',home:'Inicio',catalog:'Catálogo',story:'La marca',language:'Idioma',myOrder:'Mi selección ↗',heroTitle:'Una mirada nacida del Mediterráneo.',heroBody:'Color, diseño y carácter en una colección profesional para ópticas. Explora cada forma y cada acabado sin perder de vista su origen.',explore:'Explorar catálogo ↗',imageBy:'Imagen original © JISCO Eyewear',videoBy:'Vídeo original © JISCO Eyewear',selectedTitle:'EXPLORA A TU MANERA',featuresTitle:'Forma, materia y color.',optical:'Óptica',sun:'Sol',materials:'Materiales',seeModels:'Ver modelos ↗',campaignTitle:'Una colección que mira hacia el mar.',campaignBody:'La imagen y el movimiento de JISCO acompañan un catálogo pensado para elegir con precisión cada referencia.',knowBrand:'Conocer la marca ↗',ctaTitle:'Encuentra la referencia que completa tu selección.',viewAll:'Ver todos los modelos ↗',catalogTitle:'Todas las formas de mirar.',catalogIntro:'Explora modelos, materiales y acabados. Disponibilidad y condiciones sujetas a confirmación comercial de Innova.',filters:'Filtros',clear:'Limpiar',category:'Categoría',all:'Todas',material:'Material',style:'Estilo',size:'Talla',color:'Color',newness:'Novedades',search:'Buscar modelo o referencia',noResults:'No encontramos modelos con esos filtros.',storyTitle:'Diseño con alma mediterránea.',storyBody:'JISCO presenta una mirada ligada al color, al diseño y a la vida mediterránea. Consulta los materiales y las referencias originales en su catálogo profesional.',storyMaterials:'Materia y expresión.',storyMaterialsBody:'Acetato, titanio, metal y otras familias de la colección oficial se presentan con sus medidas y variantes verificables.',ownership:'JISCO y todo su material audiovisual pertenecen a JISCO Eyewear.',press:'Prensa JISCO ↗',models:'modelos',variants:'acabados',front:'Frontal',side:'Lateral',quantity:'Cantidad',add:'Añadir a mi selección',added:'Referencia añadida a la selección de Innova.',availability:'Disponibilidad y condiciones sujetas a confirmación comercial de Innova Eyewear.',measures:'Medidas de esta referencia',previous:'← Modelo anterior',next:'Modelo siguiente →',viewCatalog:'← Volver al catálogo',noImage:'Imagen no disponible',loading:'Cargando catálogo…'},
    en:{back:'← Back to Innova Boutique',distribution:'Professional distribution for Central America and Latin America',home:'Home',catalog:'Catalogue',story:'The brand',language:'Language',myOrder:'My selection ↗',heroTitle:'A perspective born in the Mediterranean.',heroBody:'Colour, design and character in a professional eyewear collection. Explore every shape and finish while staying close to its origins.',explore:'Explore catalogue ↗',imageBy:'Original image © JISCO Eyewear',videoBy:'Original video © JISCO Eyewear',selectedTitle:'EXPLORE YOUR WAY',featuresTitle:'Shape, material and colour.',optical:'Optical',sun:'Sun',materials:'Materials',seeModels:'View models ↗',campaignTitle:'A collection looking towards the sea.',campaignBody:'JISCO imagery and motion accompany a catalogue made to select each reference with precision.',knowBrand:'Discover the brand ↗',ctaTitle:'Find the reference that completes your selection.',viewAll:'View all models ↗',catalogTitle:'Every way of seeing.',catalogIntro:'Explore models, materials and finishes. Availability and terms are subject to Innova commercial confirmation.',filters:'Filters',clear:'Clear',category:'Category',all:'All',material:'Material',style:'Style',size:'Size',color:'Colour',newness:'New arrivals',search:'Search model or reference',noResults:'No models match these filters.',storyTitle:'Design with a Mediterranean soul.',storyBody:'JISCO presents an approach rooted in colour, design and Mediterranean life. Explore original materials and references in this professional catalogue.',storyMaterials:'Material and expression.',storyMaterialsBody:'Acetate, titanium, metal and other official collection families are presented with verifiable measurements and variants.',ownership:'JISCO and all its audiovisual materials belong to JISCO Eyewear.',press:'JISCO press ↗',models:'models',variants:'finishes',front:'Front',side:'Side',quantity:'Quantity',add:'Add to my selection',added:'Reference added to your Innova selection.',availability:'Availability and terms are subject to Innova Eyewear commercial confirmation.',measures:'Reference measurements',previous:'← Previous model',next:'Next model →',viewCatalog:'← Back to catalogue',noImage:'Image unavailable',loading:'Loading catalogue…'},
    fr:{back:'← Retour à Innova Boutique',distribution:'Distribution professionnelle pour l’Amérique centrale et latine',home:'Accueil',catalog:'Catalogue',story:'La marque',language:'Langue',myOrder:'Ma sélection ↗',heroTitle:'Un regard né de la Méditerranée.',heroBody:'Couleur, design et caractère dans une collection professionnelle de lunettes. Explorez chaque forme et chaque finition.',explore:'Explorer le catalogue ↗',imageBy:'Image originale © JISCO Eyewear',videoBy:'Vidéo originale © JISCO Eyewear',selectedTitle:'EXPLOREZ À VOTRE FAÇON',featuresTitle:'Forme, matière et couleur.',optical:'Optique',sun:'Solaire',materials:'Matériaux',seeModels:'Voir les modèles ↗',campaignTitle:'Une collection tournée vers la mer.',campaignBody:'Les images et le mouvement de JISCO accompagnent un catalogue conçu pour choisir chaque référence avec précision.',knowBrand:'Découvrir la marque ↗',ctaTitle:'Trouvez la référence qui complète votre sélection.',viewAll:'Voir tous les modèles ↗',catalogTitle:'Toutes les façons de voir.',catalogIntro:'Explorez modèles, matériaux et finitions. Disponibilité et conditions sous réserve de confirmation commerciale par Innova.',filters:'Filtres',clear:'Effacer',category:'Catégorie',all:'Tous',material:'Matériau',style:'Style',size:'Taille',color:'Couleur',newness:'Nouveautés',search:'Rechercher un modèle ou une référence',noResults:'Aucun modèle ne correspond à ces filtres.',storyTitle:'Un design à l’âme méditerranéenne.',storyBody:'JISCO présente une vision liée à la couleur, au design et à la vie méditerranéenne. Retrouvez les matériaux et références d’origine.',storyMaterials:'Matière et expression.',storyMaterialsBody:'Acétate, titane, métal et autres familles officielles sont présentés avec leurs mesures et variantes vérifiables.',ownership:'JISCO et tous ses contenus audiovisuels appartiennent à JISCO Eyewear.',press:'Presse JISCO ↗',models:'modèles',variants:'finitions',front:'Face',side:'Profil',quantity:'Quantité',add:'Ajouter à ma sélection',added:'Référence ajoutée à votre sélection Innova.',availability:'Disponibilité et conditions sous réserve de confirmation commerciale par Innova Eyewear.',measures:'Mesures de cette référence',previous:'← Modèle précédent',next:'Modèle suivant →',viewCatalog:'← Retour au catalogue',noImage:'Image indisponible',loading:'Chargement du catalogue…'}
  };
  Object.assign(copy.es,{skip:'Ir al contenido',official:'JISCO oficial ↗'});
  Object.assign(copy.en,{skip:'Skip to content',official:'Official JISCO site ↗'});
  Object.assign(copy.fr,{skip:'Aller au contenu',official:'Site officiel JISCO ↗'});
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let lang = localStorage.getItem('jisco-lang') || 'es';
  if (!copy[lang]) lang = 'es';
  let catalog = [];
  let activeProduct = null;
  let activeVariant = null;
  let activeView = 'front';
  const t = key => copy[lang][key] || copy.es[key] || key;
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const variantImage = (variant, view='front') => asset(variant?.[`${view}_path`] || variant?.[`${view}_url`] || variant?.front_path || variant?.front_url || 'assets/images/materiales/big/logo-jisco-2024.png');
  const credit = () => `<figcaption class="credit"><img src="${asset('assets/images/materiales/big/logo-jisco-2024.png')}" alt="Logo JISCO"><span>${esc(t('imageBy'))}</span></figcaption>`;
  const slug = model => model.slug || model.name.toLowerCase().replace(/[^a-z0-9]+/g,'-');

  function setLanguage(next){
    lang=copy[next]?next:'es'; localStorage.setItem('jisco-lang',lang); document.documentElement.lang=lang;
    $$('#language').forEach(el=>el.value=lang);
    $$('[data-t]').forEach(el=>{el.textContent=t(el.dataset.t)});
    $('#searchInput').placeholder=t('search');$('#language').setAttribute('aria-label',t('language'));
    renderRoute();
  }
  function option(select,value,label){const el=document.createElement('option');el.value=value;el.textContent=label;select.append(el)}
  function populateFilters(){
    const materials=[...new Set(catalog.flatMap(m=>m.materials||[]))].filter(Boolean).sort();
    const styles=[...new Set(catalog.map(m=>m.style))].filter(Boolean).sort();
    const sizes=[...new Set(catalog.map(m=>m.size))].filter(Boolean).sort();
    const colors=[...new Set(catalog.flatMap(m=>m.variants.flatMap(v=>v.color_name.split(',').map(x=>x.trim()))))].filter(Boolean).sort();
    for(const value of materials)option($('#materialFilter'),value,value);
    for(const value of styles)option($('#styleFilter'),value,value);
    for(const value of sizes)option($('#sizeFilter'),value,value);
    for(const value of colors)option($('#colorFilter'),value,value);
  }
  function getFilters(){return {q:$('#searchInput').value.trim().toLocaleLowerCase(),category:$('#categoryFilter').value,material:$('#materialFilter').value,style:$('#styleFilter').value,size:$('#sizeFilter').value,color:$('#colorFilter').value,newOnly:$('#newFilter').checked}}
  function visibleModels(){
    const f=getFilters();
    return catalog.filter(m=>{
      if(f.category&&m.category!==f.category)return false;
      if(f.material&&!(m.materials||[]).includes(f.material))return false;
      if(f.style&&m.style!==f.style)return false;
      if(f.size&&m.size!==f.size)return false;
      if(f.newOnly&&m.season_id!=='298')return false;
      if(f.color&&!m.variants.some(v=>v.color_name.split(',').map(s=>s.trim()).includes(f.color)))return false;
      if(f.q&&!([m.name,...m.variants.flatMap(v=>[v.sku,v.color_name])].join(' ').toLocaleLowerCase().includes(f.q)))return false;
      return true;
    });
  }
  function renderCatalog(){
    const models=visibleModels();
    $('#resultCount').textContent=`${models.length} ${t('models')}`;
    $('#emptyResults').hidden=models.length>0;
    $('#modelGrid').innerHTML=models.map(m=>{
      const v=m.variants.find(x=>x.front_path)||m.variants[0];
      return `<a class="model-card" href="#/modelo/${encodeURIComponent(slug(m))}/${encodeURIComponent(v.source_id)}"><figure><img src="${esc(variantImage(v))}" alt="${esc(m.name)} · ${esc(v.color_name)}" loading="lazy">${credit()}</figure><div class="model-card__body"><strong class="model-card__title">${esc(m.name)}</strong><span class="model-card__meta">${esc(m.category==='sun'?t('sun'):t('optical'))}<br>${m.variants.length} ${t('variants')}</span></div></a>`;
    }).join('');
  }
  function renderProduct(model,chosen){
    activeProduct=model;activeVariant=chosen||model.variants[0];activeView='front';
    const index=catalog.indexOf(model);
    const material=(activeVariant.materials||model.materials||[]).join(' · ');
    const measures=Object.entries(activeVariant.measurements||{}).map(([k,v])=>`<div><strong>${esc(k)}</strong><span>${esc(v)}</span></div>`).join('');
    const hasSide=Boolean(activeVariant.side_path||activeVariant.side_url);
    $('#productContent').innerHTML=`<a class="product-back" href="#/catalogo">${t('viewCatalog')}</a><div class="product-main"><div><figure class="product-image"><img id="mainProductImage" src="${esc(variantImage(activeVariant))}" alt="${esc(model.name+' '+activeVariant.color_name+', '+t('front'))}">${credit()}</figure><div class="view-tabs"><button type="button" data-view-image="front" aria-pressed="true">${t('front')}</button>${hasSide?`<button type="button" data-view-image="side" aria-pressed="false">${t('side')}</button>`:''}</div></div><div class="product-info"><span class="eyebrow">JISCO · ${model.category==='sun'?t('sun'):t('optical')}</span><h1>${esc(model.name)}</h1><span class="sku">${esc(activeVariant.sku)}</span><p>${esc(material)}${model.style?' · '+esc(model.style):''}${model.size?' · '+esc(model.size):''}</p><div class="colors" role="group" aria-label="${esc(t('color'))}">${model.variants.map(v=>`<button type="button" data-variant="${esc(v.source_id)}" aria-pressed="${v.source_id===activeVariant.source_id}"><img src="${esc(variantImage(v))}" alt="" loading="lazy"><span>${esc(v.color_name||v.path.split('/').pop())}</span></button>`).join('')}</div><h2 class="eyebrow">${t('measures')}</h2><div class="measurements">${measures}</div><div class="purchase"><label>${t('quantity')} <input id="quantity" type="number" min="1" max="999" value="1" inputmode="numeric"></label><button class="button" id="addOrder" type="button">${t('add')} ↗</button><p>${t('availability')}</p></div></div></div><nav class="product-nav"><a href="#/modelo/${encodeURIComponent(slug(catalog[(index-1+catalog.length)%catalog.length]))}">${t('previous')}</a><a href="#/modelo/${encodeURIComponent(slug(catalog[(index+1)%catalog.length]))}">${t('next')}</a></nav>`;
    $$('[data-variant]').forEach(button=>button.addEventListener('click',()=>{
      const v=model.variants.find(item=>item.source_id===button.dataset.variant);
      if(v)location.hash=`#/modelo/${encodeURIComponent(slug(model))}/${encodeURIComponent(v.source_id)}`;
    }));
    $$('[data-view-image]').forEach(button=>button.addEventListener('click',()=>{
      activeView=button.dataset.viewImage;
      $('#mainProductImage').src=variantImage(activeVariant,activeView);
      $('#mainProductImage').alt=`${model.name} ${activeVariant.color_name}, ${t(activeView)}`;
      $$('[data-view-image]').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
    }));
    $('#addOrder').addEventListener('click',addOrder);
  }
  function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),3500)}
  function addOrder(){
    if(!activeProduct||!activeVariant)return;
    const quantity=Math.max(1,Math.min(999,Number($('#quantity').value)||1));
    const item={brand:'jisco',productId:activeProduct.source_id,model:activeProduct.name,name:activeProduct.name,sku:activeVariant.sku,color:activeVariant.color_name,quantity,key:`jisco:${activeVariant.source_id}`,image:variantImage(activeVariant),material:(activeVariant.materials||[]).join(' · '),measurements:Object.entries(activeVariant.measurements||{}).map(([k,v])=>`${k}: ${v}`).join(' · '),sourceUrl:activeVariant.source_url};
    if(window.parent!==window){window.parent.postMessage({type:'innova-boutique:add-item',item},portal)}
    else {
      const key='innova-boutique-order-v1';
      let order;try{order=JSON.parse(localStorage.getItem(key)||'null')}catch{}
      if(!order||!Array.isArray(order.items))order={items:[],client:{}};
      const existing=order.items.find(x=>x.key===item.key);
      if(existing)existing.quantity+=quantity;else order.items.push(item);
      localStorage.setItem(key,JSON.stringify(order));
    }
    toast(t('added'));
  }
  function renderVideos(){
    const videos=['assets/materiales/marea/Marea_video_2.mp4','assets/materiales/marea/Marea_video_3.mp4','assets/materiales/marea/Marea_video_4.mp4','assets/materiales/marea/Marea_video_5.mp4','assets/videos_25/LightUP_video.mp4','assets/videos_25/JiscothequeGlowFestival_Video001.mp4'];
    $('#videoGallery').innerHTML=videos.map(path=>`<figure><video controls preload="metadata" aria-label="${esc(t('videoBy'))}"><source src="${asset(path)}" type="video/mp4"></video><figcaption class="credit"><img src="${asset('assets/images/materiales/big/logo-jisco-2024.png')}" alt="Logo JISCO"><span>${esc(t('videoBy'))}</span></figcaption></figure>`).join('')+`<figure><iframe title="${esc(t('videoBy'))}" src="https://player.vimeo.com/video/1193530892?title=0&byline=0&portrait=0" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption class="credit"><img src="${asset('assets/images/materiales/big/logo-jisco-2024.png')}" alt="Logo JISCO"><span>${esc(t('videoBy'))} · Vimeo JISCO</span></figcaption></figure>`;
  }
  function renderRoute(){
    const route=decodeURIComponent(location.hash.replace(/^#/,'')||'/');
    const [path,query='']=route.split('?');
    const section=path.startsWith('/catalogo')?'catalog':path.startsWith('/modelo/')?'product':path.startsWith('/historia')?'story':'home';
    $$('[data-view]').forEach(el=>el.hidden=el.dataset.view!==section);
    if(section==='catalog'){
      if(query){const params=new URLSearchParams(query);for(const [key,id] of [['category','categoryFilter'],['material','materialFilter']])if(params.has(key))$('#'+id).value=params.get(key)}
      renderCatalog();
    }
    if(section==='product'){
      const [, , modelSlug, variantId]=path.split('/');
      const model=catalog.find(m=>slug(m)===modelSlug);
      if(model)renderProduct(model,model.variants.find(v=>v.source_id===variantId));else location.hash='#/catalogo';
    }
    if(section==='story')renderVideos();
    if(window.parent!==window)window.parent.postMessage({type:'innova-brand-route',brand:'jisco',route},portal);
    window.scrollTo({top:0,behavior:'auto'});
  }
  function bind(){
    $('#language').addEventListener('change',event=>setLanguage(event.target.value));
    ['searchInput','categoryFilter','materialFilter','styleFilter','sizeFilter','colorFilter','newFilter'].forEach(id=>$('#'+id).addEventListener(id==='searchInput'?'input':'change',renderCatalog));
    $('#clearFilters').addEventListener('click',()=>{$('#searchInput').value='';['categoryFilter','materialFilter','styleFilter','sizeFilter','colorFilter'].forEach(id=>$('#'+id).value='');$('#newFilter').checked=false;renderCatalog()});
    $('#toggleFilters').addEventListener('click',()=>{const open=$('#filterPanel').classList.toggle('open');$('#toggleFilters').setAttribute('aria-expanded',String(open))});
    window.addEventListener('hashchange',renderRoute);
  }
  async function start(){
    bind();
    lang=copy[lang]?lang:'es';document.documentElement.lang=lang;$('#language').value=lang;
    $$('[data-t]').forEach(el=>{el.textContent=t(el.dataset.t)});$('#searchInput').placeholder=t('search');$('#language').setAttribute('aria-label',t('language'));
    $('#resultCount').textContent=t('loading');
    try{
      const response=await fetch(asset('data/catalog.json'));
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const data=await response.json();catalog=data.models||[];
      populateFilters();renderRoute();
    }catch(error){$('#resultCount').textContent='Error al cargar el catálogo';console.error(error)}
  }
  start();
})();
