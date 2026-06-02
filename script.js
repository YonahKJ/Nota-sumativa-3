new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    {
                        name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE",
                        x: 5,
                        y: 7200000,
                    },
                    { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                    { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                    {
                        name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL",
                        x: 4,
                        y: 4814000,
                    },
                    {
                        name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4030000,
                    },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    {
                        name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA",
                        x: 4,
                        y: 4763300,
                    },
                    { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                    {
                        name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA",
                        x: 5,
                        y: 5120000,
                    },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218 },
                    { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                    {
                        name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 6000000,
                    },
                    { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                    {
                        name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 5180000,
                    },
                    {
                        name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS",
                        x: 5,
                        y: 5900000,
                    },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 5,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Universidad acreditada por " + point.x + " años",
                            "Arancel $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});



const carrerasEstatalesDiurnas = [
                    { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATEGICO - U. DE ANTOFAGASTA", arancel: 5120000 },
                    { name: "DISEÑO - U. DE CHILE", arancel: 6486700 },
                    { name: "DISEÑO TEATRAL - U. DE CHILE", arancel: 5492400 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL - USACH", arancel: 6552000 },
                    { name: "DISEÑO INDUSTRIAL - USACH", arancel: 4989000 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL - UTEM", arancel: 4763300 },
                    { name: "DISEÑO INDUSTRIAL - UTEM", arancel: 4891000 },
                    { name: "DISEÑO GRÁFICO - U. DEL BÍO-BÍO", arancel: 4307000 },
                    { name: "DISEÑO INDUSTRIAL - U. DEL BÍO-BÍO", arancel: 4434000 },
                    { name: "DISEÑO - U. DE LA SERENA", arancel: 4071000 },
                    { name: "DISEÑO - U. DE PLAYA ANCHA", arancel: 4305000 },
                    { name: "DISEÑO - U. DE TALCA", arancel: 5887000 },
                    { name: "DISEÑO - U. DE VALPARAISO", arancel: 5713000 },
                    { name: "DISEÑO MULTIMEDIA - U. DE TARAPACÁ", arancel: 6555000 }
];

const carrerasPrivadasDiurnas = [
                    { name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", arancel: 8080000 },
                    { name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", arancel: 6915000 },
                    { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO - U. FINIS TERRAE", arancel: 7200000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT - U. FINIS TERRAE", arancel: 7320000 },
                    { name: "DISEÑO - U. FINIS TERRAE", arancel: 7320000 },
                    { name: "BACHILLERATO EN DISEÑO - U. DEL DESARROLLO", arancel: 10334175 },
                    { name: "DISEÑO - U. DEL DESARROLLO (SANTIAGO)", arancel: 9726283 },
                    { name: "DISEÑO - U. DEL DESARROLLO (CONCEPCIÓN)", arancel: 6038400 },
                    { name: "DISEÑO - U. AUSTRAL DE CHILE", arancel: 5887000 },
                    { name: "DISEÑO - U. CATÓLICA DE TEMUCO", arancel: 5276000 },
                    { name: "DISEÑO - U. DE LAS AMERICAS", arancel: 4730000 },
                    { name: "DISEÑO - U. DE VIÑA DEL MAR", arancel: 4277000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES - U. ANDRES BELLO (LAS CONDES)", arancel: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES - U. ANDRES BELLO (CONCEPCIÓN)", arancel: 5069000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL - U. ANDRES BELLO", arancel: 5069000 },
                    { name: "DISEÑO GRÁFICO - U. ANDRES BELLO", arancel: 7065000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES - U. MAYOR", arancel: 7214218 },
                    { name: "DISEÑO - U. DIEGO PORTALES", arancel: 7597000 },
                    { name: "INGENIERIA EN DISEÑO DE PRODUCTOS - U. TÉCNICA FEDERICO SANTA MARÍA (VALPARAÍSO)", arancel: 6000000 },
					{ name: "INGENIERIA EN DISEÑO DE PRODUCTOS - U. TÉCNICA FEDERICO SANTA MARÍA (SAN JOAQUIN)", arancel: 6000000 },
                    { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL - U. TÉCNICA FEDERICO SANTA MARÍA", arancel: 5180000 },
                    { name: "INGENIERIA EN DISEÑO - U. ADOLFO IBAÑEZ", arancel: 9754692 },
                    { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS - U. GABRIELA MISTRAL", arancel: 4814000 },
                    { name: "DISEÑO DE VIDEOJUEGOS - U. GABRIELA MISTRAL", arancel: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL - U. GABRIELA MISTRAL", arancel: 4814000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL - U. GABRIELA MISTRAL", arancel: 4814000 },
                    { name: "DISEÑO EN MARKETING DIGITAL - U. GABRIELA MISTRAL", arancel: 4814000 },
                    { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA - UNIACC", arancel: 4210000 },
                    { name: "DISEÑO DE INTERIORES Y AMBIENTES - UNIACC", arancel: 4030000 },
                    { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA - UNIACC", arancel: 4210000 },
                    { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS - U. BERNARDO O'HIGGINS", arancel: 5900000 }
];


const carrerasPrivadasSemipresenciales = [
                    { name: "TÉCNICO NIVEL SUPERIOR EN ANIMACIÓN DIGITAL Y VIDEOJUEGO - UNIACC", arancel: 2847000 }
];

const calcularPromedio = (arr) => arr.length === 0 ? 0 : arr.reduce((acc, c) => acc + c.arancel, 0) / arr.length;

new Chart(document.getElementById("otro"), {
    type: "bar",
    data: {
        labels: ["Universidades Estatales", "Universidades Privadas"],
        datasets: [
            {
                label: "Jornada Diurna",
                data: [calcularPromedio(carrerasEstatalesDiurnas), calcularPromedio(carrerasPrivadasDiurnas)], 
                backgroundColor: "rgba(241, 142, 45, 0.75)", 
                borderColor: "rgba(241, 142, 45, 1)",
                borderWidth: 1,
            },
            {
                label: "Jornada Semipresencial",
                data: [0, calcularPromedio(carrerasPrivadasSemipresenciales)], 
                backgroundColor: "rgba(54, 162, 235, 0.75)", 
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                    color: "#555",
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { 
                display: true,
                position: 'top',
                labels: { font: { family: "'Georama', sans-serif", size: 11 } }
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 13, weight: "700" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 12,
                callbacks: {
                    title: function(context) {
                        return context[0].chart.data.labels[context[0].dataIndex] + " (" + context[0].dataset.label + ")";
                    },
                    label: function (context) {
                        const grupoIndex = context.dataIndex; 
                        const datasetIndex = context.datasetIndex; 
                        
                        let listaCarreras = [];
                        if (grupoIndex === 0 && datasetIndex === 0) listaCarreras = carrerasEstatalesDiurnas;
                        else if (grupoIndex === 1 && datasetIndex === 0) listaCarreras = carrerasPrivadasDiurnas;
                        else if (grupoIndex === 1 && datasetIndex === 1) listaCarreras = carrerasPrivadasSemipresenciales;

                        const promedioBarra = context.raw;
                        let lineasTooltip = ["Promedio: $ " + promedioBarra.toLocaleString("es-CL"), ""];

                        listaCarreras.forEach(carrera => {
                            lineasTooltip.push("• " + carrera.name);
                            lineasTooltip.push("  Arancel: $ " + carrera.arancel.toLocaleString("es-CL"));
                        });

                        return lineasTooltip;
                    },
                },
            },
        },
    },
});
