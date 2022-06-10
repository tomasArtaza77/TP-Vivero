const products = [
    {
        id: 1,
        img: '../img/plantas/1(Peral).jpg',
        nombre_comun: 'Peral',
        nombre_cientifico: 'Pyrus communis',
        color: 'Verde',
        tipo_suelo: 'Basico',
        fase: '6 meses',
        ubicacion: 'Fila 1, Columna 1',
        estado: 'ListaParaVenta',
        familia: {
            nombre: 'Rosales',
            fruto: ' manzana, pera, membrillo, melocotón, ciruela, cereza, fresa, almendra, albaricoque, níspero, zarzamora, frambuesa, etc. ',
            cuidados: 'Regados cada 24hs,  necesitan suelo permeable, bien aireado (para evitar la proliferación de hongos en las hojas), profundo y sin compactar. Es la manera de que crezcan lozanos y saludables.'
        }
    },
    {
        id: 2,
        img: '../img/plantas/2(Fragaria).jpg',
        nombre_comun: 'Fresa',
        nombre_cientifico: 'Fragaria',
        color: 'Verde',
        tipo_suelo: 'Basico',
        fase: '2 meses',
        ubicacion: 'Fila 1, Columna 2',
        estado: 'EnLote',
        familia: {
            nombre: 'Rosales',
            fruto: ' manzana, pera, membrillo, melocotón, ciruela, cereza, fresa, almendra, albaricoque, níspero, zarzamora, frambuesa, etc. ',
            cuidados: 'Regados cada 24hs,  necesitan suelo permeable, bien aireado (para evitar la proliferación de hongos en las hojas), profundo y sin compactar. Es la manera de que crezcan lozanos y saludables.'
        }
            
        
    },
    {
        id: 3,
        img: '../img/plantas/3(Freesia).jpg',
        nombre_comun: 'Fresia',
        nombre_cientifico: 'Freesia',
        color: 'Amarillo',
        tipo_suelo: 'Basico',
        fase: '2 meses',
        ubicacion: 'Fila 2, Columna 1',
        estado: 'EnExperimento',
        familia: {
            nombre: 'Asparagales',
            fruto: 'cápsula loculicida normalmente dehiscente, puede ser dura o cartilaginosa y en ocasiones leñosa.',
            cuidados: 'Regado moderado, 2-3 veces por semana, abono antes de la floracion que es en primavera, con luz de sol y sombra parcial'
        }
    },
    {
        id: 4,
        img: '../img/plantas/4(Iris Germánica).jpg',
        nombre_comun: 'Iris',
        nombre_cientifico: 'Iris Germánica',
        color: 'Morado',
        tipo_suelo: 'Basico',
        fase: 'Floracion',
        ubicacion: 'Fila 2, Columna 2',
        estado: 'DeBaja',
        familia: {
            nombre: 'Asparagales',
            fruto: 'cápsula loculicida normalmente dehiscente, puede ser dura o cartilaginosa y en ocasiones leñosa.',
            cuidados: 'Regado moderado, 2-3 veces por semana, abono antes de la floracion que es en primavera, con luz de sol y sombra parcial'
        }
        
    },
    {
        id: 5,
        img: '../img/plantas/5(Patrinia scabiosifolia).jpg',
        nombre_comun: 'Nardo sirio',
        nombre_cientifico: 'Patrinia scabiosifolia',
        color: 'Dorado',
        tipo_suelo: 'Basico',
        fase: '1 mes',
        ubicacion: 'Fila 3, Columna 1',
        estado: 'ListaParaVenta',
        
        familia: {
            nombre: 'Dipsacales',
            fruto: 'baya o una drupa',
            cuidados: 'Regado regular, dos veces por semana. (Se puede aumentar en verano dependiendo de las necesidades), resistente a las heladas, con luz de semisombra y cuya ubicacion es idonea en el exterior'
        }
    },
    {
        id: 6,
        img: '../img/plantas/6(Fedia cornucopiae)Morado.jpg',
        nombre_comun: 'Trompetillas',
        nombre_cientifico: 'Fedia cornucopiae',
        color: 'Rosado/Morado',
        tipo_suelo: 'Acido',
        fase: '3 meses',
        ubicacion: 'Fila 3, Columna 2',
        estado: 'ListaParaVenta',
        familia: {
            nombre: 'Dipsacales',
            fruto: 'baya o una drupa',
            cuidados: 'Regado regular, dos veces por semana. (Se puede aumentar en verano dependiendo de las necesidades), resistente a las heladas, con luz de semisombra y cuya ubicacion es idonea en el exterior'
        }
    },
    {
        id: 7,
        img: '../img/plantas/7(Kalanchoe blossfediana).jpg',
        nombre_comun: 'Kalanchoe',
        nombre_cientifico: 'Kalanchoe blossfediana',
        color: 'Coral',
        tipo_suelo: 'Neutro',
        fase: '3 meses',
        ubicacion: 'Fila 4, Columna 1',
        estado: 'ListaParaVenta',
        familia: {
            nombre: 'Saxifragales',
            fruto: ' capsulares o foliculares',
            cuidados: 'Evitar el riego excesivo, que podria causar la muerte de la especie (producto de su podredumbre), requieren de mucha cantidad de luz diariamente (al menos medio dia de luz), Asimismo, la dotación de un sustrato compuesto por una mezcla entre arena y tierra, con buen drenaje, permite el desarrollo de estas plantas en buenas condiciones. También, se debe evitar que estas plantas se encuentren en sitios encerrados para disminuir el riesgo de que sean atacadas por hongos fitopatógenos.'
        }
    },
    {
        id: 8,
        img: '../img/plantas/8(Sempervivum).jpg',
        nombre_comun: 'Siempreviva',
        nombre_cientifico: 'Sempervivum',
        color: 'Verde',
        tipo_suelo: 'Neutro',
        fase: '9 meses',
        ubicacion: 'Fila 4, Columna 2',
        estado: 'EnLote',        
        familia: {
            nombre: 'Saxifragales',
            fruto: ' capsulares o foliculares',
            cuidados: 'Evitar el riego excesivo, que podria causar la muerte de la especie (producto de su podredumbre), requieren de mucha cantidad de luz diariamente (al menos medio dia de luz), Asimismo, la dotación de un sustrato compuesto por una mezcla entre arena y tierra, con buen drenaje, permite el desarrollo de estas plantas en buenas condiciones. También, se debe evitar que estas plantas se encuentren en sitios encerrados para disminuir el riesgo de que sean atacadas por hongos fitopatógenos.'
        }
    },
    {
        id: 9,
        img: '../img/plantas/9(Arenaria serpens).jpg',
        nombre_comun: 'Arenaria',
        nombre_cientifico: 'Arenaria serpens',
        color: 'Blanco',
        tipo_suelo: 'Neutro',
        fase: '2 meses',
        ubicacion: 'Fila 5, Columna 1',
        estado: 'EnLote',
        familia: {
            nombre: 'herbáceas',
            fruto: 'baya',
            cuidados: 'su floracion es durante todo el año, su ubicacion debe de ser preferentemente a pleno sol,La temperatura óptima varía entre los 24ºC de máxima y 10ºC de mínima, en un suelo bien drenado y con un pH entre 6,5 y 7,5. Se debe regar constantemente, pero sin encharcar. El abono es esencial una vez por semana en primavera y verano. El resto del año, una vez al mes.'
        }
    },
    {
        id: 10,
        img: '../img/plantas/10(Dianthus caryophyllus).jpg',
        nombre_comun: 'Clavel',
        nombre_cientifico: 'Dianthus caryophyllus',
        color: 'Rosaseo',
        tipo_suelo: 'Basico',
        fase: 'Floracion',
        ubicacion: 'Fila 5, Columna 2',
        estado: 'EnLote',
        familia: {
            nombre: 'herbáceas',
            fruto: 'baya',
            cuidados: 'su floracion es durante todo el año, su ubicacion debe de ser preferentemente a pleno sol,La temperatura óptima varía entre los 24ºC de máxima y 10ºC de mínima, en un suelo bien drenado y con un pH entre 6,5 y 7,5. Se debe regar constantemente, pero sin encharcar. El abono es esencial una vez por semana en primavera y verano. El resto del año, una vez al mes.'
        }
    },
    {
        id: 11,
        img: '../img/plantas/11(Cattleya trianae).jpg',
        nombre_comun: 'Lirio',
        nombre_cientifico: 'Cattleya trianae',
        color: 'Blanco',
        tipo_suelo: 'Neutro',
        fase: '3 meses',
        ubicacion: 'Fila 6, Columna 1',
        estado: 'ListaParaVenta',
        familia: {
            nombre: 'orquídeas',
            fruto: 'cápsula loculícida o baya',
            cuidados: 'Las orquídeas tienen su hábitat natural en las zonas tropicales y subtropicales con una altísima humedad ambiental que obtienen del aire y de la lluvia que escurre por las ramas de los árboles sobre los que crecen. En casa es necesario conseguir una humedad ambiental con métodos sencillos. Uno de ellos consiste en situar las plantas sobre una bandeja con agua y piedras, de manera que la maceta se coloca encima y las raíces no están en contacto con el agua, pero la evaporación de ésta aumenta la humedad del aire. necesitan estar en un lugar bien iluminado donde no reciban sol directo. La temperatura ambiente del interior de la casa es adecuada para cultivar los tipos más comunes de orquídeas (procura que las temperaturas mínimas no sean inferiores a 9 o 10ºC).'
        }
    },
    {
        id: 12,
        img: '../img/plantas/12(Phalaenopsis).jpg',
        nombre_comun: 'Orquídea mariposa',
        nombre_cientifico: 'Phalaenopsis',
        color: 'Rosado claro',
        tipo_suelo: 'Neutro',
        fase: '4 meses',
        ubicacion: 'Fila 6, Columna 2',
        estado: 'DeBaja',
        familia: {
            nombre: 'orquídeas',
            fruto: 'cápsula loculícida o baya',
            cuidados: 'Las orquídeas tienen su hábitat natural en las zonas tropicales y subtropicales con una altísima humedad ambiental que obtienen del aire y de la lluvia que escurre por las ramas de los árboles sobre los que crecen. En casa es necesario conseguir una humedad ambiental con métodos sencillos. Uno de ellos consiste en situar las plantas sobre una bandeja con agua y piedras, de manera que la maceta se coloca encima y las raíces no están en contacto con el agua, pero la evaporación de ésta aumenta la humedad del aire. necesitan estar en un lugar bien iluminado donde no reciban sol directo. La temperatura ambiente del interior de la casa es adecuada para cultivar los tipos más comunes de orquídeas (procura que las temperaturas mínimas no sean inferiores a 9 o 10ºC).'
        }
    },
    {
        id: 13,
        img: '../img/plantas/13(Tulipa).jpg',
        nombre_comun: 'Tulipán',
        nombre_cientifico: 'Tulipa',
        color: 'Amarillo',
        tipo_suelo: 'Acido',
        fase: '6 meses',
        ubicacion: 'Fila 7, Columna 1',
        estado: 'EnLote',
        familia: {
            nombre: 'Liliales',
            fruto: 'cápsula loculicida o septicida, ocasionalmente una baya',
            cuidados: 'Para que sus flores no pierdan el color, colócala dentro de la casa con la mayor luminosidad posible. Solo requiere riegos periódicos para evitar que el sustrato se seque. Mantén la tierra húmeda, pero asegúrate de que no queda agua encharcada. Tras la floración puede cortar los tallos y dejar que la planta se seque por completo, después ya podrás extraer los bulbos, limpiarlos y guardarlos para el próximo año.'
        }
    },
    {
        id: 14,
        img: '../img/plantas/14(Lilium).jpg',
        nombre_comun: 'Azucena',
        nombre_cientifico: 'Lilium',
        color: 'Dorado',
        tipo_suelo: 'Neutro',
        fase: '8 meses',
        ubicacion: 'Fila 7, Columna 2',
        estado: 'EnLote',
        familia: {
            nombre: 'Liliales',
            fruto: ' cápsula loculicida o septicida, ocasionalmente una baya',
            cuidados: 'Para que sus flores no pierdan el color, colócala dentro de la casa con la mayor luminosidad posible. Solo requiere riegos periódicos para evitar que el sustrato se seque. Mantén la tierra húmeda, pero asegúrate de que no queda agua encharcada. Tras la floración puede cortar los tallos y dejar que la planta se seque por completo, después ya podrás extraer los bulbos, limpiarlos y guardarlos para el próximo año.'
        }
    },
    {
        id: 15,
        img: '../img/plantas/15(Calendula officinalis).jpg',
        nombre_comun: 'Caléndula',
        nombre_cientifico: 'Calendula officinalis',
        color: 'Anaranjado',
        tipo_suelo: 'Acido',
        fase: '2 meses',
        ubicacion: 'Fila 8, Columna 1',
        estado: 'ListaParaVenta',
        familia: {
            nombre: 'Asterales',
            fruto: ' aquenio (frutos secos), cipselas',
            cuidados: 'Los Aster han de estar en el exterior, ya sea a pleno sol o en una zona donde reciban un mínimo de 3 horas de luz directa.Jardín: ha de ser fértil, con muy buen drenaje. Lo ideal es que el pH sea algo ácido, entre 5 y 6’5, pero no tienen problemas con los arcillosos siempre que absorban rápido el agua.Maceta: aconsejo poner una primera capa de pómice, akadama o similares y luego rellenar con sustrato de cultivo universal mezclado con un 30% de perlita. Hay que tener en cuenta no resisten la sequía, pero darles más agua de la que necesitan supone tener muchas posibilidades de perderlas. Y para ello es muy aconsejable comprobar la humedad de la tierra antes de regarlas, ya sea introduciendo un palo delgado de madera o un medidor de humedad digital.'
        }
    },
    {
        id: 16,
        img: '../img/plantas/16(Bellis perennis).jpg',
        nombre_comun: 'Margarita',
        nombre_cientifico: 'Bellis perennis',
        color: 'Blanco',
        tipo_suelo: 'Basico',
        fase: '2 meses',
        ubicacion: 'Fila 8, Columna 2',
        estado: 'ListaParaVenta',
        familia: {
            nombre: 'Asterales',
            fruto: 'aquenio (frutos secos), cipselas',
            cuidados: 'Los Aster han de estar en el exterior, ya sea a pleno sol o en una zona donde reciban un mínimo de 3 horas de luz directa.Jardín: ha de ser fértil, con muy buen drenaje. Lo ideal es que el pH sea algo ácido, entre 5 y 6’5, pero no tienen problemas con los arcillosos siempre que absorban rápido el agua.Maceta: aconsejo poner una primera capa de pómice, akadama o similares y luego rellenar con sustrato de cultivo universal mezclado con un 30% de perlita. Hay que tener en cuenta no resisten la sequía, pero darles más agua de la que necesitan supone tener muchas posibilidades de perderlas. Y para ello es muy aconsejable comprobar la humedad de la tierra antes de regarlas, ya sea introduciendo un palo delgado de madera o un medidor de humedad digital.'
        }
    }
];