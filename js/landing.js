// ===================================
// LANDING PAGE JS - Full Petalos Antofagasta
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO (62 productos) ---
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
    { id: 54, code: "054", name: "Bouquet Premium Rosas Rojas con Ferrero Rocher", price: 93990, image: "../assets/foto54.webp", description: "Bouquet abundante de rosas rojas con chocolates Ferrero Rocher distribuidos entre las flores, envuelto en papel negro con borde dorado y moño burdeo. Una experiencia gourmet y romántica al máximo nivel.", categories: ["ramos", "rosas", "especiales", "premium", "precio-alto"] },
    { id: 55, code: "055", name: "Ramo de Girasoles con Eucalipto y Paniculata", price: 27490, image: "../assets/foto55.webp", description: "Bouquet luminoso con girasoles frescos, eucalipto y paniculata blanca, envuelto en papel amarillo con interior gris y moño de seda en tonos cálidos. Una propuesta alegre y natural, perfecta para iluminar cualquier ocasión.", categories: ["ramos", "girasoles", "precio-bajo"] },
    { id: 56, code: "056", name: "Bouquet Rosas Rojas con Pino y Detalle Dorado", price: 16240, image: "../assets/foto56.webp", description: "Ramo elegante de rosas rojas con ramas de pino y paniculata, envuelto en papel negro con borde dorado y moño rojo con mariposa dorada. Estilo sofisticado y festivo, ideal para regalos especiales y celebraciones de fin de año.", categories: ["ramos", "rosas", "especiales", "precio-bajo"] },
    { id: 57, code: "057", name: "Bouquet de Gerberas Rosadas con Paniculata", price: 17490, image: "../assets/foto57.webp", description: "Ramo delicado de gerberas rosadas con paniculata blanca, envuelto en papel rosa de doble capa con bordes dorados y moño de raso. Una pieza dulce y romántica, perfecta para enamorar y dedicar afecto.", categories: ["ramos", "especiales", "precio-bajo"] },
    { id: 58, code: "058", name: "Mini Ramo de Girasol en Papel Kraft", price: 11240, image: "../assets/foto58.webp", description: "Mini bouquet con un girasol central, follaje verde fresco y mariposa decorativa dorada, envuelto en papel kraft con amarre de rafia natural. Un detalle compacto, rústico y encantador para sorprender de manera sencilla.", categories: ["ramos", "girasoles", "precio-bajo"] },
    { id: 59, code: "059", name: "Ramo Abundante de Margaritas Amarillas", price: 31240, image: "../assets/foto59.webp", description: "Bouquet generoso y volumétrico de margaritas y pompones amarillos, envuelto en papel amarillo pastel con base blanca y moño a juego. Una explosión de alegría y luz, ideal para cumpleaños y momentos felices.", categories: ["ramos", "especiales", "precio-medio"] },
    { id: 60, code: "060", name: "Bouquet Mixto Girasol y Crisantemos con Mariposa", price: 18740, image: "../assets/foto60.webp", description: "Ramo combinado con girasol central, crisantemos amarillos, follaje y mariposa decorativa plateada, envuelto en papel blanco con borde dorado y moño salmón. Un arreglo equilibrado entre frescura y elegancia para regalos versátiles.", categories: ["ramos", "girasoles", "especiales", "precio-bajo"] },
    { id: 61, code: "061", name: "Bouquet Premium de Girasoles con Mimosa", price: 31240, image: "../assets/foto61.webp", description: "Bouquet de gran formato con tres girasoles, mimosa amarilla y follaje fresco, envuelto en papel kraft y negro con detalles de yute natural. Estilo campestre premium, perfecto para regalos memorables y eventos especiales.", categories: ["ramos", "girasoles", "premium", "precio-medio"] },
    { id: 62, code: "062", name: "Ramo de Lirios con Globo Corazón Te Amo", price: 56240, image: "../assets/foto62.webp", description: "Ramo romántico de lirios rosados y blancos con paniculata y follaje verde, acompañado de globo metálico en forma de corazón con la leyenda Te Amo y envoltura lila con moño rosa. Una declaración de amor lista para sorprender.", categories: ["ramos", "especiales", "precio-medio"] },
    { id: 63, code: "063", name: "Arreglo Fúnebre Piramidal Rosas Blancas", price: 23625, image: "../assets/foto63.webp", description: "Arreglo fúnebre piramidal compuesto por rosas blancas, gypsophila y abundante follaje de helecho verde sobre fondo neutro. Una pieza serena y delicada que transmite respeto, paz y consuelo en momentos de despedida.", categories: ["funebres", "coronas-funebres", "precio-bajo"] },
    { id: 64, code: "064", name: "Bouquet Sol Girasol con Rosas Amarillas y Mariposas", price: 28740, image: "../assets/foto64.webp", description: "Ramo radiante con girasol central, rosas amarillas y blancas, paniculata y mariposas doradas decorativas, envuelto en papel celeste pastel con bordes dorados y moño a juego. Una composición luminosa y alegre, perfecta para cumpleaños, gracias y momentos de pura felicidad.", categories: ["ramos", "girasoles", "rosas", "especiales", "precio-bajo"] },
    { id: 65, code: "065", name: "Cartera Floral Rosa con Rosas, Alstroemerias y Ferrero", price: 41237, image: "../assets/foto65.webp", description: "Cartera floral en papel cream con asa dorada, rellena de rosas rosadas, alstroemerias, claveles rosados, follaje verde fresco y caja de Ferrero Rocher, rematada con envoltura lila y moño rosa. Un regalo tierno y sofisticado, ideal para sorprender a mamá, parejas o en cumpleaños femeninos.", categories: ["cajas", "rosas", "especiales", "precio-medio"] },
    { id: 66, code: "066", name: "Florero Clásico Docena Rosas Rojas con Tarjeta", price: 53738, image: "../assets/foto66.webp", description: "Florero de vidrio con docena de rosas rojas, gypsophila y follaje verde, coronado con tarjeta blanca y moño rojo en el cuello. Pieza atemporal y elegante para declaraciones románticas, aniversarios y San Valentín.", categories: ["especiales", "rosas", "precio-medio"] },
    { id: 67, code: "067", name: "Ramo Multicolor de Gerberas con Mariposa", price: 37488, image: "../assets/foto67.webp", description: "Ramo en papel rosa pastel con gerberas rosadas, gerberas amarillas, gypsophila blanca y mariposa decorativa lila. Composición vibrante y alegre, perfecta para cumpleaños, agradecimientos y momentos felices.", categories: ["ramos", "especiales", "precio-medio"] },
    { id: 68, code: "068", name: "Florero Primaveral Girasol y Rosas Mix", price: 43738, image: "../assets/foto68.webp", description: "Florero de vidrio texturizado con girasol central, rosas blancas y amarillas, gypsophila, helecho y mariposa rosa decorativa, rematado con moño amarillo. Pieza fresca y luminosa que combina romance y alegría para sorprender en cualquier ocasión especial.", categories: ["especiales", "girasoles", "rosas", "precio-medio"] },
    { id: 69, code: "069", name: "Corona Fúnebre Corazón con Tributo Personalizado", price: 75000, image: "../assets/foto69_1.webp", variations: ["../assets/foto69_1.webp","../assets/foto69_2.webp","../assets/foto69_3.webp","../assets/foto69_4.webp","../assets/foto69_5.webp"], description: "Corona fúnebre en forma de corazón sobre atril, elaborada con flores frescas y banda con dedicatoria personalizada del ser querido. Disponible en cinco variaciones cromáticas (rojo, blanco-amarillo, azul y combinaciones) para honrar con respeto y elegancia.", categories: ["funebres", "coronas-funebres", "precio-medio"] },
    { id: 70, code: "070", name: "Buqué Premium Mix Rosas Rojas y Blancas con Mariposas Doradas", price: 56238, originalPrice: 67485, image: "../assets/foto70.webp", description: "Ramo abundante con rosas rojas y blancas combinadas, envuelto en papel negro con borde dorado y rematado con tres mariposas filigrana doradas. Diseño imponente y elegante, perfecto para aniversarios y declaraciones románticas inolvidables.", categories: ["ramos", "rosas", "especiales", "premium", "precio-medio"] },
    { id: 71, code: "071", name: "Buqué Realeza Rosas Rojas con Corona, Ferrero y Mariposas", price: 73738, originalPrice: 88485, image: "../assets/foto71.webp", description: "Composición circular monumental de rosas rojas con corona dorada, chocolates Ferrero Rocher y mariposas filigrana, envuelto en papel blanco con bordes dorados. Una pieza majestuosa para sorprender en grande y conquistar con elegancia y lujo.", categories: ["ramos", "rosas", "especiales", "premium", "precio-medio"] },
    { id: 72, code: "072", name: "Mega Bouquet Rosas Rojas y Rosadas en Papel Translúcido", price: 62488, originalPrice: 74985, image: "../assets/foto72.webp", description: "Bouquet voluminoso con rosas rojas y rosa pastel alternadas, envuelto en papel translúcido rosa que realza su delicadeza. Un regalo romántico y abundante, ideal para aniversarios, cumpleaños y declaraciones de amor.", categories: ["ramos", "rosas", "premium", "precio-medio"] },
    { id: 73, code: "073", name: "Buqué Clásico 12 Rosas Rojas con Tarjeta y Moño", price: 31238, originalPrice: 37485, image: "../assets/foto73.webp", description: "Ramo compacto con docena de rosas rojas, envuelto en papel blanco con líneas doradas, tarjeta personalizable y moño rojo. Clásico atemporal para San Valentín, aniversarios y gestos románticos.", categories: ["ramos", "rosas", "precio-medio"] },
    { id: 74, code: "074", name: "Buqué Elegante Rosas Rojas con Mariposas Doradas", price: 37488, originalPrice: 44985, image: "../assets/foto74.webp", description: "Ramo de rosas rojas con follaje fresco, envoltura blanca con borde dorado y dos mariposas filigrana doradas en la parte superior. Una propuesta sobria y elegante para sorprender con clase en momentos especiales.", categories: ["ramos", "rosas", "especiales", "precio-medio"] }
