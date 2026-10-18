(() => {
  const base = new URL('./', location.href);
  const asset = path => new URL(String(path || '').replace(/^\/+/, ''), base).href;
  const portal = 'https://innova-boutique.com';
  const parentOrigin = (()=>{try{const ref=new URL(document.referrer);return /^(localhost|127\.0\.0\.1)$/.test(ref.hostname)?ref.origin:portal}catch{return portal}})();
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
  Object.assign(copy.es,{valueOriginTitle:'Dos miradas, una identidad.',valueOriginBody:'La sensibilidad mediterránea de Francisco y la precisión de Jördis definen el carácter de JISCO.',officialHistory:'Historia oficial ↗',valueMaterialTitle:'Calidad en cada acabado.',valueMaterialBody:'JISCO selecciona acetatos, metales y otras familias de materiales mediante proveedores especializados.',officialMaterials:'Calidad y materiales ↗',valueSustainTitle:'Compromiso con el Mediterráneo.',valueSustainBody:'La marca explica sus decisiones sobre materiales, embalaje y logística en su programa de sostenibilidad.',officialSustain:'Sostenibilidad ↗',viewModels:'Ver modelos ↓',productPhotoBy:'Fotografías de producto © JISCO Eyewear.',historyTitle:'Corazón mediterráneo. Mente precisa.',historyOrigin:'JISCO nace de la unión de Francisco Marín, mallorquín inspirado por la luz y el color del Mediterráneo, y Jördis Neubauer, alemana que aporta precisión y atención al detalle.',historyCraft:'Esa combinación se expresa en monturas elaboradas artesanalmente, con materiales seleccionados y una identidad de color ligada a su origen.',mareaDescription:'MARÉA explora el encuentro entre la piel y el mar mediante luz, color y movimiento. Las imágenes y películas son originales de JISCO.',lightupDescription:'LIGHT UP muestra el carácter expresivo de las monturas JISCO a través de una campaña de color y luz.',jiscothequeDescription:'JISCOTHEQUE GLOW FESTIVAL reúne monturas y una narrativa visual marcada por el brillo y el color.',additionalFilm:'Otra mirada JISCO',additionalFilmDescription:'Una película adicional de la marca, presentada en su formato original.'});
  Object.assign(copy.en,{valueOriginTitle:'Two perspectives, one identity.',valueOriginBody:'Francisco’s Mediterranean sensibility and Jördis’s precision shape the character of JISCO.',officialHistory:'Official story ↗',valueMaterialTitle:'Quality in every finish.',valueMaterialBody:'JISCO selects acetates, metals and other material families through specialised suppliers.',officialMaterials:'Quality and materials ↗',valueSustainTitle:'Committed to the Mediterranean.',valueSustainBody:'The brand explains its material, packaging and logistics choices in its sustainability programme.',officialSustain:'Sustainability ↗',viewModels:'View models ↓',productPhotoBy:'Product photography © JISCO Eyewear.',historyTitle:'Mediterranean heart. Precise mind.',historyOrigin:'JISCO brings together Francisco Marín, from Majorca and inspired by Mediterranean light and colour, and Jördis Neubauer, from Germany, whose approach is precise and attentive to detail.',historyCraft:'That meeting takes shape in handcrafted frames, selected materials and colours rooted in their place of origin.',mareaDescription:'MARÉA explores where skin meets the sea through light, colour and movement. Original JISCO imagery and films.',lightupDescription:'LIGHT UP presents the expressive character of JISCO frames in a campaign of colour and light.',jiscothequeDescription:'JISCOTHEQUE GLOW FESTIVAL brings together frames and a visual story of glow and colour.',additionalFilm:'Another JISCO perspective',additionalFilmDescription:'An additional brand film shown in its original form.'});
  Object.assign(copy.fr,{valueOriginTitle:'Deux regards, une identité.',valueOriginBody:'La sensibilité méditerranéenne de Francisco et la précision de Jördis définissent le caractère de JISCO.',officialHistory:'Histoire officielle ↗',valueMaterialTitle:'La qualité dans chaque finition.',valueMaterialBody:'JISCO sélectionne acétates, métaux et autres familles de matériaux auprès de fournisseurs spécialisés.',officialMaterials:'Qualité et matériaux ↗',valueSustainTitle:'Un engagement méditerranéen.',valueSustainBody:'La marque explique ses choix de matériaux, emballage et logistique dans son programme de durabilité.',officialSustain:'Durabilité ↗',viewModels:'Voir les modèles ↓',productPhotoBy:'Photographies des produits © JISCO Eyewear.',historyTitle:'Cœur méditerranéen. Esprit de précision.',historyOrigin:'JISCO unit Francisco Marín, originaire de Majorque et inspiré par la lumière et les couleurs méditerranéennes, et Jördis Neubauer, allemande, attentive à la précision et aux détails.',historyCraft:'Cette rencontre prend forme dans des montures artisanales, des matériaux sélectionnés et des couleurs liées à leur origine.',mareaDescription:'MARÉA explore la rencontre entre la peau et la mer par la lumière, la couleur et le mouvement. Images et films originaux JISCO.',lightupDescription:'LIGHT UP révèle le caractère expressif des montures JISCO dans une campagne de lumière et de couleur.',jiscothequeDescription:'JISCOTHEQUE GLOW FESTIVAL réunit les montures dans un univers de lumière et de couleur.',additionalFilm:'Un autre regard JISCO',additionalFilmDescription:'Un film supplémentaire de la marque présenté dans son format original.'});
  Object.assign(copy.es,{relatedTitle:'Explora otros modelos',relatedIntro:'Tres monturas a la vista. Desliza para recorrer el catálogo completo sin salir de esta ficha.',technicalTitle:'Detalles de la referencia',finishLabel:'Acabados',frameLabel:'Tipo de montura',sizeLabel:'Talla',styleLabel:'Estilo',materialLabel:'Material',colorsLabel:'Colores',sourceDetails:'Datos de la ficha oficial JISCO',collectionModels:'Modelos para explorar',allCollectionModels:'Explorar catálogo completo ↗',filmMoments:'Otros momentos de MARÉA',filmMomentsBody:'Cuatro escenas originales de la campaña, reunidas en una sola cinta visual.',editorialModelsNote:'Las películas presentan el universo visual de JISCO; las referencias se agrupan según los datos del catálogo oficial.'});
  Object.assign(copy.en,{relatedTitle:'Explore other models',relatedIntro:'Three frames in view. Scroll through the full catalogue without leaving this product page.',technicalTitle:'Reference details',finishLabel:'Finishes',frameLabel:'Frame type',sizeLabel:'Size',styleLabel:'Style',materialLabel:'Material',colorsLabel:'Colours',sourceDetails:'Details from the official JISCO product page',collectionModels:'Models to explore',allCollectionModels:'Explore full catalogue ↗',filmMoments:'More MARÉA moments',filmMomentsBody:'Four original scenes from the campaign, brought together in one visual strip.',editorialModelsNote:'The films present JISCO’s visual universe; references are grouped using official catalogue data.'});
  Object.assign(copy.fr,{relatedTitle:'Découvrez d’autres modèles',relatedIntro:'Trois montures visibles. Faites défiler tout le catalogue sans quitter cette fiche.',technicalTitle:'Détails de la référence',finishLabel:'Finitions',frameLabel:'Type de monture',sizeLabel:'Taille',styleLabel:'Style',materialLabel:'Matériau',colorsLabel:'Couleurs',sourceDetails:'Données de la fiche produit officielle JISCO',collectionModels:'Modèles à découvrir',allCollectionModels:'Explorer le catalogue complet ↗',filmMoments:'Autres moments MARÉA',filmMomentsBody:'Quatre scènes originales de la campagne réunies dans une seule bande visuelle.',editorialModelsNote:'Les films présentent l’univers visuel de JISCO ; les références sont regroupées selon les données du catalogue officiel.'});
  copy.es.newBadge='NUEVO';copy.en.newBadge='NEW';copy.fr.newBadge='NOUVEAU';
  Object.assign(copy.es,{filmModel:'Explorar modelo',featuredModel:'Modelo destacado del catálogo',openFullProduct:'Ver ficha completa ↗',closeProduct:'Cerrar ficha',modelShown:'Modelo sugerido para explorar esta selección; la película presenta la campaña de JISCO.'});
  Object.assign(copy.en,{filmModel:'Explore frame',featuredModel:'Featured catalogue frame',openFullProduct:'View full product ↗',closeProduct:'Close product',modelShown:'A suggested frame from this selection; the film presents the JISCO campaign.'});
  Object.assign(copy.fr,{filmModel:'Découvrir le modèle',featuredModel:'Modèle du catalogue',openFullProduct:'Voir la fiche complète ↗',closeProduct:'Fermer la fiche',modelShown:'Une monture suggérée dans cette sélection ; le film présente la campagne JISCO.'});
  Object.assign(copy.es,{miniContext:'Distribución profesional · JISCO',brandsMenu:'Marcas',globalOrder:'Pedido global',oneSelection:'Una selección para las cuatro firmas.',globalTerms:'Disponibilidad y condiciones sujetas a confirmación de Innova. JISCO no tiene un mínimo configurado.',openSelection:'Abrir selección →'});
  Object.assign(copy.en,{miniContext:'Professional distribution · JISCO',brandsMenu:'Brands',globalOrder:'Multi-brand selection',oneSelection:'One selection for all four brands.',globalTerms:'Availability and terms are subject to Innova confirmation. JISCO has no configured minimum.',openSelection:'Open selection →'});
  Object.assign(copy.fr,{miniContext:'Distribution professionnelle · JISCO',brandsMenu:'Marques',globalOrder:'Sélection multimarque',oneSelection:'Une sélection commune aux quatre marques.',globalTerms:'Disponibilité et conditions sous réserve de confirmation par Innova. Aucun minimum n’est configuré pour JISCO.',openSelection:'Ouvrir la sélection →'});
  copy.es.viewFullCatalog='Ver catálogo completo';
  copy.en.viewFullCatalog='View full catalogue';
  copy.fr.viewFullCatalog='Voir tout le catalogue';
  copy.es.moreCollectionModels='Más modelos de';
  copy.en.moreCollectionModels='More models from';
  copy.fr.moreCollectionModels='Plus de modèles de';
  Object.assign(copy.es,{sunglasses:'Gafas de sol',newModels:'Modelos nuevos',aboutEyebrow:'LA MARCA / NOSOTROS',aboutTitle:'Sobre nosotros',aboutLead:'JISCO reúne dos formas de mirar: la sensibilidad mediterránea de Francisco Marín y la precisión centroeuropea de Jördis Neubauer.',aboutDetail:'La marca describe monturas creadas artesanalmente con materiales elegidos con cuidado. La luz, los colores y las formas del Mediterráneo encuentran equilibrio con una atención rigurosa a cada detalle.',aboutSource:'Conocer la historia en JISCO ↗',sustainEyebrow:'LA MARCA / COMPROMISO',sustainTitle:'Sostenibilidad',sustainLead:'JISCO vincula sus decisiones de diseño con el cuidado del Mediterráneo que inspira sus colecciones.',sustainMaterial:'En sus materiales, la marca destaca el bioacetato y las lentes de demostración biodegradables.',sustainPackaging:'Para el embalaje, describe fundas de tejido reciclado RPET, bolsas protectoras compostables y estuches planos.',sustainLogistics:'En logística, indica que utiliza cajas reciclables o reutilizadas y cinta de papel.',sustainSource:'Leer los compromisos de JISCO ↗'});
  Object.assign(copy.en,{sunglasses:'Sunglasses',newModels:'New models',aboutEyebrow:'THE BRAND / ABOUT US',aboutTitle:'About us',aboutLead:'JISCO brings together two perspectives: Francisco Marín’s Mediterranean sensibility and Jördis Neubauer’s Central European precision.',aboutDetail:'The brand describes handcrafted frames made with carefully selected materials. Mediterranean light, colours and shapes are balanced with close attention to every detail.',aboutSource:'Explore JISCO’s story ↗',sustainEyebrow:'THE BRAND / COMMITMENT',sustainTitle:'Sustainability',sustainLead:'JISCO links its design decisions to care for the Mediterranean that inspires its collections.',sustainMaterial:'For materials, the brand highlights bio-acetate and biodegradable demonstration lenses.',sustainPackaging:'For packaging, it describes recycled RPET fabric pouches, compostable protective bags and flat-packed cases.',sustainLogistics:'For logistics, it says it uses recyclable or reused boxes and paper tape.',sustainSource:'Read JISCO’s commitments ↗'});
  Object.assign(copy.fr,{sunglasses:'Lunettes de soleil',newModels:'Nouveaux modèles',aboutEyebrow:'LA MARQUE / À PROPOS',aboutTitle:'À propos de nous',aboutLead:'JISCO réunit deux regards : la sensibilité méditerranéenne de Francisco Marín et la précision centre-européenne de Jördis Neubauer.',aboutDetail:'La marque décrit des montures artisanales réalisées avec des matériaux soigneusement choisis. La lumière, les couleurs et les formes méditerranéennes s’équilibrent avec le souci du détail.',aboutSource:'Découvrir l’histoire de JISCO ↗',sustainEyebrow:'LA MARQUE / ENGAGEMENT',sustainTitle:'Durabilité',sustainLead:'JISCO relie ses choix de conception à la préservation de la Méditerranée qui inspire ses collections.',sustainMaterial:'Pour les matériaux, la marque met en avant le bio-acétate et les verres de démonstration biodégradables.',sustainPackaging:'Pour l’emballage, elle décrit des pochettes en tissu RPET recyclé, des sacs de protection compostables et des étuis à plat.',sustainLogistics:'Pour la logistique, elle indique utiliser des cartons recyclables ou réutilisés et du ruban adhésif en papier.',sustainSource:'Lire les engagements de JISCO ↗'});
  Object.assign(copy.es,{blog:'Blog',blogEyebrow:'CUADERNO JISCO / INNOVA',blogTitle:'Ideas que dan forma a la mirada.',blogIntro:'Tres lecturas editoriales sobre la identidad, el diseño y los compromisos que JISCO presenta en sus canales oficiales.',blogRead:'Leer artículo ↗',blogBack:'← Volver a las publicaciones',blogSource:'Fuente oficial JISCO ↗',blogPhoto:'Imagen original © JISCO Eyewear'});
  Object.assign(copy.en,{blog:'Journal',blogEyebrow:'JISCO JOURNAL / INNOVA',blogTitle:'Ideas that shape a perspective.',blogIntro:'Three editorial readings on the identity, design and commitments JISCO presents through its official channels.',blogRead:'Read article ↗',blogBack:'← Back to stories',blogSource:'Official JISCO source ↗',blogPhoto:'Original image © JISCO Eyewear'});
  Object.assign(copy.fr,{blog:'Journal',blogEyebrow:'CARNET JISCO / INNOVA',blogTitle:'Des idées qui façonnent le regard.',blogIntro:'Trois lectures éditoriales sur l’identité, le design et les engagements présentés par JISCO dans ses canaux officiels.',blogRead:'Lire l’article ↗',blogBack:'← Retour aux articles',blogSource:'Source officielle JISCO ↗',blogPhoto:'Image originale © JISCO Eyewear'});
  const blogPosts = [
    {id:'dos-miradas',image:'assets/campaigns/story.jpg',source:'https://www.jiscoeyewear.com/nosotros',category:{es:'IDENTIDAD',en:'IDENTITY',fr:'IDENTITÉ'},title:{es:'Dos miradas, una identidad mediterránea',en:'Two perspectives, one Mediterranean identity',fr:'Deux regards, une identité méditerranéenne'},summary:{es:'La historia de Francisco Marín y Jördis Neubauer explica el equilibrio entre color y precisión.',en:'The story of Francisco Marín and Jördis Neubauer explains the balance between colour and precision.',fr:'L’histoire de Francisco Marín et Jördis Neubauer explique l’équilibre entre couleur et précision.'},paragraphs:{es:['JISCO presenta su origen como el encuentro de Francisco Marín, mallorquín inspirado por la luz del Mediterráneo, y Jördis Neubauer, alemana que aporta una mirada precisa y atenta al detalle. La marca reúne esas dos sensibilidades en una identidad propia.','En las monturas, el color y las formas dialogan con una selección cuidadosa de materiales. Para conocer el relato completo de sus fundadores y su manera de diseñar, consulta la historia publicada por JISCO.'],en:['JISCO describes its origins as a meeting between Francisco Marín, from Majorca and inspired by Mediterranean light, and Jördis Neubauer, from Germany, whose perspective is precise and attentive to detail. The brand brings these two sensibilities together in its own identity.','In the frames, colour and shape meet a careful selection of materials. Explore the story published by JISCO for the full account of its founders and design approach.'],fr:['JISCO présente son origine comme la rencontre entre Francisco Marín, Majorquin inspiré par la lumière méditerranéenne, et Jördis Neubauer, Allemande attentive à la précision et aux détails. La marque réunit ces deux sensibilités dans une identité singulière.','Dans les montures, les couleurs et les formes dialoguent avec des matériaux choisis avec soin. Retrouvez le récit complet des fondateurs et de leur démarche sur le site de JISCO.']}},
    {id:'marea-color',image:'assets/campaigns/marea-horizontal.jpg',source:'https://www.jiscoeyewear.com/prensa',category:{es:'DISEÑO',en:'DESIGN',fr:'DESIGN'},title:{es:'MARÉA: el color como lenguaje visual',en:'MARÉA: colour as a visual language',fr:'MARÉA : la couleur comme langage visuel'},summary:{es:'La campaña original de JISCO lleva la luz y el movimiento del mar a su universo visual.',en:'JISCO’s original campaign brings the light and movement of the sea into its visual world.',fr:'La campagne originale de JISCO fait entrer la lumière et le mouvement de la mer dans son univers visuel.'},paragraphs:{es:['MARÉA es una de las películas originales con las que JISCO expresa su inspiración mediterránea. La campaña utiliza luz, color y movimiento para acompañar las formas de sus monturas. Las imágenes y el vídeo se presentan sin modificar, con atribución a JISCO Eyewear.','El catálogo profesional permite pasar de ese universo visual a los datos de cada referencia: vistas de producto, acabados y medidas. Las películas muestran la campaña de la marca; los modelos se agrupan según los datos del catálogo oficial.'],en:['MARÉA is one of JISCO’s original films expressing its Mediterranean inspiration. The campaign uses light, colour and movement alongside the shapes of its frames. Images and film are shown unmodified and credited to JISCO Eyewear.','The professional catalogue moves from that visual world to each reference’s data: product views, finishes and measurements. Films present the brand campaign; models are grouped using official catalogue data.'],fr:['MARÉA est l’un des films originaux par lesquels JISCO exprime son inspiration méditerranéenne. La campagne associe lumière, couleur et mouvement aux formes des montures. Images et film sont présentés sans modification, avec attribution à JISCO Eyewear.','Le catalogue professionnel relie cet univers visuel aux données de chaque référence : vues du produit, finitions et mesures. Les films montrent la campagne ; les modèles sont regroupés selon les données du catalogue officiel.']}},
    {id:'sostenibilidad',image:'assets/campaigns/lightup-horizontal.jpg',source:'https://www.jiscoeyewear.com/sostenibilidad',category:{es:'COMPROMISO',en:'COMMITMENT',fr:'ENGAGEMENT'},title:{es:'Sostenibilidad en materiales, embalaje y logística',en:'Sustainability across materials, packaging and logistics',fr:'Durabilité : matériaux, emballage et logistique'},summary:{es:'Una lectura de las decisiones que JISCO explica en su página de sostenibilidad.',en:'A closer look at the choices JISCO explains on its sustainability page.',fr:'Un regard sur les choix expliqués par JISCO dans sa page de durabilité.'},paragraphs:{es:['En su información oficial, JISCO destaca el bioacetato y las lentes de demostración biodegradables entre sus decisiones sobre materiales. También describe fundas de tejido reciclado RPET, bolsas protectoras compostables y estuches planos para el embalaje.','La marca indica que usa cajas reciclables o reutilizadas y cinta de papel en logística. Estas son declaraciones de JISCO sobre sus prácticas; la página oficial ofrece el contexto y los detalles vigentes de cada compromiso.'],en:['In its official information, JISCO highlights bio-acetate and biodegradable demonstration lenses among its material choices. It also describes recycled RPET fabric pouches, compostable protective bags and flat-packed cases for packaging.','The brand says it uses recyclable or reused boxes and paper tape in logistics. These are JISCO’s statements about its practices; its official page provides the current context and details for each commitment.'],fr:['Dans ses informations officielles, JISCO met en avant le bio-acétate et les verres de démonstration biodégradables parmi ses choix de matériaux. La marque décrit aussi des pochettes en tissu RPET recyclé, des sacs de protection compostables et des étuis à plat.','Elle indique utiliser des cartons recyclables ou réutilisés et du ruban adhésif en papier pour la logistique. Il s’agit des déclarations de JISCO ; sa page officielle présente le contexte et les détails actuels de ces engagements.']}}
  ];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let lang = localStorage.getItem('jisco-lang') || 'es';
  if (!copy[lang]) lang = 'es';
  let catalog = [];
  let activeProduct = null;
  let activeVariant = null;
  let activeView = 'front';
  let filmProduct = null;
  let filmVariant = null;
  let filmView = 'front';
  let filmCollection = null;
  let filmReturnFocus = null;
  let filmQuantity = 1;
  const t = key => copy[lang][key] || copy.es[key] || key;
  const localizeValue=value=>({
    en:{Acetato:'Acetate',Metal:'Metal',Nylon:'Nylon',Titanium:'Titanium',Hombre:'Men',Mujer:'Women',Unisex:'Unisex'},
    fr:{Acetato:'Acétate',Metal:'Métal',Nylon:'Nylon',Titanium:'Titane',Hombre:'Homme',Mujer:'Femme',Unisex:'Unisexe'}
  }[lang]||{})[value]||value;
  const localizedMaterials=values=>(values||[]).map(localizeValue).join(', ');
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
    ['materialFilter','styleFilter'].forEach(id=>[...$('#'+id).options].forEach(option=>{if(option.value)option.textContent=localizeValue(option.value)}));
    renderRoute();
  }
  function option(select,value,label){const el=document.createElement('option');el.value=value;el.textContent=label;select.append(el)}
  function populateFilters(){
    const materials=[...new Set(catalog.flatMap(m=>m.materials||[]))].filter(Boolean).sort();
    const styles=[...new Set(catalog.map(m=>m.style))].filter(Boolean).sort();
    const sizes=[...new Set(catalog.map(m=>m.size))].filter(Boolean).sort();
    const colors=[...new Set(catalog.flatMap(m=>m.variants.flatMap(v=>v.color_name.split(',').map(x=>x.trim()))))].filter(Boolean).sort();
    for(const value of materials)option($('#materialFilter'),value,localizeValue(value));
    for(const value of styles)option($('#styleFilter'),value,localizeValue(value));
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
      return `<a class="model-card" href="#/modelo/${encodeURIComponent(slug(m))}/${encodeURIComponent(v.source_id)}"><figure>${m.season_id==='298'?`<em class="model-new-badge">${esc(t('newBadge'))}</em>`:''}<img src="${esc(variantImage(v))}" alt="${esc(m.name)} · ${esc(v.color_name)}" loading="lazy"></figure><div class="model-card__body"><strong class="model-card__title">${esc(m.name)}</strong><span class="model-card__meta">${esc(m.category==='sun'?t('sun'):t('optical'))}<br>${m.variants.length} ${t('variants')}</span></div></a>`;
    }).join('');
  }
  function railCard(m,related=false){
    const v=m.variants.find(x=>x.front_path)||m.variants[0];
    return `<a class="model-rail__card" href="#/modelo/${encodeURIComponent(slug(m))}/${encodeURIComponent(v.source_id)}"${related?' data-related-product':''}>${m.season_id==='298'?`<em class="model-new-badge">${esc(t('newBadge'))}</em>`:''}<img src="${esc(variantImage(v))}" alt="${esc(m.name+' · '+v.color_name)}" loading="lazy"><span><strong>${esc(m.name)}</strong><small>${esc(m.category==='sun'?t('sun'):t('optical'))} · ${m.variants.length} ${esc(t('variants'))}</small></span></a>`;
  }
  function modelRail(models,label,id,related=false){
    return `<div class="model-rail"><div class="model-rail__head"><div><span class="eyebrow">JISCO / ${models.length} ${esc(t('models'))}</span><h3>${esc(label)}</h3></div><div class="model-rail__arrows"><button type="button" data-rail-scroll="-1" aria-controls="${esc(id)}" aria-label="${esc(t('previous'))}">←</button><button type="button" data-rail-scroll="1" aria-controls="${esc(id)}" aria-label="${esc(t('next'))}">→</button></div></div><div class="model-rail__track" id="${esc(id)}">${models.map(model=>railCard(model,related)).join('')}</div></div>`;
  }
  function productDescription(model,variant){
    const material=localizedMaterials(variant.materials||model.materials||[]);
    const style=localizeValue(model.style||'—');
    const finishes=model.variants.length;
    if(lang==='en')return `${model.name} is a JISCO ${model.category==='sun'?'sun':'optical'} frame in ${material || 'the listed materials'}, size ${model.size || '—'}, listed in the ${style} category. This reference is ${variant.sku} in ${variant.color_name}. The official catalogue lists ${finishes} finishes for this model.`;
    if(lang==='fr')return `${model.name} est une monture JISCO ${model.category==='sun'?'solaire':'optique'} en ${material || 'matériaux indiqués'}, taille ${model.size || '—'}, dans la catégorie ${style}. Cette référence est ${variant.sku} en ${variant.color_name}. Le catalogue officiel présente ${finishes} finitions pour ce modèle.`;
    return `${model.name} es una montura JISCO de ${model.category==='sun'?'sol':'óptica'} en ${material || 'los materiales indicados'}, talla ${model.size || '—'} y estilo ${style}. Esta referencia es ${variant.sku}, en color ${variant.color_name}. El catálogo oficial registra ${finishes} acabados para este modelo.`;
  }
  function relatedModels(model){
    const score=m=>Number(m.category===model.category)*4+Number(m.season_id&&m.season_id===model.season_id)*3+Number((m.materials||[]).some(x=>(model.materials||[]).includes(x)))*2+Number(m.style===model.style)+Number(m.size===model.size);
    return catalog.filter(m=>m!==model).sort((a,b)=>score(b)-score(a)||a.name.localeCompare(b.name));
  }
  function renderProduct(model,chosen){
    activeProduct=model;activeVariant=chosen||model.variants[0];activeView='front';
    const index=catalog.indexOf(model);
    const material=(activeVariant.materials||model.materials||[]).map(localizeValue).join(' · ');
    const style=localizeValue(model.style||'');
    const measures=Object.entries(activeVariant.measurements||{}).map(([k,v])=>`<div><strong>${esc(k)}</strong><span>${esc(v)}</span></div>`).join('');
    const hasSide=Boolean(activeVariant.side_path||activeVariant.side_url);
    $('#productContent').innerHTML=`<a class="product-back" href="#/catalogo">${t('viewCatalog')}</a><div class="product-main"><div><figure class="product-image"><img id="mainProductImage" src="${esc(variantImage(activeVariant))}" alt="${esc(model.name+' '+activeVariant.color_name+', '+t('front'))}"></figure><p class="product-image-credit">${esc(t('productPhotoBy'))}</p><div class="view-tabs"><button type="button" data-view-image="front" aria-pressed="true">${t('front')}</button>${hasSide?`<button type="button" data-view-image="side" aria-pressed="false">${t('side')}</button>`:''}</div></div><div class="product-info"><span class="eyebrow">JISCO · ${model.category==='sun'?t('sun'):t('optical')}</span><h1>${esc(model.name)}</h1><span class="sku">${esc(activeVariant.sku)}</span><p>${esc(material)}${style?' · '+esc(style):''}${model.size?' · '+esc(model.size):''}</p><div class="colors" role="group" aria-label="${esc(t('color'))}">${model.variants.map(v=>`<button type="button" data-variant="${esc(v.source_id)}" aria-pressed="${v.source_id===activeVariant.source_id}"><img src="${esc(variantImage(v))}" alt="" loading="lazy"><span>${esc(v.color_name||v.path.split('/').pop())}</span></button>`).join('')}</div><h2 class="eyebrow">${t('measures')}</h2><div class="measurements">${measures}</div><div class="purchase"><label>${t('quantity')} <input id="quantity" type="number" min="1" max="999" value="1" inputmode="numeric"></label><button class="button" id="addOrder" type="button">${t('add')} ↗</button><p>${t('availability')}</p></div></div></div><section class="product-details"><span class="eyebrow">${esc(t('sourceDetails'))}</span><h2>${esc(t('technicalTitle'))}</h2><p>${esc(productDescription(model,activeVariant))}</p><dl><div><dt>${esc(t('frameLabel'))}</dt><dd>${esc(model.category==='sun'?t('sun'):t('optical'))}</dd></div><div><dt>${esc(t('materialLabel'))}</dt><dd>${esc(material||'—')}</dd></div><div><dt>${esc(t('sizeLabel'))}</dt><dd>${esc(model.size||'—')}</dd></div><div><dt>${esc(t('styleLabel'))}</dt><dd>${esc(style||'—')}</dd></div><div><dt>${esc(t('colorsLabel'))}</dt><dd>${esc(activeVariant.color_name)}</dd></div><div><dt>${esc(t('finishLabel'))}</dt><dd>${model.variants.length}</dd></div></dl></section><section class="product-related"><p>${esc(t('relatedIntro'))}</p>${modelRail(relatedModels(model),t('relatedTitle'),'relatedModels')}</section><nav class="product-nav"><a href="#/modelo/${encodeURIComponent(slug(catalog[(index-1+catalog.length)%catalog.length]))}">${t('previous')}</a><a href="#/modelo/${encodeURIComponent(slug(catalog[(index+1)%catalog.length]))}">${t('next')}</a></nav>`;
    if(model.season_id==='298')$('#productContent .product-info .eyebrow').insertAdjacentHTML('afterend',`<span class="product-new-badge">${esc(t('newBadge'))}</span>`);
    $$('#relatedModels a').forEach(link=>link.dataset.relatedProduct='');
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
    $('#addOrder').addEventListener('click',()=>addOrder());
  }
  function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),3500)}
  function addOrder(model=activeProduct,variant=activeVariant,requestedQuantity=$('#quantity').value){
    if(!model||!variant)return;
    const quantity=Math.max(1,Math.min(999,Number(requestedQuantity)||1));
    const item={brand:'jisco',productId:model.source_id,model:model.name,name:model.name,sku:variant.sku,color:variant.color_name,quantity,key:`jisco:${variant.source_id}`,image:variantImage(variant),material:(variant.materials||[]).join(' · '),measurements:Object.entries(variant.measurements||{}).map(([k,v])=>`${k}: ${v}`).join(' · '),sourceUrl:variant.source_url};
    if(window.parent!==window){window.parent.postMessage({type:'innova-boutique:add-item',item},parentOrigin)}
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
  const campaignSets = [
    {id:'marea',title:'MARÉA',image:'assets/campaigns/marea-horizontal.jpg',video:'assets/campaigns/jisco-home-marea-2026.mp4',extras:['assets/materiales/marea/Marea_video_2.mp4','assets/materiales/marea/Marea_video_3.mp4','assets/materiales/marea/Marea_video_4.mp4','assets/materiales/marea/Marea_video_5.mp4'],select:m=>m.season_id==='298',group:'newness'},
    {id:'lightup',title:'LIGHT UP',image:'assets/campaigns/lightup-horizontal.jpg',video:'assets/videos_25/LightUP_video.mp4',extras:[],select:m=>m.category==='optical'&&m.season_id!=='298',group:'optical'},
    {id:'jiscotheque',title:'JISCOTHEQUE GLOW FESTIVAL',image:'assets/campaigns/jiscotheque-horizontal.jpg',video:'assets/videos_25/JiscothequeGlowFestival_Video001.mp4',extras:[],select:m=>m.category==='sun',group:'sun'}
  ];
  function film(path,poster,label,extraClass=''){
    return `<video class="ambient-film ${extraClass}" autoplay muted loop playsinline preload="none" poster="${asset(poster)}" aria-label="${esc(label)}"><source src="${asset(path)}" type="video/mp4"></video>`;
  }
  function campaignBlock(set,index,home=false){
    const models=catalog.filter(set.select);
    const shown=home&&set.id!=='marea'?models.slice(0,6):models;
    const id=`${home?'home':'catalog'}-${set.id}-models`;
    return `<section class="editorial-block editorial-block--${esc(set.id)}" aria-label="${esc(set.title)}"><div class="editorial-block__intro"><span class="eyebrow">0${index+1} / JISCO</span><h2>${esc(set.title)}</h2><p>${esc(t(set.id+'Description'))}</p></div><div class="editorial-block__film">${film(set.video,set.image,set.title+' · JISCO')}<span class="editorial-block__film-label">${esc(set.title)} <small>© JISCO EYEWEAR</small></span></div>${modelRail(shown,t(set.group),id)}${home?`<a class="editorial-block__all" href="#/catalogo">${esc(t('allCollectionModels'))}</a>`:`<button class="editorial-block__all editorial-block__catalog-link" type="button" data-scroll-catalog>${esc(t('viewFullCatalog'))}<span aria-hidden="true"> ↓</span></button>`}</section>`;
  }
  function renderHomeCollections(){
    $('#homeNewArrivals').innerHTML=campaignBlock(campaignSets[0],0,true);
    $('#homeCollections').innerHTML=campaignSets.slice(1).map((set,index)=>campaignBlock(set,index+1,true)).join('');
  }
  function renderCatalogFeature(){
    $('#catalogCampaigns').innerHTML=`<p class="editorial-note">${esc(t('editorialModelsNote'))}</p>`+campaignSets.map((set,index)=>campaignBlock(set,index)).join('');
  }
  function renderVideos(){
    const pick=(set,index=0)=>catalog.filter(set.select)[index]||catalog.filter(set.select)[0];
    const filmAction=(model,set)=>model?`<button class="story-film__action" type="button" data-film-model="${esc(slug(model))}" data-film-collection="${esc(set.id)}" aria-label="${esc(t('filmModel')+' '+model.name)}">${esc(t('filmModel'))} <span aria-hidden="true">↗</span></button>`:'';
    const main=campaignSets.map((set,index)=>{const model=pick(set);return `<article class="story-film"><div class="story-film__media">${film(set.video,set.image,set.title+' · JISCO')}${filmAction(model,set)}</div><div class="story-film__copy"><span class="eyebrow">0${index+1} / JISCO</span><h3>${esc(set.title)}</h3><p>${esc(t(set.id+'Description'))}</p>${model?`<span class="story-film__model">${esc(t('featuredModel'))}: ${esc(model.name)}</span>`:''}</div></article>`}).join('');
    const extras=campaignSets[0].extras.map((path,index)=>{const model=pick(campaignSets[0],index+1);return `<div class="story-moment">${film(path,campaignSets[0].image,'MARÉA · '+(index+2))}<span>MARÉA / 0${index+2}${model?' · '+esc(model.name):''}</span>${filmAction(model,campaignSets[0])}</div>`}).join('');
    $('#videoGallery').innerHTML=`<div class="story-films__heading"><span class="eyebrow">JISCO / FILMS</span><h2>${esc(t('campaignTitle'))}</h2><p>${esc(t('campaignBody'))}</p></div><div class="story-films__grid">${main}</div><div class="story-moments"><div><span class="eyebrow">JISCO / MARÉA</span><h3>${esc(t('filmMoments'))}</h3><p>${esc(t('filmMomentsBody'))}</p></div><div class="story-moments__track">${extras}</div></div>`;
  }
  function renderFilmProduct(){
    if(!filmProduct||!filmVariant)return;
    const v=filmVariant,m=filmProduct;
    const side=Boolean(v.side_path||v.side_url);
    $('#filmProductContent').innerHTML=`<div class="film-product-dialog__media"><img src="${esc(variantImage(v,filmView))}" alt="${esc(m.name+' · '+v.color_name+' · '+t(filmView==='side'?'side':'front'))}"><span>© JISCO EYEWEAR</span></div><div class="film-product-dialog__info"><span class="eyebrow">JISCO / ${esc(t('featuredModel'))}</span><h2 id="filmProductTitle">${esc(m.name)}</h2><span class="sku">${esc(v.sku)}</span><p>${esc(productDescription(m,v))}</p><p class="film-product-dialog__note">${esc(t('modelShown'))}</p><div class="film-product-dialog__views" role="group" aria-label="${esc(t('front'))} / ${esc(t('side'))}"><button type="button" data-film-view="front" aria-pressed="${filmView==='front'}">${esc(t('front'))}</button>${side?`<button type="button" data-film-view="side" aria-pressed="${filmView==='side'}">${esc(t('side'))}</button>`:''}</div><div class="film-product-dialog__variants" role="group" aria-label="${esc(t('color'))}">${m.variants.map(option=>`<button type="button" data-film-variant="${esc(option.source_id)}" aria-pressed="${option.source_id===v.source_id}"><img src="${esc(variantImage(option))}" alt=""><span>${esc(option.color_name)}</span></button>`).join('')}</div><div class="film-product-dialog__purchase"><label for="filmQuantity">${esc(t('quantity'))}</label><input id="filmQuantity" data-film-quantity type="number" inputmode="numeric" min="1" max="999" value="${filmQuantity}"><button type="button" data-film-add>${esc(t('add'))} ↗</button></div><p class="film-product-dialog__availability">${esc(t('availability'))}</p></div>`;
    const fullLink=$('[data-film-full]');
    fullLink.href=`#/modelo/${encodeURIComponent(slug(m))}/${encodeURIComponent(v.source_id)}`;
    fullLink.textContent=t('openFullProduct');
    $('[data-film-catalog]').textContent=t('allCollectionModels');
    $$('#filmProductRail [data-film-related-model]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filmRelatedModel===slug(m))));
  }
  function renderFilmRail(){
    const models=catalog.filter(filmCollection.select);
    $('#filmProductRail').innerHTML=`<div class="film-product-rail__head"><div><span class="eyebrow">JISCO / ${models.length} ${esc(t('models'))}</span><h3>${esc(t('moreCollectionModels'))} ${esc(filmCollection.title)}</h3></div><div class="film-product-rail__arrows"><button type="button" data-film-rail-scroll="-1" aria-label="${esc(t('previous'))}">←</button><button type="button" data-film-rail-scroll="1" aria-label="${esc(t('next'))}">→</button></div></div><div class="film-product-rail__track" id="filmProductRailTrack">${models.map(model=>{const variant=model.variants.find(v=>v.front_path)||model.variants[0];return `<button type="button" class="film-product-rail__card" data-film-related-model="${esc(slug(model))}" aria-pressed="${model===filmProduct}"><img src="${esc(variantImage(variant))}" alt="" loading="lazy"><span>${esc(model.name)}</span></button>`}).join('')}</div>`;
  }
  function openFilmProduct(model,trigger){
    filmProduct=model;filmVariant=model.variants.find(v=>v.front_path)||model.variants[0];filmView='front';filmQuantity=1;filmReturnFocus=trigger;
    filmCollection=campaignSets.find(set=>set.id===trigger.dataset.filmCollection)||campaignSets.find(set=>set.select(model));
    renderFilmRail();renderFilmProduct();$('#filmProductDialog').showModal();
    if(window.parent!==window)window.parent.postMessage({type:'innova-boutique:modal-state',brand:'jisco',open:true},parentOrigin);
    $('[data-film-close]').focus();
  }
  function closeFilmProduct(){const dialog=$('#filmProductDialog');if(dialog.open)dialog.close();if(window.parent!==window)window.parent.postMessage({type:'innova-boutique:modal-state',brand:'jisco',open:false},parentOrigin);filmProduct=null;filmReturnFocus?.focus();filmReturnFocus=null}
  let filmObserver;
  function observeFilms(){
    if(!filmObserver){filmObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{const video=entry.target;if(entry.isIntersecting&&!document.hidden&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)video.play().catch(()=>{});else video.pause()}),{threshold:.08})}
    $$('.ambient-film,.home-hero__video').forEach(video=>{if(!video.dataset.observed){video.dataset.observed='1';filmObserver.observe(video)}});
  }
  let previousSection='';
  let jumpToRelatedProduct=false;
  let jumpToCatalogFromDialog=false;
  function renderBlog(postId){
    const selected=blogPosts.find(post=>post.id===postId);
    const image=post=>`<figure><img src="${asset(post.image)}" alt="${esc(post.title[lang])}" loading="lazy"><figcaption>${esc(t('blogPhoto'))}</figcaption></figure>`;
    if(selected){
      $('#blogContent').innerHTML=`<article class="blog-article"><a class="blog-back" href="#/blog">${esc(t('blogBack'))}</a><span class="eyebrow">${esc(selected.category[lang])} / JISCO</span><h1>${esc(selected.title[lang])}</h1><p class="blog-article__lead">${esc(selected.summary[lang])}</p>${image(selected)}<div class="blog-article__copy">${selected.paragraphs[lang].map(p=>`<p>${esc(p)}</p>`).join('')}<a href="${selected.source}" target="_blank" rel="noopener noreferrer">${esc(t('blogSource'))}</a></div></article><div class="blog-more"><span class="eyebrow">${esc(t('blog'))} / JISCO</span><div class="blog-grid">${blogPosts.filter(post=>post!==selected).map(post=>`<a class="blog-card" href="#/blog/${post.id}">${image(post)}<div><span class="eyebrow">${esc(post.category[lang])}</span><h2>${esc(post.title[lang])}</h2><p>${esc(post.summary[lang])}</p><strong>${esc(t('blogRead'))}</strong></div></a>`).join('')}</div></div>`;
      return;
    }
    $('#blogContent').innerHTML=`<div class="blog-opening"><span class="eyebrow">${esc(t('blogEyebrow'))}</span><h1>${esc(t('blogTitle'))}</h1><p>${esc(t('blogIntro'))}</p></div><div class="blog-grid">${blogPosts.map(post=>`<a class="blog-card" href="#/blog/${post.id}">${image(post)}<div><span class="eyebrow">${esc(post.category[lang])}</span><h2>${esc(post.title[lang])}</h2><p>${esc(post.summary[lang])}</p><strong>${esc(t('blogRead'))}</strong></div></a>`).join('')}</div>`;
  }
  function renderRoute(){
    if($('#filmProductDialog').open)closeFilmProduct();
    const route=decodeURIComponent(location.hash.replace(/^#/,'')||'/');
    const [path,query='']=route.split('?');
    const section=path.startsWith('/catalogo')?'catalog':path.startsWith('/modelo/')?'product':path.startsWith('/historia')?'story':path.startsWith('/blog')?'blog':'home';
    $$('[data-view]').forEach(el=>el.hidden=el.dataset.view!==section);
    if(section==='home')renderHomeCollections();
    if(section==='catalog'){
      renderCatalogFeature();
      if(query){const params=new URLSearchParams(query);$('#searchInput').value='';['categoryFilter','materialFilter','styleFilter','sizeFilter','colorFilter'].forEach(id=>$('#'+id).value='');$('#newFilter').checked=params.get('new')==='1';for(const [key,id] of [['category','categoryFilter'],['material','materialFilter']])if(params.has(key))$('#'+id).value=params.get(key)}
      renderCatalog();
    }
    if(section==='product'){
      const [, , modelSlug, variantId]=path.split('/');
      const model=catalog.find(m=>slug(m)===modelSlug);
      if(model)renderProduct(model,model.variants.find(v=>v.source_id===variantId));else location.hash='#/catalogo';
    }
    if(section==='story')renderVideos();
    if(section==='blog')renderBlog(path.split('/')[2]);
    const blogPost=section==='blog'?blogPosts.find(post=>post.id===path.split('/')[2]):null;
    const pageTitle=section==='blog'?`${blogPost?blogPost.title[lang]:t('blog')} · JISCO | Innova Boutique`:'JISCO · Catálogo profesional Innova Eyewear';
    document.title=pageTitle;
    observeFilms();
    if(window.parent!==window)window.parent.postMessage({type:'innova-brand-route',brand:'jisco',route,title:pageTitle},parentOrigin);
    if(section==='product'&&previousSection==='product'&&jumpToRelatedProduct){
      const product=$('.product-view');
      const headerHeight=$('.header').getBoundingClientRect().height;
      const top=product.getBoundingClientRect().top+window.scrollY-headerHeight-16;
      window.scrollTo({top:Math.max(0,top),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    }else if(section!=='product'||previousSection!=='product')window.scrollTo({top:0,behavior:'auto'});
    if(section==='catalog'&&(jumpToCatalogFromDialog||new URLSearchParams(query).get('new')==='1'||new URLSearchParams(query).has('category'))){
      requestAnimationFrame(()=>$('#catalog-results').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}));
    }
    jumpToCatalogFromDialog=false;
    jumpToRelatedProduct=false;
    previousSection=section;
  }
  function bind(){
    document.addEventListener('pointermove',event=>{
      if(event.pointerType!=='mouse')return;
      const frame=event.target.closest('.product-image,.film-product-dialog__media');
      if(!frame)return;
      const rect=frame.getBoundingClientRect();
      const x=Math.max(0,Math.min(100,(event.clientX-rect.left)/rect.width*100));
      const y=Math.max(0,Math.min(100,(event.clientY-rect.top)/rect.height*100));
      const image=frame.querySelector('img');
      if(image)image.style.transformOrigin=`${x}% ${y}%`;
      frame.classList.add('is-zooming');
    });
    document.addEventListener('pointerout',event=>{
      const frame=event.target.closest('.product-image,.film-product-dialog__media');
      if(frame&&!frame.contains(event.relatedTarget))frame.classList.remove('is-zooming');
    });
    document.addEventListener('click',event=>{const trigger=event.target.closest('[data-film-model]');if(trigger){const model=catalog.find(m=>slug(m)===trigger.dataset.filmModel);if(model)openFilmProduct(model,trigger)}const related=event.target.closest('[data-film-related-model]');if(related){const model=catalog.find(m=>slug(m)===related.dataset.filmRelatedModel);if(model){filmProduct=model;filmVariant=model.variants.find(v=>v.front_path)||model.variants[0];filmView='front';filmQuantity=1;renderFilmProduct();$('#filmProductDialog').scrollTop=0;related.focus()}}const railArrow=event.target.closest('[data-film-rail-scroll]');if(railArrow)$('#filmProductRailTrack').scrollBy({left:$('#filmProductRailTrack').clientWidth*.85*Number(railArrow.dataset.filmRailScroll),behavior:'smooth'});const variant=event.target.closest('[data-film-variant]');if(variant&&filmProduct){filmVariant=filmProduct.variants.find(v=>v.source_id===variant.dataset.filmVariant)||filmVariant;filmView='front';renderFilmProduct()}const view=event.target.closest('[data-film-view]');if(view){filmView=view.dataset.filmView;renderFilmProduct()}if(event.target.closest('[data-film-add]'))addOrder(filmProduct,filmVariant,filmQuantity);if(event.target.closest('[data-film-catalog]')){closeFilmProduct();if(location.hash==='#/catalogo')$('#catalog-results').scrollIntoView({behavior:'smooth',block:'start'});else{jumpToCatalogFromDialog=true;location.hash='#/catalogo'}}if(event.target.closest('[data-film-close]'))closeFilmProduct();if(event.target.closest('[data-film-full]'))closeFilmProduct()});
    $('#filmProductDialog').addEventListener('input',event=>{if(event.target.matches('[data-film-quantity]'))filmQuantity=Math.max(1,Math.min(999,Number(event.target.value)||1))});
    $('#filmProductDialog').addEventListener('click',event=>{if(event.target===$('#filmProductDialog'))closeFilmProduct()});
    $('#filmProductDialog').addEventListener('close',()=>{if(window.parent!==window)window.parent.postMessage({type:'innova-boutique:modal-state',brand:'jisco',open:false},parentOrigin);filmProduct=null;filmCollection=null;filmReturnFocus?.focus();filmReturnFocus=null});
    const miniShell=$('.innova-mini-menu-shell');
    const miniTrigger=$('[data-mini-menu-trigger]');
    const closeMiniMenu=()=>{miniShell.classList.remove('is-open');miniTrigger.setAttribute('aria-expanded','false')};
    miniTrigger.addEventListener('click',()=>{const open=miniShell.classList.toggle('is-open');miniTrigger.setAttribute('aria-expanded',String(open))});
    document.addEventListener('click',event=>{if(!miniShell.contains(event.target))closeMiniMenu()});
    document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMiniMenu()});
    $$('[data-mini-brand]').forEach(section=>{const activate=()=>$$('[data-mini-image]').forEach(image=>image.classList.toggle('is-active',image.dataset.miniImage===section.dataset.miniBrand));section.addEventListener('mouseenter',activate);section.addEventListener('focusin',activate)});
    document.addEventListener('click',event=>{if(event.button===0&&event.target.closest('a[data-related-product]')&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey)jumpToRelatedProduct=true});
    document.addEventListener('click',event=>{const button=event.target.closest('[data-rail-scroll]');if(!button)return;const rail=document.getElementById(button.getAttribute('aria-controls'));if(rail)rail.scrollBy({left:rail.clientWidth*.9*Number(button.dataset.railScroll),behavior:'smooth'})});
    $('#language').addEventListener('change',event=>setLanguage(event.target.value));
    ['searchInput','categoryFilter','materialFilter','styleFilter','sizeFilter','colorFilter','newFilter'].forEach(id=>$('#'+id).addEventListener(id==='searchInput'?'input':'change',renderCatalog));
    $('#clearFilters').addEventListener('click',()=>{$('#searchInput').value='';['categoryFilter','materialFilter','styleFilter','sizeFilter','colorFilter'].forEach(id=>$('#'+id).value='');$('#newFilter').checked=false;renderCatalog()});
    $('#toggleFilters').addEventListener('click',()=>{const open=$('#filterPanel').classList.toggle('open');$('#toggleFilters').setAttribute('aria-expanded',String(open))});
    const scrollToCatalog=()=>$('#catalog-results').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
    document.addEventListener('click',event=>{if(event.target.closest('[data-scroll-catalog]'))scrollToCatalog()});
    $('[data-jump-models]').addEventListener('click',scrollToCatalog);
    $$('[data-order-trigger]').forEach(link=>link.addEventListener('click',event=>{if(window.parent===window)return;event.preventDefault();window.parent.postMessage({type:'innova-boutique:open-order',brand:'jisco'},parentOrigin)}));
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
