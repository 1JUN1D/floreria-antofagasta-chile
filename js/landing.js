// ===================================
// LANDING PAGE JS - Full Petalos Antofagasta
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO (54 productos) ---
const products = [
    { id: 1, code: "001", name: "Buqué Premium Rosas Rojas con Ferrero", price: 74990, image: "../assets/foto1.webp", description: "Ramo de lujo con docena de rosas rojas y chocolates Ferrero Rocher, envuelto en papel negro con borde dorado y mariposas decorativas. Ideal para sorprender en aniversarios y declaraciones de amor.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 2, code: "002", name: "Mini Buqué de Girasol", price: 18990, image: "../assets/foto2.webp", description: "Pieza acogedora con girasol, gypsophila y helecho en papel beige tipo lino con moño rojo. Perfecto para alegrar un día cualquiera con un detalle delicado.", categories: ["ramos", "girasoles", "precio-bajo"] },
    { id: 3, code: "003", name: "Arreglo Corazón Rosas y Girasoles con Ferrero", price: 57990, image: "../assets/foto3.webp", description: "Caja en forma de corazón con rosas rojas, girasoles y chocolates Ferrero Rocher sobre follaje fresco. Una declaración intensa en formato compacto y muy fotogénico.", categories: ["corazones", "cajas", "rosas", "girasoles", "especiales", "precio-medio"] },
    { id: 4, code: "004", name: "Ramo 4 Rosas Rojas con Burbuja Te Amo", price: 57990, image: "../assets/foto4.webp", description: "Caja con rosas rojas coronada por una burbuja transparente con la leyenda Te Amo en confeti rojo. Un detalle romántico que combina flores, mensaje y movimiento.", categories: ["cajas", "rosas", "especiales", "precio-medio"] },
    { id: 5, code: "005", name: "Ramo Elegante 3 Rosas Rojas", price: 17990, image: "../assets/foto5.webp", description: "Bouquet sobrio con tres rosas rojas, gypsophila y follaje en papel blanco con bordes dorados. Una opción discreta para regalar con clase a cualquier hora.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 6, code: "006", name: "Arreglo Fúnebre Oval Rosas Blancas", price: 38990, image: "../assets/foto6.webp", description: "Arreglo ovalado de condolencias con rosas blancas, follaje verde y gypsophila sobre tarjeta de respeto. Ideal para acompañar momentos solemnes con elegancia.", categories: ["funebres", "precio-medio"] },
    { id: 7, code: "007", name: "Cofre Rosas Blancas y Margaritas", price: 51990, image: "../assets/foto7.webp", description: "Cofre de madera con torre de rosas blancas en la parte superior y base de margaritas blancas con follaje fresco. Estilo natural y sofisticado para ocasiones especiales.", categories: ["cajas", "rosas", "precio-medio"] },
    { id: 8, code: "008", name: "Buqué Dorado Rosas con Girasol y Ferrero", price: 23990, image: "../assets/foto8.webp", description: "Ramo en papel dorado con rosas rojas, girasol, chocolates Ferrero Rocher y mariposa nacarada. Una mezcla brillante de color y detalle gourmet.", categories: ["ramos", "rosas", "girasoles", "especiales", "precio-bajo"] },
    { id: 9, code: "009", name: "Set Premium Osito, Globos y Bouquet 100 Rosas", price: 99990, image: "../assets/foto9.webp", description: "Pack romántico con oso de peluche gigante, globos rojos en forma de corazón y bouquet voluminoso con rosas rojas y blancas concéntricas. Una sorpresa de gran impacto visual.", categories: ["ramos", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 10, code: "010", name: "Buqué Clásico Rosas Rojas con Gypsophila", price: 19990, image: "../assets/foto10.webp", description: "Ramo en papel negro con borde dorado, rosas rojas y nube de gypsophila blanca. Una propuesta atemporal pensada para enamorar sin esfuerzo.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 11, code: "011", name: "Corazón Premium Rosas Rosadas con Ferrero", price: 83990, image: "../assets/foto11.webp", description: "Arreglo en forma de corazón con rosas rosadas y un acento de rosa fucsia, rematado con mariposa dorada y borde de Ferrero Rocher. Una obra romántica de gran formato.", categories: ["corazones", "rosas", "premium", "precio-alto"] },
    { id: 12, code: "012", name: "Mega Bouquet Premium Rosas Rojas", price: 199990, image: "../assets/foto12.webp", description: "Bouquet monumental con más de cien rosas rojas en pimpollo, baby's breath y mariposa dorada, envuelto en papel negro con detalles oro. Pieza de impacto para conmemoraciones únicas.", categories: ["ramos", "rosas", "premium", "precio-alto"] },
    { id: 13, code: "013", name: "Ramo Bicolor con Ferrero Rocher", price: 33990, image: "../assets/foto13.webp", description: "Bouquet con rosas rojas y blancas alternadas, presentado con caja de chocolates Ferrero Rocher y moño rojo con mariposa dorada. Elegancia y dulzura en un solo regalo.", categories: ["ramos", "rosas", "especiales", "precio-medio"] },
    { id: 14, code: "014", name: "Florero Romántico con Globo Te Amo", price: 46990, image: "../assets/foto14.webp", description: "Florero de vidrio con rosas rojas, girasoles, claveles rosados y baby's breath, coronado por un globo en forma de corazón con la frase Te Amo. Listo para iluminar cualquier rincón.", categories: ["especiales", "rosas", "girasoles", "precio-medio"] },
    { id: 15, code: "015", name: "Buqué Rosas Azules con Claveles Blancos", price: 21990, image: "../assets/foto15.webp", description: "Ramo en papel negro con borde dorado, compuesto por rosas azules, claveles blancos y gypsophila. Una propuesta original para quienes buscan un regalo fuera de lo común.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 16, code: "016", name: "Canasta Te Amo con Osito y Globo Corazón", price: 32990, image: "../assets/foto16.webp", description: "Canasta rústica con rosas rojas, alstroemerias blancas con rosado, osito de peluche con corazón Te Amo y globo metálico en forma de corazón. Mezcla perfecta de ternura y detalle floral.", categories: ["canastas", "rosas", "especiales", "precio-medio"] },
    { id: 17, code: "017", name: "Caja Romántica con Gladiolos y Rosas Mix", price: 81990, image: "../assets/foto17.webp", description: "Caja blanca con vara de gladiolos rojos, rosas en tonos rojo, blanco y rosa, gypsophila y chocolates Ferrero Rocher con pétalos de rosa al pie. Una pieza majestuosa para sorprender en grande.", categories: ["cajas", "rosas", "premium", "precio-alto"] },
    { id: 18, code: "018", name: "Buqué Girasoles y Rosas con Mariposa", price: 33990, image: "../assets/foto18.webp", description: "Ramo con girasoles centrales y rosas rojas en papel negro con borde dorado y mariposa decorativa. Una mezcla alegre y vibrante para celebrar cumpleaños y aniversarios.", categories: ["ramos", "girasoles", "rosas", "precio-medio"] },
    { id: 19, code: "019", name: "Arreglo Fúnebre Domo Blanco", price: 56990, image: "../assets/foto19.webp", description: "Domo fúnebre con lilies blancos, crisantemos, rosas blancas y abundante follaje verde. Una pieza serena que transmite respeto y cariño en momentos difíciles.", categories: ["funebres", "precio-medio"] },
    { id: 20, code: "020", name: "Corona Fúnebre Blanca con Banda Pésame", price: 49990, image: "../assets/foto20.webp", description: "Corona fúnebre con crisantemos, rosas blancas y lilies acompañada por una banda con dedicatoria personalizada. Ideal para honrar a un ser querido con elegancia.", categories: ["funebres", "precio-medio"] },
    { id: 21, code: "021", name: "Buqué Romántico Rosas Rosadas y Alstroemerias", price: 38990, image: "../assets/foto21.webp", description: "Ramo en doble papel blanco y rosa con rosas rosadas y alstroemerias blancas moteadas. Una composición fresca y delicada que evoca afecto sincero.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 22, code: "022", name: "Cofre Rosas Durazno y Asters con Ferrero", price: 36990, image: "../assets/foto22.webp", description: "Cofre de madera con rosas color durazno arriba, claveles rosados, asters morados y caja de Ferrero Rocher con corazón visible. Un regalo cargado de matices románticos.", categories: ["cajas", "rosas", "precio-medio"] },
    { id: 23, code: "023", name: "Arreglo Premium Girasoles, Rosas Azules y Globos", price: 156990, image: "../assets/foto23.webp", description: "Pieza espectacular con girasoles, rosas azules y globos rojos en forma de corazón sobre caja Te Amo. Diseño llamativo para celebraciones inolvidables.", categories: ["especiales", "girasoles", "rosas", "premium", "precio-alto"] },
    { id: 24, code: "024", name: "Canasta Osito con Rosas Azules y Gerbera", price: 51990, image: "../assets/foto24.webp", description: "Canasta de madera con rosas azules, gerbera rosada, baby's breath, chocolates Ferrero Rocher y osito blanco con moño. Mezcla tierna con un toque sofisticado.", categories: ["canastas", "rosas", "especiales", "precio-medio"] },
    { id: 25, code: "025", name: "Mega Bouquet Rosas Rojas Premium", price: 74990, image: "../assets/foto25.webp", description: "Bouquet abundante de rosas rojas y baby's breath, envuelto en papel negro con borde dorado y mariposa decorativa. Un clásico romántico llevado al máximo detalle.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 26, code: "026", name: "Buqué Rosas Rojas con Girasol Central", price: 34990, image: "../assets/foto26.webp", description: "Ramo con rosas rojas alrededor de un girasol central, envuelto en papel crema con borde dorado y moño rojo. Una combinación cálida que mezcla pasión y alegría.", categories: ["ramos", "rosas", "girasoles", "precio-medio"] },
    { id: 27, code: "027", name: "Mega Bouquet 50 Girasoles Premium", price: 224990, image: "../assets/foto27.webp", description: "Imponente bouquet con cerca de cincuenta girasoles en composición circular, envuelto en papel negro con estrellas. Un regalo monumental para iluminar celebraciones únicas.", categories: ["ramos", "girasoles", "premium", "precio-alto"] },
    { id: 28, code: "028", name: "Buqué Girasoles en Papel Estrella", price: 43990, image: "../assets/foto28.webp", description: "Ramo abundante con girasoles en composición circular, envuelto en papel negro con bordes blancos en forma de estrella y moño negro. Una pieza alegre y de alto impacto visual.", categories: ["ramos", "girasoles", "precio-medio"] },
    { id: 29, code: "029", name: "Buqué de Girasoles Estilo Rústico", price: 47990, image: "../assets/foto29.webp", description: "Ramo de girasoles con follaje, mariposa dorada y envoltura en papel kraft con rafia natural. Estilo campestre ideal para regalos cálidos y auténticos.", categories: ["ramos", "girasoles", "precio-medio"] },
    { id: 30, code: "030", name: "Buqué Girasoles y Rosas Rojas Love", price: 33990, image: "../assets/foto30.webp", description: "Combinación de girasoles, rosas rojas y baby's breath envuelta en papel kraft con estampado Love. Un mensaje vibrante de cariño y energía.", categories: ["ramos", "girasoles", "rosas", "precio-medio"] },
    { id: 31, code: "031", name: "Ramo Rústico Rosas Rojas", price: 37990, image: "../assets/foto31.webp", description: "Ramo compacto de rosas rojas envuelto en yute natural y moño rojo. Una pieza con aire artesanal, perfecta para regalos cálidos y sinceros.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 32, code: "032", name: "Buqué Margaritas Rosa y Blanco", price: 37990, image: "../assets/foto32.webp", description: "Ramo redondo con crisantemos margarita en tonos rosa y blanco, envuelto en papel lila y kraft. Una opción dulce y primaveral para regalos espontáneos.", categories: ["ramos", "precio-medio"] },
    { id: 33, code: "033", name: "Buqué de Tulipanes Blancos", price: 37990, image: "../assets/foto33.webp", description: "Tulipanes blancos envueltos en papel blanco con detalles dorados y moño marfil. Una propuesta minimalista y elegante que destaca por su pureza.", categories: ["ramos", "tulipanes", "precio-medio"] },
    { id: 34, code: "034", name: "Buqué de Claveles Rosados", price: 37990, image: "../assets/foto34.webp", description: "Ramo lleno de claveles rosados con follaje verde y envoltura en papel blanco translúcido. Una opción duradera y delicada para celebrar el cariño.", categories: ["ramos", "precio-medio"] },
    { id: 35, code: "035", name: "Set Premium Osito Love con 100 Rosas Rosadas", price: 299990, image: "../assets/foto35.webp", description: "Bouquet gigante con cien rosas rosadas en composición esférica y oso de peluche con corazón Love You sobre papel rosa con bordes dorados. Una declaración de amor monumental.", categories: ["ramos", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 36, code: "036", name: "Buqué Mixto Rosas Rojas y Rosadas", price: 37990, image: "../assets/foto36.webp", description: "Ramo con rosas rojas y rosadas, follaje fresco y gypsophila, envuelto en papel blanco con borde dorado y rafia natural. Una mezcla romántica con presentación impecable.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 37, code: "037", name: "Buqué Girasoles Envoltura Rosa", price: 37990, image: "../assets/foto37.webp", description: "Composición abundante de girasoles envuelta en papel rosa con cintas lilas y rosadas. Una propuesta colorida y femenina para celebrar fechas alegres.", categories: ["ramos", "girasoles", "precio-medio"] },
    { id: 38, code: "038", name: "Buqué de Tulipanes Multicolor", price: 62990, image: "../assets/foto38.webp", description: "Ramo con tulipanes en tonos rojo, amarillo y naranja, envuelto en papel turquesa con borde dorado y moño naranja. Disponible en 20 tulipanes $62.990 y 60 tulipanes $87.990.", categories: ["ramos", "tulipanes", "precio-medio"] },
    { id: 39, code: "039", name: "Ramo Premium 12 Rosas Rojas con Eucalipto", price: 43990, image: "../assets/foto39.webp", description: "Bouquet con docena de rosas rojas en pimpollo, eucalipto plateado y palma verde, envuelto en papel negro con estructura geométrica. Estilo moderno y muy elegante.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 40, code: "040", name: "Buqué de Lilies Naranjas y Amarillos", price: 43990, image: "../assets/foto40.webp", description: "Ramo con lilies en pimpollo en tonos naranjo y amarillo, follaje fresco y mariposa dorada, envuelto en papel blanco con detalle delicado. Una propuesta vibrante y duradera.", categories: ["ramos", "precio-medio"] },
    { id: 41, code: "041", name: "Buqué Tulipanes Amarillos con Girasol", price: 43990, image: "../assets/foto41.webp", description: "Combinación luminosa con tulipanes amarillos, girasol y gypsophila, envuelta en papel beige con borde dorado y moño amarillo. Un regalo lleno de luz para alegrar momentos.", categories: ["ramos", "tulipanes", "girasoles", "precio-medio"] },
    { id: 42, code: "042", name: "Ramo Compacto Rosas Rojas con Eucalipto", price: 43738, image: "../assets/foto42.webp", description: "Ramo redondo con rosas rojas, eucalipto y palma en papel negro con estructura geométrica. Una propuesta sobria, ideal para regalar de manera atemporal.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 43, code: "043", name: "Buqué Premium Rosas Rojas con Mariposas Doradas", price: 43990, image: "../assets/foto43.webp", description: "Bouquet abundante de rosas rojas envuelto en papel blanco con bordes dorados, decorado con mariposas doradas y plateadas. Una pieza romántica y refinada para sorprender con elegancia.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 44, code: "044", name: "Bouquet Rosas Rojas con Gypsophila y Moño Rojo", price: 74990, image: "../assets/foto44.webp", description: "Ramo grande de rosas rojas con nube de gypsophila blanca, envuelto en papel negro con borde dorado, mariposa dorada y moño rojo de raso. Estilo clásico y muy fotogénico para fechas memorables.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 45, code: "045", name: "Mega Bouquet Girasoles y Rosas Rojas con Gypsophila", price: 112990, image: "../assets/foto45.webp", description: "Bouquet espectacular en composición circular con girasoles, rosas rojas y abundante gypsophila, envuelto en papel negro. Una pieza monumental llena de luz y energía para celebraciones únicas.", categories: ["ramos", "girasoles", "rosas", "premium", "precio-alto"] },
    { id: 46, code: "046", name: "Buqué Rosas Rosadas Premium en Papel Blanco", price: 68990, image: "../assets/foto46.webp", description: "Ramo generoso de rosas rosadas en pimpollo, presentado en papel blanco con bordes dorados y suaves volantes. Una propuesta romántica y femenina ideal para declaraciones de cariño.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 47, code: "047", name: "Buqué Girasoles y Rosas Rojas con Helecho", price: 37990, image: "../assets/foto47.webp", description: "Combinación vibrante de girasoles, rosas rojas, helecho y gypsophila, envuelta en papel rojo y negro con moño rojo y mariposa plateada. Mezcla cálida ideal para alegrar cumpleaños y aniversarios.", categories: ["ramos", "girasoles", "rosas", "precio-medio"] },
    { id: 48, code: "048", name: "Corazón Rosas Rojas con Ferrero Rocher", price: 112990, image: "../assets/foto48.webp", description: "Bouquet en forma de corazón con rosas rojas en el contorno y chocolates Ferrero Rocher al centro, envuelto en papel negro estilo flor de loto. Una declaración romántica intensa de gran impacto.", categories: ["ramos", "corazones", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 49, code: "049", name: "Ramo Rosas Rojas con Eucalipto y Palma Verde", price: 39990, image: "../assets/foto49.webp", description: "Bouquet con rosas rojas en pimpollo, eucalipto y palma verde, envuelto en papel negro con estructura geométrica y moño rojo. Estilo moderno y sobrio para regalos elegantes.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 50, code: "050", name: "Bouquet Rosas Rojas en Papel Kraft Texturizado", price: 65990, image: "../assets/foto50.webp", description: "Ramo abundante de rosas rojas envuelto en papel kraft texturizado con detalles dorados y moño rojo de raso. Una pieza atemporal con presentación natural y muy elegante.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 51, code: "051", name: "Buqué Rosas Rosadas con Mariposa y Corazón Plateado", price: 62990, image: "../assets/foto51.webp", description: "Ramo circular de rosas rosadas y gypsophila envuelto en papel rosa traslúcido, decorado con mariposa y corazón plateado. Una propuesta dulce y delicada para enamorar.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 52, code: "052", name: "Mini Bouquet Rosas Rojas con Mariposa", price: 37990, image: "../assets/foto52.webp", description: "Ramo compacto de rosas rojas con gypsophila, envuelto en papel negro de borde blanco con mariposa plateada y moño rojo. Un detalle perfecto para sorpresas espontáneas.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 53, code: "053", name: "Bouquet Bicolor Rosas Rojas y Blancas Premium", price: 74990, image: "../assets/foto53.webp", description: "Ramo elegante con rosas rojas y blancas alternadas en papel negro con borde dorado y moño burdeo. Una combinación clásica y refinada para ocasiones formales.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 54, code: "054", name: "Bouquet Premium Rosas Rojas con Ferrero Rocher", price: 93990, image: "../assets/foto54.webp", description: "Bouquet abundante de rosas rojas con chocolates Ferrero Rocher distribuidos entre las flores, envuelto en papel negro con borde dorado y moño burdeo. Una experiencia gourmet y romántica al máximo nivel.", categories: ["ramos", "rosas", "especiales", "premium", "precio-alto"] }
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- QUITAR TILDES para búsqueda ---
function removeAccents(str) {
    return str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// --- FORMATEO DE PRECIO (CLP) ---
function formatCLP(price) {
    if (price === 0) return 'Cotización';
    return new Intl.NumberFormat('es-CL', {
        style: 'currency', currency: 'CLP', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}
// Alias por compatibilidad
function formatCOP(price) { return formatCLP(price); }

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.categories && p.categories.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- ACTUALIZAR CONTADOR DE RESULTADOS ---
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = count === 0 ? 'block' : 'none';
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    let productsToDisplay = products;

    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

    // Filtrar por categoría
    if (filters.length > 0 && filters[0] !== 'todos') {
        productsToDisplay = productsToDisplay.filter(p =>
            filters.some(f => p.categories && p.categories.includes(f))
        );
    }

    // Filtrar por búsqueda (sin tildes) - incluye código
    if (currentSearchQuery) {
        const query = removeAccents(currentSearchQuery);
        productsToDisplay = productsToDisplay.filter(p => {
            const name = removeAccents(p.name);
            const desc = removeAccents(p.description);
            const code = (p.code || '').toLowerCase();
            const cats = p.categories ? p.categories.map(c => removeAccents(c)).join(' ') : '';
            return name.includes(query) || desc.includes(query) || cats.includes(query) || code.includes(query);
        });
    }

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    container.innerHTML = '';
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const productHTML = `
            <div class="product-item" data-code="${product.code}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Antofagasta" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-code">Cód. ${product.code}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">${formatCLP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${escapedName}', '${product.price}', '${product.code}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// --- FUNCIONES DE WHATSAPP CON GOOGLE ADS CONVERSION ---
function contactWA() {
    const url = 'https://wa.me/56922437256?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-18163228199/rdZwCIbo-qwcEKe889RD',
            'value': 1.0,
            'currency': 'CLP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price, code) {
    const prefix = code ? `Cód. ${code} - ` : '';
    const message = `Hola, me interesa ${prefix}${productName} (${formatCLP(parseFloat(price))}). ¿Podrías darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/56922437256?text=${encodedMessage}`;
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-18163228199/rdZwCIbo-qwcEKe889RD',
            'value': 1.0,
            'currency': 'CLP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    currentLandingFilter = tag;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'todos') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// --- INICIALIZAR CATÁLOGO COMPLETO ---
function initCatalog() {
    window._catalogInitialized = true;
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value.trim();
            if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchQuery = '';
            this.style.display = 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }

    // Render inicial con todos los productos
    renderProducts();
}

// Inicializar automáticamente si no se define LANDING_PRIORITY_TAG manualmente
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