,
    { id: 75, code: "075", name: "Buqué Ternura Infinita — Margaritas Fucsia y Blancas", price: 37500, originalPrice: 48000, image: "../assets/foto75.webp", description: "Cúpula abundante de margaritas fucsia y blancas abierta como flor de loto, envuelta en papel lila con filo dorado. Es el ramo que ella deja en el centro de la mesa para que todos pregunten quién se lo regaló. Alegría pura, sin necesidad de explicar nada.", categories: ["ramos", "novia", "especiales", "precio-medio"], novia: true },
    { id: 76, code: "076", name: "Buqué Primer Amor — Claveles Rosados", price: 31250, originalPrice: 40000, image: "../assets/foto76.webp", description: "Claveles rosados de pétalos aterciopelados con follaje fresco y flores silvestres blancas, envueltos en papel translúcido con amarre de rafia natural. Delicado como el primer “sí” y de los que siguen frescos más de dos semanas: cada mañana ella vuelve a recordar por qué la elegiste.", categories: ["ramos", "novia", "precio-medio"], novia: true },
    { id: 77, code: "077", name: "Buqué Reina por un Día — Lilium con Corona de Cristales", price: 56250, originalPrice: 72000, image: "../assets/foto77.webp", description: "Lilium rosados abiertos, gerberas, claveles y gypsophila coronados por una tiara de cristales, sobre papel rosa con vetas doradas. Este no es un ramo: es la prueba física de que ella es la reina. El que se elige cuando quieres que ese día no se le olvide nunca.", categories: ["ramos", "novia", "especiales", "premium", "precio-medio"], novia: true },
    { id: 78, code: "078", name: "Buqué Mi Sol — Girasoles con Ferrero Rocher", price: 48750, originalPrice: 62400, image: "../assets/foto78.webp", description: "Girasoles de gran porte con follaje fresco, caja de Ferrero Rocher y una mariposa azul, envueltos en papel kraft con borde satinado. Para la novia que te alegra los días grises: flores que buscan el sol y chocolate que se derrite mientras ella te agradece.", categories: ["ramos", "novia", "girasoles", "especiales", "precio-medio"], novia: true },
    { id: 79, code: "079", name: "Buqué Latido — Gerberas con Mariposa de Corazones", price: 27500, originalPrice: 35200, image: "../assets/foto79.webp", description: "Tres gerberas en fucsia, rosa y coral con nube de gypsophila y una mariposa plateada tallada en corazones, sobre papel lila con moño de raso. El detalle exacto para un “pensé en ti” sin motivo: pequeño en tamaño, enorme en intención.", categories: ["ramos", "novia", "especiales", "precio-bajo"], novia: true },
    { id: 80, code: "080", name: "Buqué Sonrisa — Margaritas Amarillas", price: 31250, originalPrice: 40000, image: "../assets/foto80.webp", description: "Brazada generosa de margaritas amarillas envuelta en papel crema estampado con moño a juego. El amarillo es el color que el cerebro lee como felicidad antes de alcanzar a pensarlo: llega y le cambia el ánimo del día entero, aunque afuera esté nublado.", categories: ["ramos", "novia", "precio-medio"], novia: true },
    { id: 81, code: "081", name: "Buqué Clásico Eterno — 5 Rosas Rojas con Eucalipto", price: 25000, originalPrice: 32000, image: "../assets/foto81.webp", description: "Cinco rosas rojas de tallo largo con eucalipto plateado y gypsophila, envueltas en papel negro translúcido. El rojo sobre negro es el contraste más deseado del mundo por una razón: cuando no sabes qué regalar, esto nunca falla.", categories: ["ramos", "novia", "rosas", "precio-bajo"], novia: true }
];


