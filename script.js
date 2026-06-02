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

const aplicarJitter = (baseX) => baseX + (Math.random() * 0.3 - 0.15);

new Chart(document.getElementById("otro"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Jornada Diurna",
                backgroundColor: "rgba(241, 142, 45, 0.75)",
                borderColor: "rgba(241, 142, 45, 1)",
                borderWidth: 1,
                pointRadius: 6,
                pointHoverRadius: 8,
                data: [
                    { x: aplicarJitter(1), y: 5120000, name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO - UNIVERSIDAD DE ANTOFAGASTA" },
                    { x: aplicarJitter(1), y: 6486700, name: "DISEÑO - UNIVERSIDAD DE CHILE" },
                    { x: aplicarJitter(1), y: 5492400, name: "DISEÑO TEATRAL - UNIVERSIDAD DE CHILE" },
                    { x: aplicarJitter(1), y: 6552000, name: "DISEÑO EN COMUNICACIÓN VISUAL - UNIVERSIDAD DE SANTIAGO DE CHILE" },
                    { x: aplicarJitter(1), y: 4989000, name: "DISEÑO INDUSTRIAL - UNIVERSIDAD DE SANTIAGO DE CHILE" },
                    { x: aplicarJitter(1), y: 4763300, name: "DISEÑO EN COMUNICACIÓN VISUAL - UNIVERSIDAD TECNOLOGICA METROPOLITANA" },
                    { x: aplicarJitter(1), y: 4891000, name: "DISEÑO INDUSTRIAL - UNIVERSIDAD TECNOLOGICA METROPOLITANA" },
                    { x: aplicarJitter(1), y: 4307000, name: "DISEÑO GRÁFICO - UNIVERSIDAD DEL BÍO-BÍO" },
                    { x: aplicarJitter(1), y: 4434000, name: "DISEÑO INDUSTRIAL - UNIVERSIDAD DEL BÍO-BÍO" },
                    { x: aplicarJitter(1), y: 4071000, name: "DISEÑO - UNIVERSIDAD DE LA SERENA" },
                    { x: aplicarJitter(1), y: 4305000, name: "TÉCNICO NIVEL SUPERIOR EN DESARROLLO Y DISEÑO WEB - UNIVERSIDAD DE PLAYA ANCHA" },
                    { x: aplicarJitter(1), y: 5887000, name: "DISEÑO DE MODA PROFESIONAL - UNIVERSIDAD DE TALCA" },
                    { x: aplicarJitter(1), y: 5713000, name: "DISEÑO DIGITAL PROFESIONAL - UNIVERSIDAD DE VALPARAISO" },
                    { x: aplicarJitter(1), y: 6555000, name: "DISEÑO DE MODA PROFESIONAL - UNIVERSIDAD DE TARAPACA" },

                    { x: aplicarJitter(2), y: 8080000, name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE" },
                    { x: aplicarJitter(2), y: 6915000, name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO" },
                    { x: aplicarJitter(2), y: 7200000, name: "BACHILLERATO EN ARTES ARQUITECTURA Y DISEÑO - UNIVERSIDAD FINIS TERRAE" },
                    { x: aplicarJitter(2), y: 7320000, name: "DISEÑO DE MODA Y MANAGEMENT - UNIVERSIDAD FINIS TERRAE" },
                    { x: aplicarJitter(2), y: 7320000, name: "DISEÑO GRAFICO ESPECIALIDAD MULTIMEDIA - UNIVERSIDAD FINIS TERRAE" },
                    { x: aplicarJitter(2), y: 10364360, name: "BACHILLERATO EN DISEÑO - UNIVERSIDAD DEL DESARROLLO" },
                    { x: aplicarJitter(2), y: 9754692, name: "DISEÑO GRÁFICO DIGITAL - UNIVERSIDAD DEL DESARROLLO (SANTIAGO)" },
                    { x: aplicarJitter(2), y: 6056038, name: "DISEÑO GRÁFICO DIGITAL - UNIVERSIDAD DEL DESARROLLO (CONCEPCIÓN)" },
                    { x: aplicarJitter(2), y: 5887000, name: "DESARROLLO Y DISEÑO WEB - UNIVERSIDAD AUSTRAL DE CHILE" },
                    { x: aplicarJitter(2), y: 5276000, name: "DISEÑO DE AMBIENTES - UNIVERSIDAD CATOLICA DE TEMUCO" },
                    { x: aplicarJitter(2), y: 4730000, name: "DISEÑO INDUSTRIAL E INNOVACION EN PRODUCTOS - UNIVERSIDAD DE LAS AMERICAS" },
                    { x: aplicarJitter(2), y: 4277000, name: "DISEÑO DIGITAL Y WEB - UNIVERSIDAD DE VIÑA DEL MAR" },
                    { x: aplicarJitter(2), y: 7136000, name: "DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD ANDRES BELLO (SANTIAGO)" },
                    { x: aplicarJitter(2), y: 5069000, name: "DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD ANDRES BELLO (VIÑA)" },
                    { x: aplicarJitter(2), y: 7148000, name: "DISEÑO DE VESTUARIO Y TEXTIL - UNIVERSIDAD ANDRES BELLO" },
                    { x: aplicarJitter(2), y: 7065000, name: "DISEÑO - UNIVERSIDAD ANDRES BELLO" },
                    { x: aplicarJitter(2), y: 7214218, name: "DISEÑO MENCION INDUSTRIAL/GRAFICO AMBIENTES - UNIVERSIDAD MAYOR" },
                    { x: 2, y: 7597000, name: "DISEÑO GRAFICO DIGITAL - UNIVERSIDAD DIEGO PORTALES" },
                    { x: aplicarJitter(2), y: 6000000, name: "INGENIERIA EN DISEÑO DE PRODUCTOS - UNIVERSIDAD TECNICA FEDERICO SANTA MARIA" },
                    { x: aplicarJitter(2), y: 5180000, name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL - UNIVERSIDAD TECNICA FEDERICO SANTA MARIA" },
                    { x: aplicarJitter(2), y: 9754692, name: "TÉCNICO NIVEL SUPERIOR EN DISEÑO GRÁFICO - UNIVERSIDAD ADOLFO IBAÑEZ" },
                    { x: aplicarJitter(2), y: 4814000, name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS - UNIVERSIDAD GABRIELA MISTRAL" },
                    { x: aplicarJitter(2), y: 4814000, name: "DISEÑO DE VIDEOJUEGOS - UNIVERSIDAD GABRIELA MISTRAL" },
                    { x: aplicarJitter(2), y: 4814000, name: "DISEÑO EN ANIMACION DIGITAL - UNIVERSIDAD GABRIELA MISTRAL" },
                    { x: aplicarJitter(2), y: 4814000, name: "DISEÑO EN INTERACCION DIGITAL - UNIVERSIDAD GABRIELA MISTRAL" },
                    { x: aplicarJitter(2), y: 4814000, name: "DISEÑO EN MARKETING DIGITAL - UNIVERSIDAD GABRIELA MISTRAL" },
                    { x: aplicarJitter(2), y: 4210000, name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA - UNIACC" },
                    { x: aplicarJitter(2), y: 4210000, name: "DISEÑO GRAFICO ESPECIALIDAD MULTIMEDIA - UNIACC" },
                    { x: aplicarJitter(2), y: 5900000, name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD BERNARDO OHIGGINS" }
                ]
            },
            {
                label: "Jornada Semipresencial",
                backgroundColor: "rgba(54, 162, 235, 0.75)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
                pointRadius: 6,
                pointHoverRadius: 8,
                data: [
                    { x: aplicarJitter(2), y: 2847000, name: "DISEÑO DE JUEGOS DIGITALES - UNIACC" },
                    { x: aplicarJitter(2), y: 4814000, name: "DISEÑO DE INTERIORES Y AMBIENTES  - UNIACC" }
                ]
            }
        ]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                min: 0.4,
                max: 2.6,
                ticks: {
                    stepSize: 1,
                    callback: function(value) {
                        if (value === 1) return "Universidades Estatales";
                        if (value === 2) return "Universidades Privadas";
                        return "";
                    },
                    font: { family: "'Georama', sans-serif", size: 12, weight: "600" }
                },
                grid: { display: false }
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function(value) { return "$ " + value.toLocaleString("es-CL"); }
                }
            }
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
                titleFont: { family: "'Georama', sans-serif", size: 11, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    title: function(context) {
                        return context[0].raw.name;
                    },
                    label: function(context) {
                        const punto = context.raw;
                        return [
                            "Jornada: " + context.dataset.label,
                            "Arancel: $ " + punto.y.toLocaleString("es-CL")
                        ];
                    }
                }
            }
        }
    }
});
