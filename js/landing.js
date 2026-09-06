// ===================================
// LANDING PAGE JS - Full Petalos Antofagasta
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO (62 productos) ---
const products = [
    { id: 1, code: "001", name: "Buqué Premium Rosas Rojas con Ferrero", price: 85000, image: "../assets/foto1.webp", description: "Ramo de lujo con docena de rosas rojas y chocolates Ferrero Rocher, envuelto en papel negro con borde dorado y mariposas decorativas. Ideal para sorprender en aniversarios y declaraciones de amor.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 2, code: "002", name: "Mini Buqué de Girasol", price: 18990, image: "../assets/foto2.webp", description: "Pieza acogedora con girasol, gypsophila y helecho en papel beige tipo lino con moño rojo. Perfecto para alegrar un día cualquiera con un detalle delicado.", categories: ["ramos", "girasoles", "precio-bajo"] },
    { id: 3, code: "003", name: "Arreglo Corazón Rosas y Girasoles con Ferrero", price: 57990, image: "../assets/foto3.webp", description: "Caja en forma de corazón con rosas rojas, girasoles y chocolates Ferrero Rocher sobre follaje fresco. Una declaración intensa en formato compacto y muy fotogénico.", categories: ["corazones", "cajas", "rosas", "girasoles", "especiales", "precio-medio"] },
    { id: 4, code: "004", name: "Ramo 4 Rosas Rojas con Burbuja Te Amo", price: 57990, image: "../assets/foto4.webp", description: "Caja con rosas rojas coronada por una burbuja transparente con la leyenda Te Amo en confeti rojo. Un detalle romántico que combina flores, mensaje y movimiento.", categories: ["cajas", "rosas", "especiales", "precio-medio"] },
    { id: 5, code: "005", name: "Ramo Elegante 3 Rosas Rojas", price: 17990, image: "../assets/foto5.webp", description: "Bouquet sobrio con tres rosas rojas, gypsophila y follaje en papel blanco con bordes dorados. Una opción discreta para regalar con clase a cualquier hora.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 6, code: "006", name: "Arreglo Fúnebre Oval Rosas Blancas", price: 48000, image: "../assets/foto6.webp", description: "Arreglo ovalado de condolencias con rosas blancas, follaje verde y gypsophila sobre tarjeta de respeto. Ideal para acompañar momentos solemnes con elegancia.", categories: ["funebres", "precio-medio"] },
    { id: 7, code: "007", name: "Cofre Rosas Blancas y Margaritas", price: 51990, image: "../assets/foto7.webp", description: "Cofre de madera con torre de rosas blancas en la parte superior y base de margaritas blancas con follaje fresco. Estilo natural y sofisticado para ocasiones especiales.", categories: ["cajas", "rosas", "precio-medio"] },
    { id: 8, code: "008", name: "Buqué Dorado Rosas con Girasol y Ferrero", price: 25000, image: "../assets/foto8.webp", description: "Ramo en papel dorado con rosas rojas, girasol, chocolates Ferrero Rocher y mariposa nacarada. Una mezcla brillante de color y detalle gourmet.", categories: ["ramos", "rosas", "girasoles", "especiales", "precio-bajo"] },
    { id: 9, code: "009", name: "Set Premium Osito, Globos y Bouquet 100 Rosas", price: 99990, image: "../assets/foto9.webp", description: "Pack romántico con oso de peluche gigante, globos rojos en forma de corazón y bouquet voluminoso con rosas rojas y blancas concéntricas. Una sorpresa de gran impacto visual.", categories: ["ramos", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 10, code: "010", name: "Buqué Clásico Rosas Rojas con Gypsophila", price: 23000, image: "../assets/foto10.webp", description: "Ramo en papel negro con borde dorado, rosas rojas y nube de gypsophila blanca. Una propuesta atemporal pensada para enamorar sin esfuerzo.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 11, code: "011", name: "Corazón Premium Rosas Rosadas con Ferrero", price: 83990, image: "../assets/foto11.webp", description: "Arreglo en forma de corazón con rosas rosadas y un acento de rosa fucsia, rematado con mariposa dorada y borde de Ferrero Rocher. Una obra romántica de gran formato.", categories: ["corazones", "rosas", "premium", "precio-alto"] },
    { id: 12, code: "012", name: "Mega Bouquet Premium Rosas Rojas", price: 199990, image: "../assets/foto12.webp", description: "Bouquet monumental con más de cien rosas rojas en pimpollo, baby's breath y mariposa dorada, envuelto en papel negro con detalles oro. Pieza de impacto para conmemoraciones únicas.", categories: ["ramos", "rosas", "premium", "precio-alto"] },
    { id: 13, code: "013", name: "Ramo Bicolor con Ferrero Rocher", price: 37000, image: "../assets/foto13.webp", description: "Bouquet con rosas rojas y blancas alternadas, presentado con caja de chocolates Ferrero Rocher y moño rojo con mariposa dorada. Elegancia y dulzura en un solo regalo.", categories: ["ramos", "rosas", "especiales", "precio-medio"] },
    { id: 14, code: "014", name: "Florero Romántico con Globo Te Amo", price: 46990, image: "../assets/foto14.webp", description: "Florero de vidrio con rosas rojas, girasoles, claveles rosados y baby's breath, coronado por un globo en forma de corazón con la frase Te Amo. Listo para iluminar cualquier rincón.", categories: ["especiales", "rosas", "girasoles", "precio-medio"] },
    { id: 15, code: "015", name: "Buqué Rosas Azules con Claveles Blancos", price: 21990, image: "../assets/foto15.webp", description: "Ramo en papel negro con borde dorado, compuesto por rosas azules, claveles blancos y gypsophila. Una propuesta original para quienes buscan un regalo fuera de lo común.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 16, code: "016", name: "Canasta Te Amo con Osito y Globo Corazón", price: 32990, image: "../assets/foto16.webp", description: "Canasta rústica con rosas rojas, alstroemerias blancas con rosado, osito de peluche con corazón Te Amo y globo metálico en forma de corazón. Mezcla perfecta de ternura y detalle floral.", categories: ["canastas", "rosas", "especiales", "precio-medio"] },
    { id: 17, code: "017", name: "Caja Romántica con Gladiolos y Rosas Mix", price: 81990, image: "../assets/foto17.webp", description: "Caja blanca con vara de gladiolos rojos, rosas en tonos rojo, blanco y rosa, gypsophila y chocolates Ferrero Rocher con pétalos de rosa al pie. Una pieza majestuosa para sorprender en grande.", categories: ["cajas", "rosas", "premium", "precio-alto"] },
    { id: 18, code: "018", name: "Buqué Girasoles y Rosas con Mariposa", price: 40000, image: "../assets/foto18.webp", description: "Ramo con girasoles centrales y rosas rojas en papel negro con borde dorado y mariposa decorativa. Una mezcla alegre y vibrante para celebrar cumpleaños y aniversarios.", categories: ["ramos", "girasoles", "rosas", "precio-medio"] },
    { id: 19, code: "019", name: "Arreglo Fúnebre Domo Blanco", price: 70000, image: "../assets/foto19.webp", description: "Domo fúnebre con lilies blancos, crisantemos, rosas blancas y abundante follaje verde. Una pieza serena que transmite respeto y cariño en momentos difíciles.", categories: ["funebres", "precio-medio"] },
    { id: 20, code: "020", name: "Corona Fúnebre Blanca con Banda Pésame", price: 49990, image: "../assets/foto20.webp", description: "Corona fúnebre con crisantemos, rosas blancas y lilies acompañada por una banda con dedicatoria personalizada. Ideal para honrar a un ser querido con elegancia.", categories: ["funebres", "precio-medio"] },
    { id: 21, code: "021", name: "Buqué Romántico Rosas Rosadas y Alstroemerias", price: 43000, image: "../assets/foto21.webp", description: "Ramo en doble papel blanco y rosa con rosas rosadas y alstroemerias blancas moteadas. Una composición fresca y delicada que evoca afecto sincero.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 22, code: "022", name: "Cofre Rosas Durazno y Asters con Ferrero", price: 36990, image: "../assets/foto22.webp", description: "Cofre de madera con rosas color durazno arriba, claveles rosados, asters morados y caja de Ferrero Rocher con corazón visible. Un regalo cargado de matices románticos.", categories: ["cajas", "rosas", "precio-medio"] },
    { id: 23, code: "023", name: "Arreglo Premium Girasoles, Rosas Azules y Globos", price: 156990, image: "../assets/foto23.webp", description: "Pieza espectacular con girasoles, rosas azules y globos rojos en forma de corazón sobre caja Te Amo. Diseño llamativo para celebraciones inolvidables.", categories: ["especiales", "girasoles", "rosas", "premium", "precio-alto"] },
    { id: 24, code: "024", name: "Canasta Osito con Rosas Azules y Gerbera", price: 51990, image: "../assets/foto24.webp", description: "Canasta de madera con rosas azules, gerbera rosada, baby's breath, chocolates Ferrero Rocher y osito blanco con moño. Mezcla tierna con un toque sofisticado.", categories: ["canastas", "rosas", "especiales", "precio-medio"] },
    { id: 25, code: "025", name: "Mega Bouquet Rosas Rojas Premium", price: 74990, image: "../assets/foto25.webp", description: "Bouquet abundante de rosas rojas y baby's breath, envuelto en papel negro con borde dorado y mariposa decorativa. Un clásico romántico llevado al máximo detalle.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 26, code: "026", name: "Buqué Rosas Rojas con Girasol Central", price: 42000, image: "../assets/foto26.webp", description: "Ramo con rosas rojas alrededor de un girasol central, envuelto en papel crema con borde dorado y moño rojo. Una combinación cálida que mezcla pasión y alegría.", categories: ["ramos", "rosas", "girasoles", "precio-medio"] },
    { id: 27, code: "027", name: "Mega Bouquet 50 Girasoles Premium", price: 224990, image: "../assets/foto27.webp", description: "Imponente bouquet con cerca de cincuenta girasoles en composición circular, envuelto en papel negro con estrellas. Un regalo monumental para iluminar celebraciones únicas.", categories: ["ramos", "girasoles", "premium", "precio-alto"] },
    { id: 28, code: "028", name: "Buqué Girasoles en Papel Estrella", price: 43990, image: "../assets/foto28.webp", description: "Ramo abundante con girasoles en composición circular, envuelto en papel negro con bordes blancos en forma de estrella y moño negro. Una pieza alegre y de alto impacto visual.", categories: ["ramos", "girasoles", "precio-medio"] },
    { id: 29, code: "029", name: "Buqué de Girasoles Estilo Rústico", price: 47990, image: "../assets/foto29.webp", description: "Ramo de girasoles con follaje, mariposa dorada y envoltura en papel kraft con rafia natural. Estilo campestre ideal para regalos cálidos y auténticos.", categories: ["ramos", "girasoles", "precio-medio"] },
    { id: 30, code: "030", name: "Buqué Girasoles y Rosas Rojas Love", price: 40000, image: "../assets/foto30.webp", description: "Combinación de girasoles, rosas rojas y baby's breath envuelta en papel kraft con estampado Love. Un mensaje vibrante de cariño y energía.", categories: ["ramos", "girasoles", "rosas", "precio-medio"] },
    { id: 31, code: "031", name: "Ramo Rústico Rosas Rojas", price: 37990, image: "../assets/foto31.webp", description: "Ramo compacto de rosas rojas envuelto en yute natural y moño rojo. Una pieza con aire artesanal, perfecta para regalos cálidos y sinceros.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 32, code: "032", name: "Buqué Margaritas Rosa y Blanco", price: 37990, image: "../assets/foto32.webp", description: "Ramo redondo con crisantemos margarita en tonos rosa y blanco, envuelto en papel lila y kraft. Una opción dulce y primaveral para regalos espontáneos.", categories: ["ramos", "precio-medio"] },
    { id: 33, code: "033", name: "Buqué de Tulipanes Blancos", price: 37990, image: "../assets/foto33.webp", description: "Tulipanes blancos envueltos en papel blanco con detalles dorados y moño marfil. Una propuesta minimalista y elegante que destaca por su pureza.", categories: ["ramos", "tulipanes", "precio-medio"] },
    { id: 34, code: "034", name: "Buqué de Claveles Rosados", price: 37990, image: "../assets/foto34.webp", description: "Ramo lleno de claveles rosados con follaje verde y envoltura en papel blanco translúcido. Una opción duradera y delicada para celebrar el cariño.", categories: ["ramos", "precio-medio"] },
    { id: 35, code: "035", name: "Set Premium Osito Love con 100 Rosas Rosadas", price: 299990, image: "../assets/foto35.webp", description: "Bouquet gigante con cien rosas rosadas en composición esférica y oso de peluche con corazón Love You sobre papel rosa con bordes dorados. Una declaración de amor monumental.", categories: ["ramos", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 36, code: "036", name: "Buqué Mixto Rosas Rojas y Rosadas", price: 37990, image: "../assets/foto36.webp", description: "Ramo con rosas rojas y rosadas, follaje fresco y gypsophila, envuelto en papel blanco con borde dorado y rafia natural. Una mezcla romántica con presentación impecable.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 37, code: "037", name: "Buqué Girasoles Envoltura Rosa", price: 37990, image: "../assets/foto37.webp", description: "Composición abundante de girasoles envuelta en papel rosa con cintas lilas y rosadas. Una propuesta colorida y femenina para celebrar fechas alegres.", categories: ["ramos", "girasoles", "precio-medio"] },
    { id: 38, code: "038", name: "Buqué de Tulipanes Multicolor", price: 62990, image: "../assets/foto38.webp", description: "Ramo con tulipanes en tonos rojo, amarillo y naranja, envuelto en papel turquesa con borde dorado y moño naranja. Disponible en 20 tulipanes $62.990.", categories: ["ramos", "tulipanes", "precio-medio"] },
    { id: 39, code: "039", name: "Ramo Premium 12 Rosas Rojas con Eucalipto", price: 43990, image: "../assets/foto39.webp", description: "Bouquet con docena de rosas rojas en pimpollo, eucalipto plateado y palma verde, envuelto en papel negro con estructura geométrica. Estilo moderno y muy elegante.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 40, code: "040", name: "Buqué de Lilies Naranjas y Amarillos", price: 43990, image: "../assets/foto40.webp", description: "Ramo con lilies en pimpollo en tonos naranjo y amarillo, follaje fresco y mariposa dorada, envuelto en papel blanco con detalle delicado. Una propuesta vibrante y duradera.", categories: ["ramos", "precio-medio"] },
    { id: 41, code: "041", name: "Buqué Tulipanes Amarillos con Girasol", price: 43990, image: "../assets/foto41.webp", description: "Combinación luminosa con tulipanes amarillos, girasol y gypsophila, envuelta en papel beige con borde dorado y moño amarillo. Un regalo lleno de luz para alegrar momentos.", categories: ["ramos", "tulipanes", "girasoles", "precio-medio"] },
    { id: 42, code: "042", name: "Ramo Compacto Rosas Rojas con Eucalipto", price: 43738, image: "../assets/foto42.webp", description: "Ramo redondo con rosas rojas, eucalipto y palma en papel negro con estructura geométrica. Una propuesta sobria, ideal para regalar de manera atemporal.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 43, code: "043", name: "Buqué Premium Rosas Rojas con Mariposas Doradas", price: 56000, image: "../assets/foto43.webp", description: "Bouquet abundante de rosas rojas envuelto en papel blanco con bordes dorados, decorado con mariposas doradas y plateadas. Una pieza romántica y refinada para sorprender con elegancia.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 44, code: "044", name: "Bouquet Rosas Rojas con Gypsophila y Moño Rojo", price: 80000, image: "../assets/foto44.webp", description: "Ramo grande de rosas rojas con nube de gypsophila blanca, envuelto en papel negro con borde dorado, mariposa dorada y moño rojo de raso. Estilo clásico y muy fotogénico para fechas memorables.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 45, code: "045", name: "Mega Bouquet Girasoles y Rosas Rojas con Gypsophila", price: 112990, image: "../assets/foto45.webp", description: "Bouquet espectacular en composición circular con girasoles, rosas rojas y abundante gypsophila, envuelto en papel negro. Una pieza monumental llena de luz y energía para celebraciones únicas.", categories: ["ramos", "girasoles", "rosas", "premium", "precio-alto"] },
    { id: 46, code: "046", name: "Buqué Rosas Rosadas Premium en Papel Blanco", price: 79000, image: "../assets/foto46.webp", description: "Ramo generoso de rosas rosadas en pimpollo, presentado en papel blanco con bordes dorados y suaves volantes. Una propuesta romántica y femenina ideal para declaraciones de cariño.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 47, code: "047", name: "Buqué Girasoles y Rosas Rojas con Helecho", price: 37990, image: "../assets/foto47.webp", description: "Combinación vibrante de girasoles, rosas rojas, helecho y gypsophila, envuelta en papel rojo y negro con moño rojo y mariposa plateada. Mezcla cálida ideal para alegrar cumpleaños y aniversarios.", categories: ["ramos", "girasoles", "rosas", "precio-medio"] },
    { id: 48, code: "048", name: "Corazón Rosas Rojas con Ferrero Rocher", price: 112990, image: "../assets/foto48.webp", description: "Bouquet en forma de corazón con rosas rojas en el contorno y chocolates Ferrero Rocher al centro, envuelto en papel negro estilo flor de loto. Una declaración romántica intensa de gran impacto.", categories: ["ramos", "corazones", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 49, code: "049", name: "Ramo Rosas Rojas con Eucalipto y Palma Verde", price: 39990, image: "../assets/foto49.webp", description: "Bouquet con rosas rojas en pimpollo, eucalipto y palma verde, envuelto en papel negro con estructura geométrica y moño rojo. Estilo moderno y sobrio para regalos elegantes.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 50, code: "050", name: "Bouquet Rosas Rojas en Papel Kraft Texturizado", price: 65990, image: "../assets/foto50.webp", description: "Ramo abundante de rosas rojas envuelto en papel kraft texturizado con detalles dorados y moño rojo de raso. Una pieza atemporal con presentación natural y muy elegante.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 51, code: "051", name: "Buqué Rosas Rosadas con Mariposa y Corazón Plateado", price: 62000, image: "../assets/foto51.webp", description: "Ramo circular de rosas rosadas y gypsophila envuelto en papel rosa traslúcido, decorado con mariposa y corazón plateado. Una propuesta dulce y delicada para enamorar.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 52, code: "052", name: "Mini Bouquet Rosas Rojas con Mariposa", price: 44000, image: "../assets/foto52.webp", description: "Ramo compacto de rosas rojas con gypsophila, envuelto en papel negro de borde blanco con mariposa plateada y moño rojo. Un detalle perfecto para sorpresas espontáneas.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 53, code: "053", name: "Bouquet Bicolor Rosas Rojas y Blancas Premium", price: 81000, originalPrice: 96000, image: "../assets/foto53.webp", description: "Ramo elegante con rosas rojas y blancas alternadas en papel negro con borde dorado y moño burdeo. Una combinación clásica y refinada para ocasiones formales.", categories: ["ramos", "rosas", "premium", "precio-medio"], promo: true },
    { id: 54, code: "054", name: "Bouquet Premium Rosas Rojas con Ferrero Rocher", price: 99000, image: "../assets/foto54.webp", description: "Bouquet abundante de rosas rojas con chocolates Ferrero Rocher distribuidos entre las flores, envuelto en papel negro con borde dorado y moño burdeo. Una experiencia gourmet y romántica al máximo nivel.", categories: ["ramos", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 55, code: "055", name: "Ramo de Girasoles con Eucalipto y Paniculata", price: 27490, image: "../assets/foto55.webp", description: "Bouquet luminoso con girasoles frescos, eucalipto y paniculata blanca, envuelto en papel amarillo con interior gris y moño de seda en tonos cálidos. Una propuesta alegre y natural, perfecta para iluminar cualquier ocasión.", categories: ["ramos", "girasoles", "precio-bajo"] },
    { id: 56, code: "056", name: "Bouquet Rosas Rojas con Pino y Detalle Dorado", price: 16240, image: "../assets/foto56.webp", description: "Ramo elegante de rosas rojas con ramas de pino y paniculata, envuelto en papel negro con borde dorado y moño rojo con mariposa dorada. Estilo sofisticado y festivo, ideal para regalos especiales y celebraciones de fin de año.", categories: ["ramos", "rosas", "especiales", "precio-bajo"] },
    { id: 57, code: "057", name: "Bouquet de Gerberas Rosadas con Paniculata", price: 17490, image: "../assets/foto57.webp", description: "Ramo delicado de gerberas rosadas con paniculata blanca, envuelto en papel rosa de doble capa con bordes dorados y moño de raso. Una pieza dulce y romántica, perfecta para enamorar y dedicar afecto.", categories: ["ramos", "especiales", "precio-bajo"] },
    { id: 58, code: "058", name: "Mini Ramo de Girasol en Papel Kraft", price: 11240, image: "../assets/foto58.webp", description: "Mini bouquet con un girasol central, follaje verde fresco y mariposa decorativa dorada, envuelto en papel kraft con amarre de rafia natural. Un detalle compacto, rústico y encantador para sorprender de manera sencilla.", categories: ["ramos", "girasoles", "precio-bajo"] },
    { id: 59, code: "059", name: "Ramo Abundante de Margaritas Amarillas", price: 31240, image: "../assets/foto59.webp", description: "Bouquet generoso y volumétrico de margaritas y pompones amarillos, envuelto en papel amarillo pastel con base blanca y moño a juego. Una explosión de alegría y luz, ideal para cumpleaños y momentos felices.", categories: ["ramos", "especiales", "precio-medio"] },
    { id: 60, code: "060", name: "Bouquet Mixto Girasol y Crisantemos con Mariposa", price: 18740, image: "../assets/foto60.webp", description: "Ramo combinado con girasol central, crisantemos amarillos, follaje y mariposa decorativa plateada, envuelto en papel blanco con borde dorado y moño salmón. Un arreglo equilibrado entre frescura y elegancia para regalos versátiles.", categories: ["ramos", "girasoles", "especiales", "precio-bajo"] },
    { id: 61, code: "061", name: "Bouquet Premium de Girasoles con Mimosa", price: 31240, image: "../assets/foto61.webp", description: "Bouquet de gran formato con tres girasoles, mimosa amarilla y follaje fresco, envuelto en papel kraft y negro con detalles de yute natural. Estilo campestre premium, perfecto para regalos memorables y eventos especiales.", categories: ["ramos", "girasoles", "premium", "precio-medio"] },
    { id: 62, code: "062", name: "Ramo de Lirios con Globo Corazón Te Amo", price: 64000, image: "../assets/foto62.webp", description: "Ramo romántico de lirios rosados y blancos con paniculata y follaje verde, acompañado de globo metálico en forma de corazón con la leyenda Te Amo y envoltura lila con moño rosa. Una declaración de amor lista para sorprender.", categories: ["ramos", "especiales", "precio-medio"] },
    { id: 63, code: "063", name: "Arreglo Fúnebre Piramidal Rosas Blancas", price: 46000, image: "../assets/foto63.webp", description: "Arreglo fúnebre piramidal compuesto por rosas blancas, gypsophila y abundante follaje de helecho verde sobre fondo neutro. Una pieza serena y delicada que transmite respeto, paz y consuelo en momentos de despedida.", categories: ["funebres", "coronas-funebres", "precio-medio"] },
    { id: 64, code: "064", name: "Bouquet Sol Girasol con Rosas Amarillas y Mariposas", price: 33000, image: "../assets/foto64.webp", description: "Ramo radiante con girasol central, rosas amarillas y blancas, paniculata y mariposas doradas decorativas, envuelto en papel celeste pastel con bordes dorados y moño a juego. Una composición luminosa y alegre, perfecta para cumpleaños, gracias y momentos de pura felicidad.", categories: ["ramos", "girasoles", "rosas", "especiales", "precio-bajo"] },
    { id: 65, code: "065", name: "Cartera Floral Rosa con Rosas, Alstroemerias y Ferrero", price: 41237, image: "../assets/foto65.webp", description: "Cartera floral en papel cream con asa dorada, rellena de rosas rosadas, alstroemerias, claveles rosados, follaje verde fresco y caja de Ferrero Rocher, rematada con envoltura lila y moño rosa. Un regalo tierno y sofisticado, ideal para sorprender a mamá, parejas o en cumpleaños femeninos.", categories: ["cajas", "rosas", "especiales", "precio-medio"] },
    { id: 66, code: "066", name: "Florero Clásico Docena Rosas Rojas con Tarjeta", price: 53738, image: "../assets/foto66.webp", description: "Florero de vidrio con docena de rosas rojas, gypsophila y follaje verde, coronado con tarjeta blanca y moño rojo en el cuello. Pieza atemporal y elegante para declaraciones románticas, aniversarios y San Valentín.", categories: ["especiales", "rosas", "precio-medio"] },
    { id: 68, code: "068", name: "Florero Primaveral Girasol y Rosas Mix", price: 43738, image: "../assets/foto68.webp", description: "Florero de vidrio texturizado con girasol central, rosas blancas y amarillas, gypsophila, helecho y mariposa rosa decorativa, rematado con moño amarillo. Pieza fresca y luminosa que combina romance y alegría para sorprender en cualquier ocasión especial.", categories: ["especiales", "girasoles", "rosas", "precio-medio"] },
    { id: 69, code: "069", name: "Corona Fúnebre Corazón con Tributo Personalizado", price: 75000, image: "../assets/foto69_1.webp", variations: ["../assets/foto69_1.webp","../assets/foto69_2.webp","../assets/foto69_3.webp","../assets/foto69_4.webp","../assets/foto69_5.webp"], description: "Corona fúnebre en forma de corazón sobre atril, elaborada con flores frescas y banda con dedicatoria personalizada del ser querido. Disponible en cinco variaciones cromáticas (rojo, blanco-amarillo, azul y combinaciones) para honrar con respeto y elegancia.", categories: ["funebres", "coronas-funebres", "precio-medio"] },
    { id: 70, code: "070", name: "Buqué Premium Mix Rosas Rojas y Blancas con Mariposas Doradas", price: 65000, originalPrice: 81000, image: "../assets/foto70.webp", description: "Ramo abundante con rosas rojas y blancas combinadas, envuelto en papel negro con borde dorado y rematado con tres mariposas filigrana doradas. Diseño imponente y elegante, perfecto para aniversarios y declaraciones románticas inolvidables.", categories: ["ramos", "rosas", "especiales", "premium", "precio-medio"] },
    { id: 71, code: "071", name: "Buqué Realeza Rosas Rojas con Corona, Ferrero y Mariposas", price: 73738, originalPrice: 88485, image: "../assets/foto71.webp", description: "Composición circular monumental de rosas rojas con corona dorada, chocolates Ferrero Rocher y mariposas filigrana, envuelto en papel blanco con bordes dorados. Una pieza majestuosa para sorprender en grande y conquistar con elegancia y lujo.", categories: ["ramos", "rosas", "especiales", "premium", "precio-medio"] },
    { id: 72, code: "072", name: "Mega Bouquet Rosas Rojas y Rosadas en Papel Translúcido", price: 72000, originalPrice: 90000, image: "../assets/foto72.webp", description: "Bouquet voluminoso con rosas rojas y rosa pastel alternadas, envuelto en papel translúcido rosa que realza su delicadeza. Un regalo romántico y abundante, ideal para aniversarios, cumpleaños y declaraciones de amor.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 73, code: "073", name: "Buqué Clásico 12 Rosas Rojas con Tarjeta y Moño", price: 35000, originalPrice: 44000, image: "../assets/foto73.webp", description: "Ramo compacto con docena de rosas rojas, envuelto en papel blanco con líneas doradas, tarjeta personalizable y moño rojo. Clásico atemporal para San Valentín, aniversarios y gestos románticos.", categories: ["ramos", "rosas", "precio-medio"], promo: true },
    { id: 74, code: "074", name: "Buqué Elegante Rosas Rojas con Mariposas Doradas", price: 37488, originalPrice: 44985, image: "../assets/foto74.webp", description: "Ramo de rosas rojas con follaje fresco, envoltura blanca con borde dorado y dos mariposas filigrana doradas en la parte superior. Una propuesta sobria y elegante para sorprender con clase en momentos especiales.", categories: ["ramos", "rosas", "especiales", "precio-medio"] }
,
    { id: 75, code: "075", name: "Buqué Ternura Infinita — Margaritas Fucsia y Blancas", price: 37500, originalPrice: 48000, image: "../assets/foto75.webp", description: "Cúpula abundante de margaritas fucsia y blancas abierta como flor de loto, envuelta en papel lila con filo dorado. Es el ramo que ella deja en el centro de la mesa para que todos pregunten quién se lo regaló. Alegría pura, sin necesidad de explicar nada.", categories: ["ramos", "especiales", "precio-medio"], promo: true },
    { id: 76, code: "076", name: "Buqué Primer Amor — Claveles Rosados", price: 31250, originalPrice: 40000, image: "../assets/foto76.webp", description: "Claveles rosados de pétalos aterciopelados con follaje fresco y flores silvestres blancas, envueltos en papel translúcido con amarre de rafia natural. Delicado como el primer “sí” y de los que siguen frescos más de dos amarillasProducts: cada mañana ella vuelve a recordar por qué la elegiste.", categories: ["ramos", "precio-medio"], promo: true },
    { id: 77, code: "077", name: "Buqué Reina por un Día — Lilium con Corona de Cristales", price: 60000, originalPrice: 72000, image: "../assets/foto77.webp", description: "Lilium rosados abiertos, gerberas, claveles y gypsophila coronados por una tiara de cristales, sobre papel rosa con vetas doradas. Este no es un ramo: es la prueba física de que ella es la reina. El que se elige cuando quieres que ese día no se le olvide nunca.", categories: ["ramos", "especiales", "premium", "precio-medio"], promo: true },
    { id: 78, code: "078", name: "Buqué Mi Sol — Girasoles con Ferrero Rocher", price: 48750, originalPrice: 62400, image: "../assets/foto78.webp", description: "Girasoles de gran porte con follaje fresco, caja de Ferrero Rocher y una mariposa azul, envueltos en papel kraft con borde satinado. Para @@PROSE_AMARILLAS@@ los días grises: flores que buscan el sol y chocolate que se derrite mientras ella te agradece.", categories: ["ramos", "girasoles", "especiales", "precio-medio"] },
    { id: 79, code: "079", name: "Buqué Latido — Gerberas con Mariposa de Corazones", price: 27500, originalPrice: 35200, image: "../assets/foto79.webp", description: "Tres gerberas en fucsia, rosa y coral con nube de gypsophila y una mariposa plateada tallada en corazones, sobre papel lila con moño de raso. El detalle exacto para un “pensé en ti” sin motivo: pequeño en tamaño, enorme en intención.", categories: ["ramos", "especiales", "precio-bajo"], promo: true },
    { id: 80, code: "080", name: "Buqué Sonrisa — Margaritas Amarillas", price: 31250, originalPrice: 40000, image: "../assets/foto80.webp", description: "Brazada generosa de margaritas amarillas envuelta en papel crema estampado con moño a juego. El amarillo es el color que el cerebro lee como felicidad antes de alcanzar a pensarlo: llega y le cambia el ánimo del día entero, aunque afuera esté nublado.", categories: ["ramos", "precio-medio"] },
    { id: 81, code: "081", name: "Buqué Clásico Eterno — 5 Rosas Rojas con Eucalipto", price: 25000, originalPrice: 32000, image: "../assets/foto81.webp", description: "Cinco rosas rojas de tallo largo con eucalipto plateado y gypsophila, envueltas en papel negro translúcido. El rojo sobre negro es el contraste más deseado del mundo por una razón: cuando no sabes qué regalar, esto nunca falla.", categories: ["ramos", "rosas", "precio-bajo"] },
    { id: 82, code: "082", name: "Arreglo Fúnebre Blanco con Lilium y Cala", price: 35000, image: "../assets/foto82.webp", description: "Arreglo fúnebre en tonos blancos con lilium, cala, claveles, crisantemos y gypsophila, realzado con eucalipto y follaje verde fresco. Una composición amplia y luminosa que acompaña con respeto y serenidad en el velatorio o la despedida.", categories: ["funebres", "precio-medio"] },
    { id: 83, code: "083", name: "Palma Fúnebre Ovalada Blanca con Cala", price: 31000, image: "../assets/foto83.webp", description: "Palma fúnebre ovalada elaborada con cala blanca, crisantemos, claveles y gypsophila sobre base de pino y eucalipto. Su forma alargada la hace ideal para apoyar junto al féretro o en el sitio de descanso, transmitiendo paz y respeto.", categories: ["funebres", "coronas-funebres", "precio-medio"] },
    { id: 84, code: "084", name: "Arreglo de Condolencias Blanco con Calas y Gerberas Rosadas", price: 50000, image: "../assets/foto84.webp", description: "Amplio arreglo de condolencias en tonos blancos con calas, lilium, claveles, crisantemos y gypsophila, suavizado por gerberas rosadas y follaje fresco con eucalipto. Incluye tarjeta de dedicatoria. Una composición serena y luminosa para acompañar con respeto en la despedida.", categories: ["funebres", "precio-medio"] },
    { id: 85, code: "085", name: "Buqué Reina de la Noche — Rosas Negras con Ferrero Rocher", price: 70000, image: "../assets/foto85.webp", description: "Rosas negras con gypsophila negra, bombones Ferrero Rocher, corona dorada y mariposas doradas, envueltas en papel negro con filo dorado. Un buqué de lujo, dramático e inolvidable: para quien quiere regalar algo que nadie más se atreve a regalar.", categories: ["ramos", "rosas", "especiales", "premium", "precio-medio"] },
    { id: 86, code: "086", name: "Buqué Elegancia Blanca — Calas y Gerbera", price: 31250, image: "../assets/foto86.webp", description: "Calas blancas, gerbera y clavel blanco con gypsophila y helecho sobre papel negro, con mariposa dorada y tarjeta dedicada. Pureza y sobriedad en un mismo ramo: ideal para agradecer, felicitar o acompañar con elegancia.", categories: ["ramos", "especiales", "precio-medio"] },
    { id: 87, code: "087", name: "Mega Bouquet Rosas Fucsia con Gypsophila", price: 81250, image: "../assets/foto87.webp", description: "Ramo abundante de rosas fucsia con nubes de gypsophila y helecho, envuelto en papel negro con filo amarillo y moño de raso fucsia. Impacto puro: el regalo que se roba todas las miradas apenas entra por la puerta.", categories: ["ramos", "rosas", "premium", "precio-alto"] },
    { id: 88, code: "088", name: "Canasta de Condolencias con Girasol y Claveles", price: 50000, image: "../assets/foto88.webp", description: "Canasta de mimbre con girasol central, claveles rosados y crisantemos blancos y amarillos, con banda negra de pésame y moño rosado. Un acompañamiento cálido y respetuoso para expresar cariño en momentos difíciles.", categories: ["canastas", "funebres", "precio-medio"] },
    { id: 89, code: "089", name: "Buqué de Novia Lisianthus y Eucalipto", price: 43750, image: "../assets/foto89.webp", description: "Ramo de novia con lisianthus blancos, rosados y verdes, gypsophila y eucalipto, con mango envuelto en cinta natural. Delicado, romántico y pensado para las fotos que se miran toda la vida.", categories: ["ramos", "especiales", "precio-medio"] },
    { id: 90, code: "090", name: "Buqué Sol Radiante — Girasol y Margaritas Amarillas", price: 28750, originalPrice: 34500, image: "../assets/foto90.webp", description: "Girasol central rodeado de margaritas amarillas y gypsophila, envuelto en papel blanco con filo dorado y moño amarillo. Un ramo que ilumina la casa apenas cruza la puerta.", categories: ["ramos", "girasoles", "amarillas", "precio-bajo"], amarillas: true },
    { id: 91, code: "091", name: "Centro de Mesa Girasol con Gerberas Amarillas", price: 25000, originalPrice: 30000, image: "../assets/foto91.webp", description: "Base de helechos frescos con gerberas amarillas y blancas, gypsophila y un girasol elevado en tubo de vidrio. Perfecto para el centro de la mesa en cumpleaños, oficinas y celebraciones familiares.", categories: ["especiales", "girasoles", "amarillas", "precio-bajo"], amarillas: true },
    { id: 92, code: "092", name: "Cúpula de Cristal con Girasol Preservado", price: 43750, originalPrice: 52500, image: "../assets/foto92.webp", description: "Girasol preservado bajo cúpula de vidrio, sobre base de madera y piedras blancas. Un detalle que no se marchita: queda de recuerdo en el escritorio o el velador.", categories: ["especiales", "girasoles", "amarillas", "precio-medio"], amarillas: true },
    { id: 93, code: "093", name: "Buqué Primavera Amarilla con Rosa y Mariposa Dorada", price: 37500, originalPrice: 45000, image: "../assets/foto93.webp", description: "Margaritas amarillas, crisantemos blancos y una rosa amarilla al centro, con mariposa dorada, papel blanco y moño amarillo. Fresco, luminoso y alegre para cumpleaños y buenas noticias.", categories: ["ramos", "amarillas", "precio-medio"], amarillas: true },
    { id: 94, code: "094", name: "Buqué Rústico Girasol y Crisantemos Blancos", price: 17500, originalPrice: 21000, image: "../assets/foto94.webp", description: "Girasol acompañado de crisantemos blancos, solidago y eucalipto, envuelto en arpillera natural con moño amarillo. Sencillo, campestre y con mucho encanto.", categories: ["ramos", "girasoles", "amarillas", "precio-bajo"], amarillas: true },
    { id: 95, code: "095", name: "Buqué Campestre Girasol, Rosa Amarilla y Astromelias", price: 26250, originalPrice: 31500, image: "../assets/foto95.webp", description: "Girasol, rosa amarilla y astromelias durazno con gypsophila y helecho cuero, sobre papel de arpillera con moño amarillo. Calidez de campo para regalar sin esperar una fecha especial.", categories: ["ramos", "girasoles", "amarillas", "precio-bajo"], amarillas: true },
    { id: 96, code: "096", name: "Buqué Lluvia de Sol — Margaritas Amarillas", price: 41250, originalPrice: 49500, image: "../assets/foto96.webp", description: "Ramo abundante de margaritas amarillas con gypsophila, envuelto en papel blanco con filo dorado y moño amarillo. Volumen y color puro: el favorito para alegrarle el día a alguien.", categories: ["ramos", "amarillas", "precio-medio"], amarillas: true },
    { id: 97, code: "097", name: "Caja Premium de Girasoles con Tapa Negra", price: 32500, originalPrice: 39000, image: "../assets/foto97.webp", description: "Girasoles, margaritas amarillas y gypsophila montados dentro de una caja transparente con tapa negra y asa. Llega listo para regalar, sin necesidad de florero.", categories: ["cajas", "girasoles", "amarillas", "precio-medio"], amarillas: true },
    { id: 98, code: "098", name: "Florero Minimalista con Girasol y Flores Silvestres", price: 27500, originalPrice: 33000, image: "../assets/foto98.webp", description: "Un girasol con solidago y flores silvestres blancas en florero de vidrio delgado. Detalle sobrio y luminoso para escritorios, recepciones y regalos discretos.", categories: ["especiales", "girasoles", "amarillas", "precio-bajo"], amarillas: true },
    { id: 99, code: "099", name: "Florero Alegría con Gerberas Amarillas", price: 30000, originalPrice: 36000, image: "../assets/foto99.webp", description: "Dos gerberas amarillas con solidago y follaje fresco en florero de vidrio texturizado con moño amarillo. Pequeño, alegre y directo al corazón.", categories: ["especiales", "amarillas", "precio-bajo"], amarillas: true },
    { id: 100, code: "100", name: "Buqué Dorado de Girasoles con Eucalipto", price: 56250, originalPrice: 67500, image: "../assets/foto100.webp", description: "Girasoles en cascada con eucalipto y gypsophila, envueltos en papel dorado con moño amarillo. Presentación alargada y señorial para una entrega que impresiona.", categories: ["ramos", "girasoles", "amarillas", "precio-medio"], amarillas: true },
    { id: 101, code: "101", name: "Buqué Kraft de Girasoles con Matricaria y Eucalipto", price: 36250, originalPrice: 43500, image: "../assets/foto101.webp", description: "Girasoles con matricaria blanca y eucalipto, envueltos en papel kraft con interior lila, cinta beige y tarjeta dedicada. Estilo natural y sofisticado, muy fotogénico.", categories: ["ramos", "girasoles", "amarillas", "precio-medio"], amarillas: true },
    { id: 102, code: "102", name: "Buqué Tres Girasoles en Papel Rosa", price: 26250, originalPrice: 31500, image: "../assets/foto102.webp", description: "Tres girasoles con gypsophila y follaje fino, envueltos en papel rosa y blanco con moño crema. La combinación dulce y luminosa que nunca falla.", categories: ["ramos", "girasoles", "amarillas", "precio-bajo"], amarillas: true },
    { id: 103, code: "103", name: "Buqué Sol de Otoño — Margaritas Amarillas y Solidago", price: 37500, originalPrice: 45000, image: "../assets/foto103.webp", description: "Margaritas amarillas con solidago y follaje verde, en papel naranja y blanco con cinta verde y tarjeta dedicada. Cálido, vibrante y perfecto para agradecer.", categories: ["ramos", "amarillas", "precio-medio"], amarillas: true },
    { id: 104, code: "104", name: "Mega Bouquet Girasoles con Mariposas Doradas", price: 68750, originalPrice: 82500, image: "../assets/foto104.webp", description: "Corona abundante de girasoles sobre papel negro, con mariposas doradas y moño dorado. Contraste dramático y de lujo: el ramo que se recuerda por años.", categories: ["ramos", "girasoles", "amarillas", "premium", "precio-medio"], amarillas: true },
    { id: 105, code: "105", name: "Buqué Girasoles con Claveles Fucsia y Chocolate", price: 58750, originalPrice: 70500, image: "../assets/foto105.webp", description: "Girasoles rodeados de mini claveles fucsia y rosados, con tarjeta dedicada y chocolate incluido, sobre papel rosa. Flores y dulce en un solo regalo.", categories: ["ramos", "girasoles", "amarillas", "especiales", "precio-medio"], amarillas: true },
    { id: 106, code: "106", name: "Caja Corazón de Girasoles", price: 56250, originalPrice: 67500, image: "../assets/foto106.webp", description: "Girasoles y gypsophila montados en caja corazón blanca con moño amarillo. Amor y alegría en la misma pieza, lista para entregar.", categories: ["cajas", "girasoles", "amarillas", "precio-medio"], amarillas: true },
    { id: 107, code: "107", name: "Sombrerera Premium de Girasoles", price: 112500, originalPrice: 135000, image: "../assets/foto107.webp", description: "Sombrerera blanca colmada de girasoles con eucalipto fresco. Nuestra pieza más generosa en amarillo: presencia total para aniversarios, oficinas y grandes celebraciones.", categories: ["cajas", "girasoles", "amarillas", "premium", "precio-alto"], amarillas: true },
    { id: 201, code: "P01", name: "Peluche Oso Blanco Grande con Rosa", price: 0, image: "../assets/peluches/1.jpeg", description: "Osito de peluche blanco de gran tamaño, muy suave, sosteniendo una rosa. El acompañante perfecto para un ramo: se abraza y se queda para siempre.", categories: ["peluches"], peluche: true },
    { id: 202, code: "P02", name: "Peluche Oso Blanco Gigante", price: 0, image: "../assets/peluches/2.jpeg", description: "Oso de peluche blanco extra grande, de pelo suave y felpudo. Presencia enorme para cumpleaños, aniversarios y sorpresas que se recuerdan.", categories: ["peluches"], peluche: true },
    { id: 203, code: "P03", name: "Peluche Oso Café con Moño Brillante", price: 0, image: "../assets/peluches/3.jpeg", description: "Oso de peluche café de textura mullida con moño brillante al cuello. Clásico, cálido y del tamaño ideal para regalar junto a flores.", categories: ["peluches"], peluche: true },
    { id: 204, code: "P04", name: "Peluche Oso Beige con Almohada Decorativa", price: 0, image: "../assets/peluches/4.jpeg", description: "Oso de peluche beige de gran tamaño con almohadita decorativa entre los brazos. Tierno y muy fotogénico para la entrega.", categories: ["peluches"], peluche: true },
    { id: 205, code: "P05", name: "Peluche Oso Durazno con Cinta Tornasol", price: 0, image: "../assets/peluches/5.jpeg", description: "Oso de peluche en tono durazno con cinta tornasol al cuello. Suave, elegante y perfecto para acompañar un ramo o una caja.", categories: ["peluches"], peluche: true },
    { id: 206, code: "P06", name: "Peluche Conejo Rosado con Gorrito", price: 0, image: "../assets/peluches/6.jpeg", description: "Conejo de peluche rosado de orejas largas con gorrito lila. Dulce y coleccionable, ideal para cumpleaños y regalos infantiles.", categories: ["peluches"], peluche: true },
    { id: 207, code: "P07", name: "Peluche Orejón Rosado con Mochila", price: 0, image: "../assets/peluches/7.jpeg", description: "Peluche rosado de orejas largas con mochilita decorativa. Suave, divertido y muy pedido por adolescentes y jóvenes.", categories: ["peluches"], peluche: true },
    { id: 208, code: "P08", name: "Peluche Coleccionable Rosado con Capucha", price: 0, image: "../assets/peluches/8.jpeg", description: "Peluche coleccionable rosado con capucha de conejo y medalla dorada. Tendencia total: el regalo que se saca fotos solo.", categories: ["peluches"], peluche: true },
    { id: 209, code: "P09", name: "Peluche Azul Orejón con Corazón", price: 0, image: "../assets/peluches/9.jpeg", description: "Peluche azul de orejas grandes abrazando un corazón rojo. Un clásico moderno para declaraciones y aniversarios.", categories: ["peluches"], peluche: true },
    { id: 210, code: "P10", name: "Peluche Azul Orejón con Ranita", price: 0, image: "../assets/peluches/10.jpeg", description: "Peluche azul de orejas grandes con una ranita verde entre los brazos. Simpático, suave y de muy buen tamaño.", categories: ["peluches"], peluche: true },
    { id: 211, code: "P11", name: "Set de Peluches Azules con Patito", price: 0, image: "../assets/peluches/11.jpeg", description: "Dúo de peluches azules acompañados de un patito amarillo. Ideal para regalar en pareja o armar una sorpresa completa.", categories: ["peluches"], peluche: true },
    { id: 212, code: "P12", name: "Peluche Azul Orejón con Amiguito", price: 0, image: "../assets/peluches/12.jpeg", description: "Peluche azul de orejas grandes con un amiguito de colores entre las manos. Colorido, blandito y perfecto para alegrar el día.", categories: ["peluches"], peluche: true },
    { id: 213, code: "P13", name: "Peluche Coleccionable Blanco con Capucha", price: 0, image: "../assets/peluches/13.jpeg", description: "Peluche coleccionable blanco con capucha y medalla dorada. Suave, sofisticado y con mucha personalidad.", categories: ["peluches"], peluche: true },
];


/* ============================================================
   CAMPAÑA: MES DE LAS FLORES AMARILLAS (21 de septiembre)
   Contador regresivo al 21 de septiembre y banner
   de sección. Todo el movimiento se hace con transform/opacity,
   así el navegador lo resuelve en la GPU y no re-calcula el layout.
   ============================================================ */
var amarillasCdTimer = null;

/* La campaña del Mes de las Flores Amarillas cierra el 21 de septiembre
   a las 23:59:59 (hora local del visitante). Si el año ya pasó esa fecha,
   el contador salta automáticamente al 21 de septiembre del año siguiente. */
function amarillasDeadline() {
    var now = new Date();
    var year = now.getFullYear();
    var end = new Date(year, 8, 21, 23, 59, 59, 999); // 8 = septiembre
    if (end.getTime() < now.getTime()) end = new Date(year + 1, 8, 21, 23, 59, 59, 999);
    return end.getTime();
}

function amarillasTimeLeft() {
    var diff = amarillasDeadline() - Date.now();
    if (diff <= 0) return null;
    return {
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60
    };
}

function amarillasCountdownHTML(compact) {
    var labels = { d: 'días', h: 'hrs', m: 'min', s: 'seg' };
    var units = ['d', 'h', 'm', 's'].map(function (u) {
        return '<div class="amarillas-cd-unit"><span class="amarillas-cd-num" data-cd="' + u + '">--</span>' +
               '<span class="amarillas-cd-lbl">' + labels[u] + '</span></div>';
    }).join('');
    return '<div class="amarillas-countdown' + (compact ? ' amarillas-cd-compact' : '') + '" data-amarillas-cd>' + units + '</div>';
}

function startAmarillasCountdown() {
    if (amarillasCdTimer) { clearInterval(amarillasCdTimer); amarillasCdTimer = null; }
    function tick() {
        var t = amarillasTimeLeft();
        var boxes = document.querySelectorAll('[data-amarillas-cd]');
        if (!boxes.length) return;
        for (var i = 0; i < boxes.length; i++) {
            if (!t) { boxes[i].innerHTML = '<div class="amarillas-cd-unit"><span class="amarillas-cd-num">¡HOY!</span><span class="amarillas-cd-lbl">último día</span></div>'; continue; }
            var nums = boxes[i].querySelectorAll('[data-cd]');
            for (var j = 0; j < nums.length; j++) {
                var v = t[nums[j].getAttribute('data-cd')];
                var txt = v < 10 ? '0' + v : '' + v;
                if (nums[j].textContent !== txt) nums[j].textContent = txt;
            }
        }
    }
    tick();
    amarillasCdTimer = setInterval(tick, 1000);
}

function amarillasBannerHTML(count) {
    return '<div class="amarillas-banner">' +
             '<div class="amarillas-banner-text">' +
               '<h2><span class="amarillas-crown">🌻</span>Mes de las <span class="amarillas-gold">Flores Amarillas</span></h2>' +
               '<p>' + count + ' arreglos amarillos con <strong>17% de descuento</strong> · Hasta el <strong>21 de septiembre</strong></p>' +
             '</div>' +
             amarillasCountdownHTML(false) +
           '</div>';
}

function amarillasCardOverlay(product) {
    if (!product.amarillas) return '';
    var badge = '';
    if (product.originalPrice && product.originalPrice > product.price) {
        var off = Math.round((1 - product.price / product.originalPrice) * 100);
        badge = '<div class="amarillas-savings">-' + off + '%<small>DCTO</small></div>';
    }
    return '<div class="amarillas-ribbon"><span class="amarillas-spark">🌻</span> FLORES AMARILLAS <span class="amarillas-spark">🌻</span></div>' + badge;
}

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

    // Campaña Flores Amarillas primero, después el resto de promociones
    const amarillasProducts = productsToDisplay.filter(p => p.amarillas && !p.peluche).sort((a, b) => a.id - b.id);
    const promoProducts = productsToDisplay.filter(p => p.promo && !p.amarillas && !p.peluche);
    const nonPromoProducts = productsToDisplay.filter(p => !p.promo && !p.amarillas && !p.peluche);
    // Los peluches van siempre al final del catálogo
    const pelucheProducts = productsToDisplay.filter(p => p.peluche).sort((a, b) => a.id - b.id);
    productsToDisplay = [...amarillasProducts, ...promoProducts, ...nonPromoProducts, ...pelucheProducts];

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    const htmlParts = [];
    if (amarillasProducts.length) htmlParts.push(amarillasBannerHTML(amarillasProducts.length));
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const hasVariations = Array.isArray(product.variations) && product.variations.length > 1;
        const imageHTML = hasVariations
            ? `<div class="product-image has-carousel" data-code="${product.code}">
                  ${product.variations.map((src, i) => `<img src="${src}" alt="${product.name} variante ${i+1}" class="carousel-img${i===0?' active':''}" data-index="${i}" loading="lazy">`).join('')}
                  <div class="carousel-dots">
                      ${product.variations.map((_, i) => `<span class="carousel-dot${i===0?' active':''}" data-index="${i}"></span>`).join('')}
                  </div>
                  <span class="carousel-counter"><span class="carousel-current">1</span>/${product.variations.length}</span>
              </div>`
            : `<div class="product-image">
                  <img src="${product.image}" alt="${product.name} - Flores a domicilio Antofagasta" loading="lazy">
              </div>`;
        const promoOverlay = product.amarillas ? amarillasCardOverlay(product) : (product.promo ? `
            <div class="promo-ribbon"><span class="promo-spark">✦</span> OFERTA <span class="promo-spark">✦</span></div>
            <div class="promo-savings">-${Math.round((1 - product.price/product.originalPrice)*100)}%</div>
        ` : '');
        const peluchePriceHTML = `<div class="price-block">
                   <span class="peluche-note">Precio a consultar</span>
                   <span class="peluche-quote">Cotizar peluche</span>
               </div>`;
        const priceHTML = product.peluche ? peluchePriceHTML : product.originalPrice
            ? `<div class="price-block">
                   <span class="old-price">${formatCLP(product.originalPrice)}</span>
                   <span class="price promo-price">${formatCLP(product.price)}</span>
               </div>`
            : `<span class="price">${formatCLP(product.price)}</span>`;
        const productHTML = `
            <div class="product-item ${product.amarillas ? 'amarillas-card' : (product.peluche ? 'peluche-card' : (product.promo ? 'promo-card' : ''))}" data-code="${product.code}">
                ${promoOverlay}
                ${product.peluche ? `<div class="peluche-ribbon">🧸 PELUCHE</div>` : ''}
                ${imageHTML}
                <div class="product-info">
                    <span class="product-code">Cód. ${product.code}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        ${priceHTML}
                        <button class="btn-order" onclick="orderWA('${escapedName}', '${product.price}', '${product.code}')">
                            ${product.peluche ? 'Cotizar peluche' : 'Pedir por WhatsApp'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        htmlParts.push(productHTML);
    });
    container.innerHTML = htmlParts.join('');

    if (amarillasProducts.length) startAmarillasCountdown();
    initLandingCarousels();
}

// --- CAROUSEL para variaciones de producto ---
let landingCarouselTimers = [];
function initLandingCarousels() {
    landingCarouselTimers.forEach(t => clearInterval(t));
    landingCarouselTimers = [];
    document.querySelectorAll('.product-image.has-carousel').forEach(carousel => {
        const imgs = carousel.querySelectorAll('.carousel-img');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const counter = carousel.querySelector('.carousel-current');
        if (imgs.length <= 1) return;
        let current = 0;
        const setActive = (idx) => {
            imgs[current].classList.remove('active');
            if (dots[current]) dots[current].classList.remove('active');
            current = (idx + imgs.length) % imgs.length;
            imgs[current].classList.add('active');
            if (dots[current]) dots[current].classList.add('active');
            if (counter) counter.textContent = current + 1;
        };
        const timer = setInterval(() => setActive(current + 1), 3000);
        landingCarouselTimers.push(timer);
        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                setActive(i);
            });
        });
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
    const value = parseFloat(price);
    const message = (!value || value === 0)
        ? `Hola, quiero cotizar el peluche ${prefix}${productName}. ¿Me das precio y disponibilidad?`
        : `Hola, me interesa ${prefix}${productName} (${formatCLP(value)}). ¿Podrías darme más información?`;
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
function injectAmarillasFilterChip() {
    const bar = document.querySelector('.filters-container');
    if (!bar || bar.querySelector('[data-filter="amarillas"]')) return;
    if (!products.some(p => p.amarillas)) return;
    const chip = document.createElement('button');
    chip.className = 'filter-btn amarillas-filter';
    chip.setAttribute('data-filter', 'amarillas');
    chip.textContent = '🌻 Flores Amarillas';
    const todos = bar.querySelector('[data-filter="todos"]');
    if (todos && todos.nextSibling) bar.insertBefore(chip, todos.nextSibling);
    else bar.appendChild(chip);
}

function injectPeluchesFilterChip() {
    const bar = document.querySelector('.filters-container');
    if (!bar || bar.querySelector('[data-filter="peluches"]')) return;
    if (!products.some(p => p.peluche)) return;
    const chip = document.createElement('button');
    chip.className = 'filter-btn peluche-filter';
    chip.setAttribute('data-filter', 'peluches');
    chip.textContent = '🧸 Peluches';
    bar.appendChild(chip); // siempre al final de la barra de filtros
}

function initCatalog() {
    window._catalogInitialized = true;
    injectAmarillasFilterChip();
    injectPeluchesFilterChip();
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

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

    renderProducts();
}

// Inicializar automáticamente
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