/* ============================================================
   CAMPAÑA DÍA DE LA NOVIA — 1 de agosto
   Contador, banner de sección y flyer flotante.
   Todo el movimiento se hace con transform/opacity, así el
   navegador lo resuelve en la GPU y no re-calcula el layout.
   ============================================================ */
var NOVIA_DEADLINE = new Date(2026, 7, 2, 0, 0, 0).getTime(); // fin del 1 de agosto de 2026
var NOVIA_WA = 'https://wa.me/56922437256?text=' + encodeURIComponent('Hola, quiero aprovechar las ofertas del Día de la Novia. ¿Me cuentan más?');
var noviaCdTimer = null;

function noviaTimeLeft() {
    var diff = NOVIA_DEADLINE - Date.now();
    if (diff <= 0) return null;
    return {
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60
    };
}

function noviaCountdownHTML(compact) {
    var labels = { d: 'días', h: 'hrs', m: 'min', s: 'seg' };
    var units = ['d', 'h', 'm', 's'].map(function (u) {
        return '<div class="novia-cd-unit"><span class="novia-cd-num" data-cd="' + u + '">--</span>' +
               '<span class="novia-cd-lbl">' + labels[u] + '</span></div>';
    }).join('');
    return '<div class="novia-countdown' + (compact ? ' novia-flyer-cd' : '') + '" data-novia-cd>' + units + '</div>';
}

function startNoviaCountdown() {
    if (noviaCdTimer) { clearInterval(noviaCdTimer); noviaCdTimer = null; }
    function tick() {
        var t = noviaTimeLeft();
        var boxes = document.querySelectorAll('[data-novia-cd]');
        if (!boxes.length) return;
        for (var i = 0; i < boxes.length; i++) {
            if (!t) { boxes[i].innerHTML = '<div class="novia-cd-unit"><span class="novia-cd-num">¡HOY!</span><span class="novia-cd-lbl">último día</span></div>'; continue; }
            var nums = boxes[i].querySelectorAll('[data-cd]');
            for (var j = 0; j < nums.length; j++) {
                var v = t[nums[j].getAttribute('data-cd')];
                var txt = v < 10 ? '0' + v : '' + v;
                if (nums[j].textContent !== txt) nums[j].textContent = txt;
            }
        }
        if (!t && noviaCdTimer) { clearInterval(noviaCdTimer); noviaCdTimer = null; }
    }
    tick();
    noviaCdTimer = setInterval(tick, 1000);
}

function noviaBannerHTML(count) {
    return '<div class="novia-banner">' +
             '<div class="novia-banner-text">' +
               '<h2><span class="novia-crown">👑</span>Especiales <span class="novia-gold">Día de la Novia</span></h2>' +
               '<p>' + count + ' arreglos seleccionados con hasta <strong>22% de descuento</strong> · Solo hasta el 1 de agosto</p>' +
             '</div>' +
             noviaCountdownHTML(false) +
           '</div>';
}

function noviaCardOverlay(product) {
    if (!product.novia) return '';
    var off = Math.round((1 - product.price / product.originalPrice) * 100);
    return '<div class="novia-ribbon"><span class="novia-spark">✦</span> DÍA DE LA NOVIA <span class="novia-spark">✦</span></div>' +
           '<div class="novia-savings">-' + off + '%<small>DCTO</small></div>';
}

/* --- Flyer flotante con carrusel de los 7 arreglos --- */
function initNoviaFlyer(items, fmt) {
    if (!items || !items.length) return;
    if (document.getElementById('noviaFlyerOverlay')) return;
    try { if (sessionStorage.getItem('noviaFlyerSeen') === '1') return; } catch (e) {}

    var slides = items.map(function (p, i) {
        return '<div class="promo-flyer-slide' + (i === 0 ? ' active' : '') + '" data-index="' + i + '">' +
                 '<div class="slide-img" style="background-image:url(\'' + p.image + '\')"></div>' +
                 '<div class="slide-text">' +
                   '<span class="slide-code">Cód. ' + p.code + '</span>' +
                   '<h3>' + p.name + '</h3>' +
                   '<div class="slide-prices">' +
                     '<span class="slide-old">' + fmt(p.originalPrice) + '</span>' +
                     '<span class="slide-new">' + fmt(p.price) + '</span>' +
                   '</div>' +
                 '</div>' +
               '</div>';
    }).join('');

    var dots = items.map(function (_, i) {
        return '<span class="' + (i === 0 ? 'active' : '') + '" data-index="' + i + '"></span>';
    }).join('');

    var overlay = document.createElement('div');
    overlay.className = 'promo-flyer-overlay novia-flyer-mode';
    overlay.id = 'noviaFlyerOverlay';
    overlay.innerHTML =
        '<div class="promo-flyer" role="dialog" aria-label="Ofertas Día de la Novia">' +
          '<button class="promo-flyer-close" id="noviaFlyerClose" aria-label="Cerrar">&times;</button>' +
          '<div class="promo-flyer-header">' +
            '<h2><span class="gold-spark">✦</span> Día de la Novia <span class="gold-spark">✦</span></h2>' +
            '<p>' + items.length + ' arreglos seleccionados con hasta 22% de descuento · Solo hasta el 1 de agosto</p>' +
            noviaCountdownHTML(true) +
          '</div>' +
          '<div class="promo-flyer-carousel" id="noviaFlyerCarousel">' +
            slides +
            '<button class="novia-nav prev" aria-label="Anterior">&#8249;</button>' +
            '<button class="novia-nav next" aria-label="Siguiente">&#8250;</button>' +
            '<div class="novia-flyer-dots">' + dots + '</div>' +
          '</div>' +
          '<div class="promo-flyer-footer">' +
            'Pedidos por <strong>WhatsApp +56 9 2243 7256</strong> · Despacho a domicilio en Antofagasta<br>' +
            '<a class="novia-flyer-cta" href="' + NOVIA_WA + '" target="_blank" rel="noopener">Quiero mi arreglo con descuento</a>' +
          '</div>' +
        '</div>';
    document.body.appendChild(overlay);

    var slideEls = overlay.querySelectorAll('.promo-flyer-slide');
    var dotEls = overlay.querySelectorAll('.novia-flyer-dots span');
    var current = 0;
    var timer = null;

    function show(idx) {
        slideEls[current].classList.remove('active');
        if (dotEls[current]) dotEls[current].classList.remove('active');
        current = (idx + slideEls.length) % slideEls.length;
        slideEls[current].classList.add('active');
        if (dotEls[current]) dotEls[current].classList.add('active');
    }
    function play() { if (!timer) timer = setInterval(function () { show(current + 1); }, 3200); }
    function pause() { if (timer) { clearInterval(timer); timer = null; } }
    function close() {
        pause();
        overlay.classList.remove('active');
        document.removeEventListener('keydown', onKey);
        setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 450);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    overlay.querySelector('#noviaFlyerClose').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('.novia-nav.prev').addEventListener('click', function () { pause(); show(current - 1); play(); });
    overlay.querySelector('.novia-nav.next').addEventListener('click', function () { pause(); show(current + 1); play(); });
    for (var i = 0; i < dotEls.length; i++) {
        (function (k) {
            dotEls[k].addEventListener('click', function () { pause(); show(k); play(); });
        })(i);
    }
    overlay.querySelector('.promo-flyer').addEventListener('mouseenter', pause);
    overlay.querySelector('.promo-flyer').addEventListener('mouseleave', play);
    document.addEventListener('keydown', onKey);

    setTimeout(function () {
        overlay.classList.add('active');
        startNoviaCountdown();
        play();
        try { sessionStorage.setItem('noviaFlyerSeen', '1'); } catch (e) {}
    }, 700);
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

    // Día de la Novia primero, después el resto de promociones
    const noviaProducts = productsToDisplay.filter(p => p.novia).sort((a, b) => a.id - b.id);
    const promoProducts = productsToDisplay.filter(p => p.promo && !p.novia);
    const nonPromoProducts = productsToDisplay.filter(p => !p.promo && !p.novia);
    productsToDisplay = [...noviaProducts, ...promoProducts, ...nonPromoProducts];

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    const htmlParts = [];
    if (noviaProducts.length) htmlParts.push(noviaBannerHTML(noviaProducts.length));
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
        const promoOverlay = product.novia ? noviaCardOverlay(product) : (product.promo ? `
            <div class="promo-ribbon"><span class="promo-spark">✦</span> OFERTA <span class="promo-spark">✦</span></div>
            <div class="promo-savings">-${Math.round((1 - product.price/product.originalPrice)*100)}%</div>
        ` : '');
        const priceHTML = product.originalPrice
            ? `<div class="price-block">
                   <span class="old-price">${formatCLP(product.originalPrice)}</span>
                   <span class="price promo-price">${formatCLP(product.price)}</span>
               </div>`
            : `<span class="price">${formatCLP(product.price)}</span>`;
        const productHTML = `
            <div class="product-item ${product.novia ? 'novia-card' : (product.promo ? 'promo-card' : '')}" data-code="${product.code}">
                ${promoOverlay}
                ${imageHTML}
                <div class="product-info">
                    <span class="product-code">Cód. ${product.code}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        ${priceHTML}
                        <button class="btn-order" onclick="orderWA('${escapedName}', '${product.price}', '${product.code}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        htmlParts.push(productHTML);
    });
    container.innerHTML = htmlParts.join('');

    if (noviaProducts.length) startNoviaCountdown();
    initLandingCarousels();
}

// --- FLYER FLOTANTE DÍA DE LA NOVIA ---
function initPromoFlyer() {
    initNoviaFlyer(products.filter(p => p.novia), formatCLP);
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
function injectNoviaFilterChip() {
    const bar = document.querySelector('.filters-container');
    if (!bar || bar.querySelector('[data-filter="novia"]')) return;
    if (!products.some(p => p.novia)) return;
    const chip = document.createElement('button');
    chip.className = 'filter-btn novia-filter';
    chip.setAttribute('data-filter', 'novia');
    chip.textContent = '✦ Día de la Novia';
    const todos = bar.querySelector('[data-filter="todos"]');
    if (todos && todos.nextSibling) bar.insertBefore(chip, todos.nextSibling);
    else bar.appendChild(chip);
}

function initCatalog() {
    window._catalogInitialized = true;
    injectNoviaFilterChip();
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
    initPromoFlyer();
}

// Inicializar automáticamente
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
