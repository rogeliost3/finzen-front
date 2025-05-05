const transactions = [
    {
        "idTransaction": 301,
        "date": "2025-02-04",
        "type": "expense",
        "amount": "376.86",
        "description": "Pago relacionado con Mantenimiento del vehículo",
        "balance": "-212.25"
    },
    {
        "idTransaction": 302,
        "date": "2025-02-07",
        "type": "expense",
        "amount": "392.58",
        "description": "Pago relacionado con Transporte público",
        "balance": "-319.91"
    },
    {
        "idTransaction": 303,
        "date": "2025-02-16",
        "type": "expense",
        "amount": "64.78",
        "description": "Pago relacionado con Libros, música y videojuegos",
        "balance": "-235.35"
    },
    {
        "idTransaction": 304,
        "date": "2025-01-14",
        "type": "expense",
        "amount": "167.10",
        "description": "Pago relacionado con Comisiones e intereses",
        "balance": "276.22"
    },
    {
        "idTransaction": 305,
        "date": "2025-02-03",
        "type": "expense",
        "amount": "90.05",
        "description": "Pago relacionado con Dentista, médico",
        "balance": "-47.17"
    },
    {
        "idTransaction": 306,
        "date": "2025-02-14",
        "type": "expense",
        "amount": "236.25",
        "description": "Pago relacionado con Electrónica",
        "balance": "-253.02"
    },
    {
        "idTransaction": 307,
        "date": "2025-01-29",
        "type": "income",
        "amount": "126.84",
        "description": "Ingreso relacionado con Ingresos por regalos",
        "balance": "-50.66"
    },
    {
        "idTransaction": 308,
        "date": "2025-03-04",
        "type": "expense",
        "amount": "194.91",
        "description": "Pago relacionado con Agua",
        "balance": "-445.88"
    },
    {
        "idTransaction": 309,
        "date": "2025-02-16",
        "type": "expense",
        "amount": "73.22",
        "description": "Pago relacionado con Deporte y gimnasio",
        "balance": "-308.57"
    },
    {
        "idTransaction": 310,
        "date": "2025-03-29",
        "type": "income",
        "amount": "285.85",
        "description": "Ingreso relacionado con Transacción entre cuentas",
        "balance": "-148.49"
    },
    {
        "idTransaction": 311,
        "date": "2025-01-12",
        "type": "income",
        "amount": "448.60",
        "description": "Ingreso relacionado con Alquiler de vehículo",
        "balance": "74.00"
    },
    {
        "idTransaction": 312,
        "date": "2025-03-31",
        "type": "expense",
        "amount": "42.59",
        "description": "Pago relacionado con Alquiler de vehículo",
        "balance": "-237.10"
    },
    {
        "idTransaction": 313,
        "date": "2025-03-15",
        "type": "income",
        "amount": "212.66",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "75.46"
    },
    {
        "idTransaction": 314,
        "date": "2025-02-11",
        "type": "expense",
        "amount": "76.77",
        "description": "Pago relacionado con Supermercados y alimentación",
        "balance": "-174.52"
    },
    {
        "idTransaction": 315,
        "date": "2025-01-23",
        "type": "expense",
        "amount": "258.26",
        "description": "Pago relacionado con Alquiler de vehículo",
        "balance": "-163.24"
    },
    {
        "idTransaction": 316,
        "date": "2025-02-06",
        "type": "expense",
        "amount": "53.93",
        "description": "Pago relacionado con Dentista, médico",
        "balance": "235.86"
    },
    {
        "idTransaction": 317,
        "date": "2025-01-25",
        "type": "expense",
        "amount": "284.82",
        "description": "Pago relacionado con Transacción entre cuentas",
        "balance": "-89.33"
    },
    {
        "idTransaction": 318,
        "date": "2025-01-19",
        "type": "expense",
        "amount": "81.14",
        "description": "Pago relacionado con Peluquería",
        "balance": "-315.66"
    },
    {
        "idTransaction": 319,
        "date": "2025-01-01",
        "type": "expense",
        "amount": "219.32",
        "description": "Pago relacionado con Billetes de viaje",
        "balance": "4385.68"
    },
    {
        "idTransaction": 320,
        "date": "2025-01-05",
        "type": "expense",
        "amount": "470.87",
        "description": "Pago relacionado con Comisiones e intereses",
        "balance": "1203.14"
    },
    {
        "idTransaction": 321,
        "date": "2025-01-26",
        "type": "expense",
        "amount": "252.03",
        "description": "Pago relacionado con Fianza y garantia como inquilino",
        "balance": "-267.43"
    },
    {
        "idTransaction": 322,
        "date": "2025-02-05",
        "type": "income",
        "amount": "353.67",
        "description": "Ingreso relacionado con Ingresos por indemnizaciones",
        "balance": "-128.19"
    },
    {
        "idTransaction": 323,
        "date": "2025-02-08",
        "type": "income",
        "amount": "422.17",
        "description": "Ingreso relacionado con Cafeterías y restaurantes",
        "balance": "227.22"
    },
    {
        "idTransaction": 324,
        "date": "2025-03-22",
        "type": "expense",
        "amount": "420.51",
        "description": "Pago relacionado con Transferencias",
        "balance": "-468.65"
    },
    {
        "idTransaction": 325,
        "date": "2025-02-20",
        "type": "expense",
        "amount": "31.27",
        "description": "Pago relacionado con Tarjetas financieras",
        "balance": "16.51"
    },
    {
        "idTransaction": 326,
        "date": "2025-01-16",
        "type": "expense",
        "amount": "209.98",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición",
        "balance": "-39.10"
    },
    {
        "idTransaction": 327,
        "date": "2025-01-14",
        "type": "expense",
        "amount": "144.58",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición",
        "balance": "131.64"
    },
    {
        "idTransaction": 328,
        "date": "2025-03-16",
        "type": "expense",
        "amount": "481.25",
        "description": "Pago relacionado con Seguro de hogar",
        "balance": "-161.22"
    },
    {
        "idTransaction": 329,
        "date": "2025-02-17",
        "type": "expense",
        "amount": "134.31",
        "description": "Pago relacionado con Transacción entre cuentas",
        "balance": "-235.59"
    },
    {
        "idTransaction": 330,
        "date": "2025-03-01",
        "type": "expense",
        "amount": "263.85",
        "description": "Pago relacionado con Comunidad",
        "balance": "-428.68"
    },
    {
        "idTransaction": 331,
        "date": "2025-01-18",
        "type": "expense",
        "amount": "79.68",
        "description": "Pago relacionado con Plan de pensiones",
        "balance": "-307.07"
    },
    {
        "idTransaction": 332,
        "date": "2025-01-11",
        "type": "expense",
        "amount": "330.19",
        "description": "Pago relacionado con Tren, avión, transporte",
        "balance": "-333.58"
    },
    {
        "idTransaction": 333,
        "date": "2025-02-11",
        "type": "expense",
        "amount": "56.54",
        "description": "Pago relacionado con Gasolina y combustible",
        "balance": "-231.06"
    },
    {
        "idTransaction": 334,
        "date": "2025-02-10",
        "type": "expense",
        "amount": "190.23",
        "description": "Pago relacionado con Seguro de hogar",
        "balance": "-332.12"
    },
    {
        "idTransaction": 335,
        "date": "2025-01-24",
        "type": "expense",
        "amount": "107.32",
        "description": "Pago relacionado con Comunidad derramas",
        "balance": "206.96"
    },
    {
        "idTransaction": 336,
        "date": "2025-01-12",
        "type": "expense",
        "amount": "382.81",
        "description": "Pago relacionado con Tren, avión, transporte",
        "balance": "-308.81"
    },
    {
        "idTransaction": 337,
        "date": "2025-01-08",
        "type": "income",
        "amount": "413.98",
        "description": "Ingreso relacionado con Óptica",
        "balance": "59.74"
    },
    {
        "idTransaction": 338,
        "date": "2025-03-19",
        "type": "expense",
        "amount": "109.53",
        "description": "Pago relacionado con Transferencias",
        "balance": "-439.52"
    },
    {
        "idTransaction": 339,
        "date": "2025-03-20",
        "type": "income",
        "amount": "339.43",
        "description": "Ingreso relacionado con Loterías y apuestas",
        "balance": "-139.98"
    },
    {
        "idTransaction": 340,
        "date": "2025-01-23",
        "type": "income",
        "amount": "477.52",
        "description": "Ingreso relacionado con Peajes",
        "balance": "314.28"
    },
    {
        "idTransaction": 341,
        "date": "2025-03-18",
        "type": "expense",
        "amount": "214.76",
        "description": "Pago relacionado con Otros gastos (otros)",
        "balance": "-130.91"
    },
    {
        "idTransaction": 342,
        "date": "2025-01-04",
        "type": "income",
        "amount": "384.49",
        "description": "Ingreso relacionado con Ingresos por indemnizaciones",
        "balance": "2442.57"
    },
    {
        "idTransaction": 343,
        "date": "2025-02-24",
        "type": "expense",
        "amount": "361.28",
        "description": "Pago relacionado con Cine, teatro y espectáculos",
        "balance": "-333.47"
    },
    {
        "idTransaction": 344,
        "date": "2025-01-12",
        "type": "income",
        "amount": "277.11",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "-31.70"
    },
    {
        "idTransaction": 345,
        "date": "2025-02-10",
        "type": "expense",
        "amount": "26.56",
        "description": "Pago relacionado con Mantenimiento del vehículo",
        "balance": "-358.68"
    },
    {
        "idTransaction": 346,
        "date": "2025-02-25",
        "type": "expense",
        "amount": "269.54",
        "description": "Pago relacionado con Plan de pensiones",
        "balance": "-408.41"
    },
    {
        "idTransaction": 347,
        "date": "2025-01-25",
        "type": "expense",
        "amount": "212.86",
        "description": "Pago relacionado con Comunidad",
        "balance": "-302.19"
    },
    {
        "idTransaction": 348,
        "date": "2025-01-25",
        "type": "income",
        "amount": "450.47",
        "description": "Ingreso relacionado con Transacción entre cuentas",
        "balance": "148.28"
    },
    {
        "idTransaction": 349,
        "date": "2025-02-26",
        "type": "expense",
        "amount": "126.96",
        "description": "Pago relacionado con Comisiones e intereses",
        "balance": "-93.37"
    },
    {
        "idTransaction": 350,
        "date": "2025-02-25",
        "type": "expense",
        "amount": "67.40",
        "description": "Pago relacionado con Seguro de hogar",
        "balance": "-475.81"
    },
    {
        "idTransaction": 351,
        "date": "2025-01-08",
        "type": "expense",
        "amount": "196.11",
        "description": "Pago relacionado con Gasolina y combustible",
        "balance": "-136.37"
    },
    {
        "idTransaction": 352,
        "date": "2025-02-13",
        "type": "income",
        "amount": "306.07",
        "description": "Ingreso relacionado con Ingresos por loteria",
        "balance": "178.76"
    },
    {
        "idTransaction": 353,
        "date": "2025-03-27",
        "type": "expense",
        "amount": "464.86",
        "description": "Pago relacionado con Ropa y complementos",
        "balance": "-343.49"
    },
    {
        "idTransaction": 354,
        "date": "2025-01-22",
        "type": "expense",
        "amount": "304.50",
        "description": "Pago relacionado con Transferencias",
        "balance": "-215.57"
    },
    {
        "idTransaction": 355,
        "date": "2025-02-24",
        "type": "expense",
        "amount": "159.83",
        "description": "Pago relacionado con Transacción entre cuentas",
        "balance": "-493.30"
    },
    {
        "idTransaction": 356,
        "date": "2025-02-27",
        "type": "expense",
        "amount": "241.48",
        "description": "Pago relacionado con Mantenimiento del hogar",
        "balance": "-249.41"
    },
    {
        "idTransaction": 357,
        "date": "2025-02-23",
        "type": "expense",
        "amount": "37.60",
        "description": "Pago relacionado con Suscripciones",
        "balance": "110.64"
    },
    {
        "idTransaction": 358,
        "date": "2025-01-29",
        "type": "expense",
        "amount": "353.44",
        "description": "Pago relacionado con Seguro de salud",
        "balance": "-404.10"
    },
    {
        "idTransaction": 359,
        "date": "2025-03-18",
        "type": "expense",
        "amount": "307.78",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "-438.69"
    },
    {
        "idTransaction": 360,
        "date": "2025-02-18",
        "type": "income",
        "amount": "290.13",
        "description": "Ingreso relacionado con Ingresos por otros pagos",
        "balance": "-170.90"
    },
    {
        "idTransaction": 361,
        "date": "2025-01-31",
        "type": "income",
        "amount": "144.82",
        "description": "Ingreso relacionado con Decoración y mobiliario",
        "balance": "-349.53"
    },
    {
        "idTransaction": 362,
        "date": "2025-03-07",
        "type": "income",
        "amount": "187.85",
        "description": "Ingreso relacionado con Parking y garaje",
        "balance": "-226.06"
    },
    {
        "idTransaction": 363,
        "date": "2025-01-05",
        "type": "expense",
        "amount": "225.39",
        "description": "Pago relacionado con Teléfono, TV e internet",
        "balance": "977.75"
    },
    {
        "idTransaction": 364,
        "date": "2025-02-12",
        "type": "income",
        "amount": "115.05",
        "description": "Ingreso relacionado con Ingresos por loteria",
        "balance": "-127.31"
    },
    {
        "idTransaction": 365,
        "date": "2025-03-05",
        "type": "income",
        "amount": "267.87",
        "description": "Ingreso relacionado con Ingresos por indemnizaciones",
        "balance": "256.48"
    },
    {
        "idTransaction": 366,
        "date": "2025-01-17",
        "type": "expense",
        "amount": "144.90",
        "description": "Pago relacionado con Parking y garaje",
        "balance": "-437.71"
    },
    {
        "idTransaction": 367,
        "date": "2025-01-04",
        "type": "expense",
        "amount": "63.19",
        "description": "Pago relacionado con Fianza y garantia como inquilino",
        "balance": "2379.38"
    },
    {
        "idTransaction": 368,
        "date": "2025-02-24",
        "type": "income",
        "amount": "183.12",
        "description": "Ingreso relacionado con Mantenimiento del vehículo",
        "balance": "-310.18"
    },
    {
        "idTransaction": 369,
        "date": "2025-03-07",
        "type": "expense",
        "amount": "25.24",
        "description": "Pago relacionado con Seguro de vida",
        "balance": "-251.30"
    },
    {
        "idTransaction": 370,
        "date": "2025-03-10",
        "type": "income",
        "amount": "196.53",
        "description": "Ingreso relacionado con Ingresos por indemnizaciones",
        "balance": "-225.21"
    },
    {
        "idTransaction": 371,
        "date": "2025-01-11",
        "type": "expense",
        "amount": "41.02",
        "description": "Pago relacionado con Libros, música y videojuegos",
        "balance": "-374.60"
    },
    {
        "idTransaction": 372,
        "date": "2025-01-16",
        "type": "income",
        "amount": "286.90",
        "description": "Ingreso relacionado con Ingresos por loteria",
        "balance": "247.80"
    },
    {
        "idTransaction": 373,
        "date": "2025-03-29",
        "type": "expense",
        "amount": "181.08",
        "description": "Pago relacionado con ONGs",
        "balance": "-329.57"
    },
    {
        "idTransaction": 374,
        "date": "2025-02-07",
        "type": "income",
        "amount": "302.81",
        "description": "Ingreso relacionado con Ingresos por loteria",
        "balance": "-17.10"
    },
    {
        "idTransaction": 375,
        "date": "2025-01-13",
        "type": "income",
        "amount": "242.67",
        "description": "Ingreso relacionado con Otros préstamos y avales",
        "balance": "-36.02"
    },
    {
        "idTransaction": 376,
        "date": "2025-03-27",
        "type": "expense",
        "amount": "139.69",
        "description": "Pago relacionado con Comisiones e intereses",
        "balance": "-483.18"
    },
    {
        "idTransaction": 377,
        "date": "2025-01-26",
        "type": "income",
        "amount": "393.61",
        "description": "Ingreso relacionado con Gastos de inmobiliaria",
        "balance": "126.18"
    },
    {
        "idTransaction": 378,
        "date": "2025-02-02",
        "type": "expense",
        "amount": "252.51",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "-494.19"
    },
    {
        "idTransaction": 379,
        "date": "2025-01-07",
        "type": "expense",
        "amount": "383.06",
        "description": "Pago relacionado con Pagos impuestos",
        "balance": "-354.24"
    },
    {
        "idTransaction": 380,
        "date": "2025-03-11",
        "type": "income",
        "amount": "338.78",
        "description": "Ingreso relacionado con Nómina o Pensión",
        "balance": "273.39"
    },
    {
        "idTransaction": 381,
        "date": "2025-01-01",
        "type": "expense",
        "amount": "382.47",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición",
        "balance": "4003.21"
    },
    {
        "idTransaction": 382,
        "date": "2025-03-22",
        "type": "income",
        "amount": "272.37",
        "description": "Ingreso relacionado con Cafeterías y restaurantes",
        "balance": "-196.28"
    },
    {
        "idTransaction": 383,
        "date": "2025-02-05",
        "type": "expense",
        "amount": "14.42",
        "description": "Pago relacionado con Alquiler de vehículo",
        "balance": "-142.61"
    },
    {
        "idTransaction": 384,
        "date": "2025-03-20",
        "type": "income",
        "amount": "403.36",
        "description": "Ingreso relacionado con Cajeros",
        "balance": "263.38"
    },
    {
        "idTransaction": 385,
        "date": "2025-03-20",
        "type": "expense",
        "amount": "225.62",
        "description": "Pago relacionado con Comunidad",
        "balance": "37.76"
    },
    {
        "idTransaction": 386,
        "date": "2025-03-01",
        "type": "expense",
        "amount": "63.50",
        "description": "Pago relacionado con Alquiler como inquilino",
        "balance": "-492.18"
    },
    {
        "idTransaction": 387,
        "date": "2025-02-24",
        "type": "income",
        "amount": "278.75",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "-31.43"
    },
    {
        "idTransaction": 388,
        "date": "2025-03-04",
        "type": "income",
        "amount": "466.48",
        "description": "Ingreso relacionado con Seguro de salud",
        "balance": "20.60"
    },
    {
        "idTransaction": 389,
        "date": "2025-01-17",
        "type": "income",
        "amount": "287.87",
        "description": "Ingreso relacionado con Luz y gas",
        "balance": "-149.84"
    },
    {
        "idTransaction": 390,
        "date": "2025-03-02",
        "type": "income",
        "amount": "265.04",
        "description": "Ingreso relacionado con Alquiler de vehículo",
        "balance": "-46.60"
    },
    {
        "idTransaction": 391,
        "date": "2025-01-14",
        "type": "expense",
        "amount": "174.60",
        "description": "Pago relacionado con Plan de pensiones",
        "balance": "-42.96"
    },
    {
        "idTransaction": 392,
        "date": "2025-02-15",
        "type": "expense",
        "amount": "58.26",
        "description": "Pago relacionado con Loterías y apuestas",
        "balance": "133.84"
    },
    {
        "idTransaction": 393,
        "date": "2025-01-05",
        "type": "expense",
        "amount": "201.26",
        "description": "Pago relacionado con Alquiler de vehículo",
        "balance": "776.49"
    },
    {
        "idTransaction": 394,
        "date": "2025-03-23",
        "type": "expense",
        "amount": "87.81",
        "description": "Pago relacionado con Parking y garaje",
        "balance": "-299.81"
    },
    {
        "idTransaction": 395,
        "date": "2025-02-03",
        "type": "expense",
        "amount": "389.35",
        "description": "Pago relacionado con Libros, música y videojuegos",
        "balance": "-436.52"
    },
    {
        "idTransaction": 396,
        "date": "2025-01-08",
        "type": "expense",
        "amount": "196.49",
        "description": "Pago relacionado con Electrónica",
        "balance": "-332.86"
    },
    {
        "idTransaction": 397,
        "date": "2025-02-26",
        "type": "expense",
        "amount": "220.57",
        "description": "Pago relacionado con Mantenimiento del vehículo",
        "balance": "-313.94"
    },
    {
        "idTransaction": 398,
        "date": "2025-02-01",
        "type": "income",
        "amount": "311.44",
        "description": "Ingreso relacionado con Libros, música y videojuegos",
        "balance": "-119.55"
    },
    {
        "idTransaction": 399,
        "date": "2025-01-03",
        "type": "expense",
        "amount": "305.66",
        "description": "Pago relacionado con Peajes",
        "balance": "2375.83"
    },
    {
        "idTransaction": 400,
        "date": "2025-02-07",
        "type": "expense",
        "amount": "468.72",
        "description": "Pago relacionado con Fianza y garantia como inquilino",
        "balance": "-485.82"
    },
    {
        "idTransaction": 401,
        "date": "2025-03-19",
        "type": "expense",
        "amount": "39.89",
        "description": "Pago relacionado con Alquiler como inquilino",
        "balance": "-479.41"
    },
    {
        "idTransaction": 402,
        "date": "2025-02-24",
        "type": "expense",
        "amount": "322.64",
        "description": "Pago relacionado con Transferencias",
        "balance": "-354.07"
    },
    {
        "idTransaction": 403,
        "date": "2025-03-16",
        "type": "income",
        "amount": "356.50",
        "description": "Ingreso relacionado con Ingresos por regalos",
        "balance": "195.28"
    },
    {
        "idTransaction": 404,
        "date": "2025-01-13",
        "type": "income",
        "amount": "479.34",
        "description": "Ingreso relacionado con Seguro de vida",
        "balance": "443.32"
    },
    {
        "idTransaction": 405,
        "date": "2025-03-04",
        "type": "expense",
        "amount": "307.37",
        "description": "Pago relacionado con Peajes",
        "balance": "-286.77"
    },
    {
        "idTransaction": 406,
        "date": "2025-01-26",
        "type": "income",
        "amount": "490.17",
        "description": "Ingreso relacionado con Ingresos de seguros",
        "balance": "616.35"
    },
    {
        "idTransaction": 407,
        "date": "2025-01-16",
        "type": "expense",
        "amount": "116.63",
        "description": "Pago relacionado con Cajeros",
        "balance": "131.17"
    },
    {
        "idTransaction": 408,
        "date": "2025-01-14",
        "type": "expense",
        "amount": "145.94",
        "description": "Pago relacionado con Seguro de vida",
        "balance": "-188.90"
    },
    {
        "idTransaction": 409,
        "date": "2025-03-31",
        "type": "income",
        "amount": "340.13",
        "description": "Ingreso relacionado con Alquiler como inquilino",
        "balance": "103.03"
    },
    {
        "idTransaction": 410,
        "date": "2025-03-31",
        "type": "expense",
        "amount": "292.02",
        "description": "Pago relacionado con Gasolina y combustible",
        "balance": "-188.99"
    },
    {
        "idTransaction": 411,
        "date": "2025-03-12",
        "type": "expense",
        "amount": "491.46",
        "description": "Pago relacionado con Otros gastos (otros)",
        "balance": "-478.53"
    },
    {
        "idTransaction": 412,
        "date": "2025-02-21",
        "type": "expense",
        "amount": "456.01",
        "description": "Pago relacionado con Mantenimiento del hogar",
        "balance": "-439.50"
    },
    {
        "idTransaction": 413,
        "date": "2025-03-22",
        "type": "expense",
        "amount": "6.46",
        "description": "Pago relacionado con Plan de pensiones",
        "balance": "-202.74"
    },
    {
        "idTransaction": 414,
        "date": "2025-03-08",
        "type": "expense",
        "amount": "143.39",
        "description": "Pago relacionado con Suscripciones",
        "balance": "284.81"
    },
    {
        "idTransaction": 415,
        "date": "2025-02-01",
        "type": "income",
        "amount": "448.18",
        "description": "Ingreso relacionado con ONGs",
        "balance": "328.63"
    },
    {
        "idTransaction": 416,
        "date": "2025-01-01",
        "type": "income",
        "amount": "245.22",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "4248.43"
    },
    {
        "idTransaction": 417,
        "date": "2025-02-27",
        "type": "income",
        "amount": "494.49",
        "description": "Ingreso relacionado con Otros gastos (otros)",
        "balance": "245.08"
    },
    {
        "idTransaction": 418,
        "date": "2025-01-24",
        "type": "expense",
        "amount": "319.99",
        "description": "Pago relacionado con Libros, música y videojuegos",
        "balance": "-113.03"
    },
    {
        "idTransaction": 419,
        "date": "2025-02-18",
        "type": "income",
        "amount": "409.30",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "238.40"
    },
    {
        "idTransaction": 420,
        "date": "2025-03-23",
        "type": "income",
        "amount": "471.58",
        "description": "Ingreso relacionado con Tarjetas financieras",
        "balance": "171.77"
    },
    {
        "idTransaction": 421,
        "date": "2025-02-02",
        "type": "income",
        "amount": "267.87",
        "description": "Ingreso relacionado con Ingresos por loteria",
        "balance": "-226.32"
    },
    {
        "idTransaction": 422,
        "date": "2025-01-16",
        "type": "expense",
        "amount": "249.57",
        "description": "Pago relacionado con ONGs",
        "balance": "-118.40"
    },
    {
        "idTransaction": 423,
        "date": "2025-01-15",
        "type": "income",
        "amount": "47.75",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "-141.15"
    },
    {
        "idTransaction": 424,
        "date": "2025-01-24",
        "type": "income",
        "amount": "396.65",
        "description": "Ingreso relacionado con Cafeterías y restaurantes",
        "balance": "283.62"
    },
    {
        "idTransaction": 425,
        "date": "2025-02-10",
        "type": "expense",
        "amount": "62.40",
        "description": "Pago relacionado con Abono de intereses",
        "balance": "-421.08"
    },
    {
        "idTransaction": 426,
        "date": "2025-01-30",
        "type": "expense",
        "amount": "271.00",
        "description": "Pago relacionado con Dentista, médico",
        "balance": "-393.79"
    },
    {
        "idTransaction": 427,
        "date": "2025-01-30",
        "type": "income",
        "amount": "252.57",
        "description": "Ingreso relacionado con Hipoteca",
        "balance": "-141.22"
    },
    {
        "idTransaction": 428,
        "date": "2025-02-01",
        "type": "income",
        "amount": "86.96",
        "description": "Ingreso relacionado con Nómina o Pensión",
        "balance": "415.59"
    },
    {
        "idTransaction": 429,
        "date": "2025-01-03",
        "type": "expense",
        "amount": "317.75",
        "description": "Pago relacionado con Otros préstamos y avales",
        "balance": "2058.08"
    },
    {
        "idTransaction": 430,
        "date": "2025-02-04",
        "type": "expense",
        "amount": "248.06",
        "description": "Pago relacionado con Transporte público",
        "balance": "-460.31"
    },
    {
        "idTransaction": 431,
        "date": "2025-01-05",
        "type": "expense",
        "amount": "68.47",
        "description": "Pago relacionado con Peluquería",
        "balance": "708.02"
    },
    {
        "idTransaction": 432,
        "date": "2025-02-07",
        "type": "income",
        "amount": "425.63",
        "description": "Ingreso relacionado con Agua",
        "balance": "-60.19"
    },
    {
        "idTransaction": 433,
        "date": "2025-01-05",
        "type": "expense",
        "amount": "68.39",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "639.63"
    },
    {
        "idTransaction": 434,
        "date": "2025-02-22",
        "type": "expense",
        "amount": "349.81",
        "description": "Pago relacionado con Comunidad derramas",
        "balance": "-80.06"
    },
    {
        "idTransaction": 435,
        "date": "2025-03-09",
        "type": "expense",
        "amount": "85.54",
        "description": "Pago relacionado con Peluquería",
        "balance": "199.27"
    },
    {
        "idTransaction": 436,
        "date": "2025-01-10",
        "type": "income",
        "amount": "425.48",
        "description": "Ingreso relacionado con Seguro de vida",
        "balance": "64.24"
    },
    {
        "idTransaction": 437,
        "date": "2025-02-28",
        "type": "expense",
        "amount": "422.25",
        "description": "Pago relacionado con Transporte público",
        "balance": "-177.17"
    },
    {
        "idTransaction": 438,
        "date": "2025-02-01",
        "type": "expense",
        "amount": "421.13",
        "description": "Pago relacionado con Pago de multas",
        "balance": "-5.54"
    },
    {
        "idTransaction": 439,
        "date": "2025-01-02",
        "type": "expense",
        "amount": "350.30",
        "description": "Pago relacionado con ONGs",
        "balance": "3162.81"
    },
    {
        "idTransaction": 440,
        "date": "2025-02-09",
        "type": "income",
        "amount": "465.50",
        "description": "Ingreso relacionado con Hotel y alojamiento",
        "balance": "256.51"
    },
    {
        "idTransaction": 441,
        "date": "2025-03-29",
        "type": "expense",
        "amount": "91.22",
        "description": "Pago relacionado con Seguro de vida",
        "balance": "-420.79"
    },
    {
        "idTransaction": 442,
        "date": "2025-01-30",
        "type": "expense",
        "amount": "291.06",
        "description": "Pago relacionado con Cafeterías y restaurantes",
        "balance": "-432.28"
    },
    {
        "idTransaction": 443,
        "date": "2025-01-16",
        "type": "income",
        "amount": "423.51",
        "description": "Ingreso relacionado con Loterías y apuestas",
        "balance": "305.11"
    },
    {
        "idTransaction": 444,
        "date": "2025-02-28",
        "type": "expense",
        "amount": "241.14",
        "description": "Pago relacionado con Peajes",
        "balance": "-418.31"
    },
    {
        "idTransaction": 445,
        "date": "2025-03-29",
        "type": "income",
        "amount": "467.53",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "46.74"
    },
    {
        "idTransaction": 446,
        "date": "2025-03-01",
        "type": "income",
        "amount": "339.43",
        "description": "Ingreso relacionado con Seguro de hogar",
        "balance": "-152.75"
    },
    {
        "idTransaction": 447,
        "date": "2025-01-10",
        "type": "expense",
        "amount": "67.63",
        "description": "Pago relacionado con Peluquería",
        "balance": "-3.39"
    },
    {
        "idTransaction": 448,
        "date": "2025-01-22",
        "type": "income",
        "amount": "346.89",
        "description": "Ingreso relacionado con Seguro de hogar",
        "balance": "131.32"
    },
    {
        "idTransaction": 449,
        "date": "2025-01-22",
        "type": "expense",
        "amount": "449.34",
        "description": "Pago relacionado con Libros, música y videojuegos",
        "balance": "-318.02"
    },
    {
        "idTransaction": 450,
        "date": "2025-03-13",
        "type": "expense",
        "amount": "461.57",
        "description": "Pago relacionado con Billetes de viaje",
        "balance": "-133.70"
    },
    {
        "idTransaction": 451,
        "date": "2025-01-25",
        "type": "expense",
        "amount": "453.85",
        "description": "Pago relacionado con Cajeros",
        "balance": "-305.57"
    },
    {
        "idTransaction": 452,
        "date": "2025-02-18",
        "type": "expense",
        "amount": "229.84",
        "description": "Pago relacionado con Ropa y complementos",
        "balance": "8.56"
    },
    {
        "idTransaction": 453,
        "date": "2025-03-27",
        "type": "income",
        "amount": "404.37",
        "description": "Ingreso relacionado con Plan de pensiones",
        "balance": "-78.81"
    },
    {
        "idTransaction": 454,
        "date": "2025-02-21",
        "type": "income",
        "amount": "204.49",
        "description": "Ingreso relacionado con Ropa y complementos",
        "balance": "-235.01"
    },
    {
        "idTransaction": 455,
        "date": "2025-01-29",
        "type": "income",
        "amount": "281.31",
        "description": "Ingreso relacionado con Alquiler de vehículo",
        "balance": "-122.79"
    },
    {
        "idTransaction": 456,
        "date": "2025-03-24",
        "type": "income",
        "amount": "445.90",
        "description": "Ingreso relacionado con Cafeterías y restaurantes",
        "balance": "383.62"
    },
    {
        "idTransaction": 457,
        "date": "2025-01-19",
        "type": "income",
        "amount": "228.78",
        "description": "Ingreso relacionado con Sindicatos",
        "balance": "-86.88"
    },
    {
        "idTransaction": 458,
        "date": "2025-03-07",
        "type": "income",
        "amount": "403.81",
        "description": "Ingreso relacionado con Cajeros",
        "balance": "152.51"
    },
    {
        "idTransaction": 459,
        "date": "2025-01-12",
        "type": "expense",
        "amount": "57.60",
        "description": "Pago relacionado con ONGs",
        "balance": "-89.30"
    },
    {
        "idTransaction": 460,
        "date": "2025-02-22",
        "type": "expense",
        "amount": "233.76",
        "description": "Pago relacionado con Comunidad",
        "balance": "-313.82"
    },
    {
        "idTransaction": 461,
        "date": "2025-02-05",
        "type": "income",
        "amount": "432.40",
        "description": "Ingreso relacionado con Óptica",
        "balance": "289.79"
    },
    {
        "idTransaction": 462,
        "date": "2025-01-30",
        "type": "income",
        "amount": "113.58",
        "description": "Ingreso relacionado con Ingresos por otros pagos",
        "balance": "-318.70"
    },
    {
        "idTransaction": 463,
        "date": "2025-02-24",
        "type": "income",
        "amount": "215.20",
        "description": "Ingreso relacionado con ONGs",
        "balance": "-138.87"
    },
    {
        "idTransaction": 464,
        "date": "2025-03-25",
        "type": "expense",
        "amount": "373.75",
        "description": "Pago relacionado con Comunidad",
        "balance": "-280.39"
    },
    {
        "idTransaction": 465,
        "date": "2025-01-04",
        "type": "income",
        "amount": "473.07",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "2852.45"
    },
    {
        "idTransaction": 466,
        "date": "2025-03-27",
        "type": "expense",
        "amount": "192.63",
        "description": "Pago relacionado con Cine, teatro y espectáculos",
        "balance": "-271.44"
    },
    {
        "idTransaction": 467,
        "date": "2025-02-04",
        "type": "income",
        "amount": "119.42",
        "description": "Ingreso relacionado con Teléfono, TV e internet",
        "balance": "-340.89"
    },
    {
        "idTransaction": 468,
        "date": "2025-01-04",
        "type": "expense",
        "amount": "299.72",
        "description": "Pago relacionado con Transferencias",
        "balance": "2552.73"
    },
    {
        "idTransaction": 469,
        "date": "2025-01-17",
        "type": "expense",
        "amount": "77.55",
        "description": "Pago relacionado con Tren, avión, transporte",
        "balance": "-227.39"
    },
    {
        "idTransaction": 470,
        "date": "2025-03-12",
        "type": "income",
        "amount": "327.25",
        "description": "Ingreso relacionado con Teléfono, TV e internet",
        "balance": "-151.28"
    },
    {
        "idTransaction": 471,
        "date": "2025-03-28",
        "type": "expense",
        "amount": "66.45",
        "description": "Pago relacionado con Cafeterías y restaurantes",
        "balance": "-434.34"
    },
    {
        "idTransaction": 472,
        "date": "2025-03-25",
        "type": "expense",
        "amount": "95.68",
        "description": "Pago relacionado con Libros, música y videojuegos",
        "balance": "-376.07"
    },
    {
        "idTransaction": 473,
        "date": "2025-01-16",
        "type": "expense",
        "amount": "116.08",
        "description": "Pago relacionado con Decoración y mobiliario",
        "balance": "189.03"
    },
    {
        "idTransaction": 474,
        "date": "2025-03-03",
        "type": "income",
        "amount": "74.88",
        "description": "Ingreso relacionado con Ingresos por otros pagos",
        "balance": "28.28"
    },
    {
        "idTransaction": 475,
        "date": "2025-02-04",
        "type": "expense",
        "amount": "140.97",
        "description": "Pago relacionado con Teléfono, TV e internet",
        "balance": "-481.86"
    },
    {
        "idTransaction": 476,
        "date": "2025-02-23",
        "type": "expense",
        "amount": "488.89",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "-378.25"
    },
    {
        "idTransaction": 477,
        "date": "2025-03-06",
        "type": "expense",
        "amount": "101.93",
        "description": "Pago relacionado con Seguro de vida",
        "balance": "-53.17"
    },
    {
        "idTransaction": 478,
        "date": "2025-03-01",
        "type": "expense",
        "amount": "144.20",
        "description": "Pago relacionado con Deporte y gimnasio",
        "balance": "-296.95"
    },
    {
        "idTransaction": 479,
        "date": "2025-01-12",
        "type": "expense",
        "amount": "148.73",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "-238.03"
    },
    {
        "idTransaction": 480,
        "date": "2025-01-26",
        "type": "expense",
        "amount": "233.66",
        "description": "Pago relacionado con Hipoteca",
        "balance": "382.69"
    },
    {
        "idTransaction": 481,
        "date": "2025-03-04",
        "type": "income",
        "amount": "245.63",
        "description": "Ingreso relacionado con Hipoteca",
        "balance": "-41.14"
    },
    {
        "idTransaction": 482,
        "date": "2025-03-26",
        "type": "income",
        "amount": "200.62",
        "description": "Ingreso relacionado con Gasolina y combustible",
        "balance": "-175.45"
    },
    {
        "idTransaction": 483,
        "date": "2025-03-14",
        "type": "income",
        "amount": "277.59",
        "description": "Ingreso relacionado con Mantenimiento del hogar",
        "balance": "-137.20"
    },
    {
        "idTransaction": 484,
        "date": "2025-03-13",
        "type": "expense",
        "amount": "32.75",
        "description": "Pago relacionado con Seguro de vehículo",
        "balance": "-166.45"
    },
    {
        "idTransaction": 485,
        "date": "2025-03-09",
        "type": "expense",
        "amount": "188.41",
        "description": "Pago relacionado con Transferencias",
        "balance": "10.86"
    },
    {
        "idTransaction": 486,
        "date": "2025-03-10",
        "type": "income",
        "amount": "436.61",
        "description": "Ingreso relacionado con Gastos de inmobiliaria",
        "balance": "211.40"
    },
    {
        "idTransaction": 487,
        "date": "2025-03-27",
        "type": "expense",
        "amount": "193.06",
        "description": "Pago relacionado con Transporte público",
        "balance": "-464.50"
    },
    {
        "idTransaction": 488,
        "date": "2025-03-15",
        "type": "income",
        "amount": "244.57",
        "description": "Ingreso relacionado con Ingresos por regalos",
        "balance": "320.03"
    },
    {
        "idTransaction": 489,
        "date": "2025-02-17",
        "type": "expense",
        "amount": "74.09",
        "description": "Pago relacionado con Suscripciones",
        "balance": "-309.68"
    },
    {
        "idTransaction": 490,
        "date": "2025-03-24",
        "type": "income",
        "amount": "335.27",
        "description": "Ingreso relacionado con Ingresos por loteria",
        "balance": "718.89"
    },
    {
        "idTransaction": 491,
        "date": "2025-02-21",
        "type": "income",
        "amount": "387.79",
        "description": "Ingreso relacionado con Otros préstamos y avales",
        "balance": "152.78"
    },
    {
        "idTransaction": 492,
        "date": "2025-01-09",
        "type": "expense",
        "amount": "28.38",
        "description": "Pago relacionado con Sindicatos",
        "balance": "-361.24"
    },
    {
        "idTransaction": 493,
        "date": "2025-03-06",
        "type": "expense",
        "amount": "360.74",
        "description": "Pago relacionado con Gasolina y combustible",
        "balance": "-413.91"
    },
    {
        "idTransaction": 494,
        "date": "2025-03-23",
        "type": "expense",
        "amount": "234.05",
        "description": "Pago relacionado con Gasolina y combustible",
        "balance": "-62.28"
    },
    {
        "idTransaction": 495,
        "date": "2025-03-09",
        "type": "expense",
        "amount": "432.60",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "-421.74"
    },
    {
        "idTransaction": 496,
        "date": "2025-02-08",
        "type": "expense",
        "amount": "237.45",
        "description": "Pago relacionado con Comunidad",
        "balance": "-10.23"
    },
    {
        "idTransaction": 497,
        "date": "2025-02-22",
        "type": "income",
        "amount": "357.44",
        "description": "Ingreso relacionado con Tarjetas financieras",
        "balance": "43.62"
    },
    {
        "idTransaction": 498,
        "date": "2025-02-01",
        "type": "expense",
        "amount": "221.61",
        "description": "Pago relacionado con Mantenimiento del vehículo",
        "balance": "-227.15"
    },
    {
        "idTransaction": 499,
        "date": "2025-02-21",
        "type": "expense",
        "amount": "328.75",
        "description": "Pago relacionado con Billetes de viaje",
        "balance": "-175.97"
    },
    {
        "idTransaction": 500,
        "date": "2025-03-05",
        "type": "expense",
        "amount": "143.17",
        "description": "Pago relacionado con Sindicatos",
        "balance": "113.31"
    },
    {
        "idTransaction": 501,
        "date": "2025-01-22",
        "type": "income",
        "amount": "254.25",
        "description": "Ingreso relacionado con ONGs",
        "balance": "-63.77"
    },
    {
        "idTransaction": 502,
        "date": "2025-03-10",
        "type": "expense",
        "amount": "276.79",
        "description": "Pago relacionado con Otros préstamos y avales",
        "balance": "-65.39"
    },
    {
        "idTransaction": 503,
        "date": "2025-02-01",
        "type": "income",
        "amount": "375.45",
        "description": "Ingreso relacionado con Mantenimiento del hogar",
        "balance": "148.30"
    },
    {
        "idTransaction": 504,
        "date": "2025-01-31",
        "type": "expense",
        "amount": "134.63",
        "description": "Pago relacionado con Mantenimiento del hogar",
        "balance": "-484.16"
    },
    {
        "idTransaction": 505,
        "date": "2025-02-09",
        "type": "expense",
        "amount": "398.40",
        "description": "Pago relacionado con Pagos impuestos",
        "balance": "-141.89"
    },
    {
        "idTransaction": 506,
        "date": "2025-03-29",
        "type": "expense",
        "amount": "153.99",
        "description": "Pago relacionado con Loterías y apuestas",
        "balance": "-107.25"
    },
    {
        "idTransaction": 507,
        "date": "2025-03-26",
        "type": "income",
        "amount": "296.82",
        "description": "Ingreso relacionado con Ingresos por regalos",
        "balance": "121.37"
    },
    {
        "idTransaction": 508,
        "date": "2025-02-25",
        "type": "income",
        "amount": "279.96",
        "description": "Ingreso relacionado con Electrónica",
        "balance": "-195.85"
    },
    {
        "idTransaction": 509,
        "date": "2025-03-24",
        "type": "expense",
        "amount": "429.82",
        "description": "Pago relacionado con Dentista, médico",
        "balance": "289.07"
    },
    {
        "idTransaction": 510,
        "date": "2025-01-27",
        "type": "expense",
        "amount": "261.75",
        "description": "Pago relacionado con Otros gastos (otros)",
        "balance": "120.94"
    },
    {
        "idTransaction": 511,
        "date": "2025-03-01",
        "type": "expense",
        "amount": "172.54",
        "description": "Pago relacionado con Seguro de hogar",
        "balance": "-469.49"
    },
    {
        "idTransaction": 512,
        "date": "2025-02-06",
        "type": "expense",
        "amount": "189.27",
        "description": "Pago relacionado con Tren, avión, transporte",
        "balance": "46.59"
    },
    {
        "idTransaction": 513,
        "date": "2025-01-31",
        "type": "income",
        "amount": "76.17",
        "description": "Ingreso relacionado con Cafeterías y restaurantes",
        "balance": "-407.99"
    },
    {
        "idTransaction": 514,
        "date": "2025-01-18",
        "type": "expense",
        "amount": "126.92",
        "description": "Pago relacionado con Suscripciones",
        "balance": "-433.99"
    },
    {
        "idTransaction": 515,
        "date": "2025-01-25",
        "type": "income",
        "amount": "290.17",
        "description": "Ingreso relacionado con Ingresos por indemnizaciones",
        "balance": "-15.40"
    },
    {
        "idTransaction": 516,
        "date": "2025-02-19",
        "type": "expense",
        "amount": "129.70",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "-223.61"
    },
    {
        "idTransaction": 517,
        "date": "2025-02-18",
        "type": "expense",
        "amount": "246.56",
        "description": "Pago relacionado con Luz y gas",
        "balance": "-238.00"
    },
    {
        "idTransaction": 518,
        "date": "2025-01-21",
        "type": "expense",
        "amount": "448.08",
        "description": "Pago relacionado con Seguro de vida",
        "balance": "-58.85"
    },
    {
        "idTransaction": 519,
        "date": "2025-02-06",
        "type": "expense",
        "amount": "348.51",
        "description": "Pago relacionado con Sindicatos",
        "balance": "-301.92"
    },
    {
        "idTransaction": 520,
        "date": "2025-03-24",
        "type": "expense",
        "amount": "195.71",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "93.36"
    },
    {
        "idTransaction": 521,
        "date": "2025-03-01",
        "type": "income",
        "amount": "494.78",
        "description": "Ingreso relacionado con Ingresos por otros pagos",
        "balance": "25.29"
    },
    {
        "idTransaction": 522,
        "date": "2025-02-15",
        "type": "expense",
        "amount": "71.96",
        "description": "Pago relacionado con Seguro de vida",
        "balance": "61.88"
    },
    {
        "idTransaction": 523,
        "date": "2025-02-22",
        "type": "expense",
        "amount": "239.52",
        "description": "Pago relacionado con Billetes de viaje",
        "balance": "-195.90"
    },
    {
        "idTransaction": 524,
        "date": "2025-03-05",
        "type": "expense",
        "amount": "64.55",
        "description": "Pago relacionado con Peajes",
        "balance": "48.76"
    },
    {
        "idTransaction": 525,
        "date": "2025-02-22",
        "type": "income",
        "amount": "417.85",
        "description": "Ingreso relacionado con Nómina o Pensión",
        "balance": "221.95"
    },
    {
        "idTransaction": 526,
        "date": "2025-02-03",
        "type": "income",
        "amount": "149.48",
        "description": "Ingreso relacionado con Comunidad",
        "balance": "-287.04"
    },
    {
        "idTransaction": 527,
        "date": "2025-01-16",
        "type": "expense",
        "amount": "142.62",
        "description": "Pago relacionado con Hipoteca",
        "balance": "46.41"
    },
    {
        "idTransaction": 528,
        "date": "2025-02-25",
        "type": "expense",
        "amount": "138.56",
        "description": "Pago relacionado con Educación, salud y deporte",
        "balance": "-334.41"
    },
    {
        "idTransaction": 529,
        "date": "2025-02-08",
        "type": "income",
        "amount": "48.81",
        "description": "Ingreso relacionado con Ingresos de impuestos",
        "balance": "38.58"
    },
    {
        "idTransaction": 530,
        "date": "2025-03-12",
        "type": "income",
        "amount": "479.15",
        "description": "Ingreso relacionado con Otros gastos (otros)",
        "balance": "327.87"
    },
    {
        "idTransaction": 531,
        "date": "2025-01-06",
        "type": "expense",
        "amount": "74.70",
        "description": "Pago relacionado con Regalos y juguetes",
        "balance": "187.58"
    },
    {
        "idTransaction": 532,
        "date": "2025-03-18",
        "type": "income",
        "amount": "418.92",
        "description": "Ingreso relacionado con Ropa y complementos",
        "balance": "-19.77"
    },
    {
        "idTransaction": 533,
        "date": "2025-02-18",
        "type": "income",
        "amount": "436.49",
        "description": "Ingreso relacionado con Cafeterías y restaurantes",
        "balance": "198.49"
    },
    {
        "idTransaction": 534,
        "date": "2025-03-21",
        "type": "expense",
        "amount": "85.90",
        "description": "Pago relacionado con Parking y garaje",
        "balance": "-48.14"
    },
    {
        "idTransaction": 535,
        "date": "2025-01-15",
        "type": "income",
        "amount": "444.42",
        "description": "Ingreso relacionado con Óptica",
        "balance": "303.27"
    },
    {
        "idTransaction": 536,
        "date": "2025-03-16",
        "type": "expense",
        "amount": "10.66",
        "description": "Pago relacionado con Luz y gas",
        "balance": "184.62"
    },
    {
        "idTransaction": 537,
        "date": "2025-02-02",
        "type": "income",
        "amount": "402.18",
        "description": "Ingreso relacionado con Ropa y complementos",
        "balance": "175.86"
    },
    {
        "idTransaction": 538,
        "date": "2025-03-07",
        "type": "income",
        "amount": "386.81",
        "description": "Ingreso relacionado con Ingresos por indemnizaciones",
        "balance": "539.32"
    },
    {
        "idTransaction": 539,
        "date": "2025-02-06",
        "type": "income",
        "amount": "422.57",
        "description": "Ingreso relacionado con Transferencias",
        "balance": "120.65"
    },
    {
        "idTransaction": 540,
        "date": "2025-03-13",
        "type": "expense",
        "amount": "248.34",
        "description": "Pago relacionado con Otros gastos (otros)",
        "balance": "-414.79"
    },
    {
        "idTransaction": 541,
        "date": "2025-01-02",
        "type": "expense",
        "amount": "481.32",
        "description": "Pago relacionado con Mantenimiento del vehículo",
        "balance": "2681.49"
    },
    {
        "idTransaction": 542,
        "date": "2025-02-07",
        "type": "expense",
        "amount": "134.76",
        "description": "Pago relacionado con Suscripciones",
        "balance": "-194.95"
    },
    {
        "idTransaction": 543,
        "date": "2025-01-05",
        "type": "expense",
        "amount": "319.90",
        "description": "Pago relacionado con Ropa y complementos",
        "balance": "319.73"
    },
    {
        "idTransaction": 544,
        "date": "2025-03-01",
        "type": "expense",
        "amount": "336.93",
        "description": "Pago relacionado con Alquiler de vehículo",
        "balance": "-311.64"
    },
    {
        "idTransaction": 545,
        "date": "2025-02-02",
        "type": "expense",
        "amount": "132.98",
        "description": "Pago relacionado con Seguro de salud",
        "balance": "42.88"
    },
    {
        "idTransaction": 546,
        "date": "2025-01-12",
        "type": "expense",
        "amount": "40.66",
        "description": "Pago relacionado con Cajeros",
        "balance": "-278.69"
    },
    {
        "idTransaction": 547,
        "date": "2025-01-21",
        "type": "expense",
        "amount": "322.58",
        "description": "Pago relacionado con Pago de multas",
        "balance": "-381.43"
    },
    {
        "idTransaction": 548,
        "date": "2025-02-17",
        "type": "expense",
        "amount": "151.35",
        "description": "Pago relacionado con Gasolina y combustible",
        "balance": "-461.03"
    },
    {
        "idTransaction": 549,
        "date": "2025-03-11",
        "type": "expense",
        "amount": "260.46",
        "description": "Pago relacionado con Transacción entre cuentas",
        "balance": "12.93"
    },
    {
        "idTransaction": 550,
        "date": "2025-01-01",
        "type": "expense",
        "amount": "206.00",
        "description": "Pago relacionado con Otros gastos (otros)",
        "balance": "4042.43"
    },
    {
        "idTransaction": 551,
        "date": "2025-02-03",
        "type": "income",
        "amount": "451.65",
        "description": "Ingreso relacionado con Comunidad derramas",
        "balance": "164.61"
    },
    {
        "idTransaction": 552,
        "date": "2025-01-06",
        "type": "expense",
        "amount": "158.76",
        "description": "Pago relacionado con Abono de intereses",
        "balance": "28.82"
    },
    {
        "idTransaction": 553,
        "date": "2025-02-15",
        "type": "expense",
        "amount": "232.45",
        "description": "Pago relacionado con Billetes de viaje",
        "balance": "-170.57"
    },
    {
        "idTransaction": 554,
        "date": "2025-03-22",
        "type": "expense",
        "amount": "9.26",
        "description": "Pago relacionado con Regalos y juguetes",
        "balance": "-212.00"
    },
    {
        "idTransaction": 555,
        "date": "2025-01-30",
        "type": "expense",
        "amount": "175.65",
        "description": "Pago relacionado con Cine, teatro y espectáculos",
        "balance": "-494.35"
    },
    {
        "idTransaction": 556,
        "date": "2025-02-16",
        "type": "expense",
        "amount": "79.76",
        "description": "Pago relacionado con Cafeterías y restaurantes",
        "balance": "-388.33"
    },
    {
        "idTransaction": 557,
        "date": "2025-03-03",
        "type": "expense",
        "amount": "279.25",
        "description": "Pago relacionado con Cine, teatro y espectáculos",
        "balance": "-250.97"
    },
    {
        "idTransaction": 558,
        "date": "2025-01-28",
        "type": "expense",
        "amount": "298.44",
        "description": "Pago relacionado con Comisiones e intereses",
        "balance": "-177.50"
    },
    {
        "idTransaction": 559,
        "date": "2025-02-08",
        "type": "expense",
        "amount": "247.57",
        "description": "Pago relacionado con Tren, avión, transporte",
        "balance": "-208.99"
    },
    {
        "idTransaction": 560,
        "date": "2025-02-18",
        "type": "expense",
        "amount": "23.12",
        "description": "Pago relacionado con Luz y gas",
        "balance": "175.37"
    },
    {
        "idTransaction": 561,
        "date": "2025-01-21",
        "type": "income",
        "amount": "101.72",
        "description": "Ingreso relacionado con Ingresos por indemnizaciones",
        "balance": "-279.71"
    },
    {
        "idTransaction": 562,
        "date": "2025-01-05",
        "type": "expense",
        "amount": "57.45",
        "description": "Pago relacionado con Gastos de inmobiliaria",
        "balance": "262.28"
    },
    {
        "idTransaction": 563,
        "date": "2025-02-25",
        "type": "income",
        "amount": "384.85",
        "description": "Ingreso relacionado con Peajes",
        "balance": "50.44"
    },
    {
        "idTransaction": 564,
        "date": "2025-01-31",
        "type": "expense",
        "amount": "23.00",
        "description": "Pago relacionado con Luz y gas",
        "balance": "-430.99"
    },
    {
        "idTransaction": 565,
        "date": "2025-03-16",
        "type": "expense",
        "amount": "100.77",
        "description": "Pago relacionado con Luz y gas",
        "balance": "83.85"
    },
    {
        "idTransaction": 566,
        "date": "2025-02-18",
        "type": "expense",
        "amount": "269.28",
        "description": "Pago relacionado con Seguro de vida",
        "balance": "-93.91"
    },
    {
        "idTransaction": 567,
        "date": "2025-02-10",
        "type": "income",
        "amount": "323.33",
        "description": "Ingreso relacionado con Tren, avión, transporte",
        "balance": "-97.75"
    },
    {
        "idTransaction": 568,
        "date": "2025-03-27",
        "type": "income",
        "amount": "139.11",
        "description": "Ingreso relacionado con Farmacia, herbolario y nutrición",
        "balance": "-325.39"
    },
    {
        "idTransaction": 569,
        "date": "2025-01-01",
        "type": "expense",
        "amount": "62.10",
        "description": "Pago relacionado con Fianza y garantia como inquilino",
        "balance": "3980.33"
    },
    {
        "idTransaction": 570,
        "date": "2025-01-22",
        "type": "income",
        "amount": "450.17",
        "description": "Ingreso relacionado con Educación, salud y deporte",
        "balance": "386.40"
    },
    {
        "idTransaction": 571,
        "date": "2025-01-04",
        "type": "expense",
        "amount": "427.78",
        "description": "Pago relacionado con Luz y gas",
        "balance": "2124.95"
    },
    {
        "idTransaction": 572,
        "date": "2025-01-18",
        "type": "income",
        "amount": "199.47",
        "description": "Ingreso relacionado con Cafeterías y restaurantes",
        "balance": "-234.52"
    },
    {
        "idTransaction": 573,
        "date": "2025-03-04",
        "type": "expense",
        "amount": "416.81",
        "description": "Pago relacionado con Transacción entre cuentas",
        "balance": "-457.95"
    },
    {
        "idTransaction": 574,
        "date": "2025-02-23",
        "type": "income",
        "amount": "406.06",
        "description": "Ingreso relacionado con Dentista, médico",
        "balance": "27.81"
    },
    {
        "idTransaction": 575,
        "date": "2025-03-04",
        "type": "income",
        "amount": "446.56",
        "description": "Ingreso relacionado con ONGs",
        "balance": "-11.39"
    },
    {
        "idTransaction": 576,
        "date": "2025-02-26",
        "type": "income",
        "amount": "306.01",
        "description": "Ingreso relacionado con Supermercados y alimentación",
        "balance": "-7.93"
    },
    {
        "idTransaction": 577,
        "date": "2025-01-24",
        "type": "expense",
        "amount": "88.13",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición",
        "balance": "195.49"
    },
    {
        "idTransaction": 578,
        "date": "2025-03-07",
        "type": "expense",
        "amount": "111.12",
        "description": "Pago relacionado con Cajeros",
        "balance": "428.20"
    },
    {
        "idTransaction": 579,
        "date": "2025-02-01",
        "type": "expense",
        "amount": "389.98",
        "description": "Pago relacionado con Luz y gas",
        "balance": "-241.68"
    },
    {
        "idTransaction": 580,
        "date": "2025-02-06",
        "type": "expense",
        "amount": "47.98",
        "description": "Pago relacionado con Suscripciones",
        "balance": "72.67"
    },
    {
        "idTransaction": 581,
        "date": "2025-02-22",
        "type": "expense",
        "amount": "73.71",
        "description": "Pago relacionado con Ropa y complementos",
        "balance": "148.24"
    },
    {
        "idTransaction": 582,
        "date": "2025-02-28",
        "type": "income",
        "amount": "253.48",
        "description": "Ingreso relacionado con Fianza y garantia como inquilino",
        "balance": "-164.83"
    },
    {
        "idTransaction": 583,
        "date": "2025-03-29",
        "type": "expense",
        "amount": "87.26",
        "description": "Pago relacionado con Billetes de viaje",
        "balance": "-194.51"
    },
    {
        "idTransaction": 584,
        "date": "2025-03-27",
        "type": "expense",
        "amount": "42.50",
        "description": "Pago relacionado con Comisiones e intereses",
        "balance": "-367.89"
    },
    {
        "idTransaction": 585,
        "date": "2025-02-11",
        "type": "expense",
        "amount": "11.30",
        "description": "Pago relacionado con Abono de intereses",
        "balance": "-242.36"
    },
    {
        "idTransaction": 586,
        "date": "2025-01-01",
        "type": "expense",
        "amount": "467.22",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición",
        "balance": "3513.11"
    },
    {
        "idTransaction": 587,
        "date": "2025-02-21",
        "type": "income",
        "amount": "445.72",
        "description": "Ingreso relacionado con Cajeros",
        "balance": "269.75"
    },
    {
        "idTransaction": 588,
        "date": "2025-01-22",
        "type": "expense",
        "amount": "291.38",
        "description": "Pago relacionado con Transporte público",
        "balance": "95.02"
    },
    {
        "idTransaction": 589,
        "date": "2025-02-13",
        "type": "expense",
        "amount": "195.53",
        "description": "Pago relacionado con Pagos impuestos",
        "balance": "-16.77"
    },
    {
        "idTransaction": 590,
        "date": "2025-01-16",
        "type": "expense",
        "amount": "339.22",
        "description": "Pago relacionado con Suscripciones",
        "balance": "-292.81"
    },
    {
        "idTransaction": 591,
        "date": "2025-01-04",
        "type": "expense",
        "amount": "450.94",
        "description": "Pago relacionado con Ropa y complementos",
        "balance": "1674.01"
    },
    {
        "idTransaction": 592,
        "date": "2025-03-18",
        "type": "expense",
        "amount": "310.22",
        "description": "Pago relacionado con Deporte y gimnasio",
        "balance": "-329.99"
    },
    {
        "idTransaction": 593,
        "date": "2025-01-19",
        "type": "income",
        "amount": "476.11",
        "description": "Ingreso relacionado con Peajes",
        "balance": "389.23"
    },
    {
        "idTransaction": 594,
        "date": "2025-02-16",
        "type": "income",
        "amount": "287.05",
        "description": "Ingreso relacionado con Libros, música y videojuegos",
        "balance": "-101.28"
    },
    {
        "idTransaction": 595,
        "date": "2025-01-21",
        "type": "income",
        "amount": "368.64",
        "description": "Ingreso relacionado con Regalos y juguetes",
        "balance": "88.93"
    },
    {
        "idTransaction": 596,
        "date": "2025-02-25",
        "type": "expense",
        "amount": "16.85",
        "description": "Pago relacionado con Cajeros",
        "balance": "33.59"
    },
    {
        "idTransaction": 597,
        "date": "2025-02-19",
        "type": "income",
        "amount": "345.39",
        "description": "Ingreso relacionado con Decoración y mobiliario",
        "balance": "121.78"
    },
    {
        "idTransaction": 598,
        "date": "2025-02-14",
        "type": "income",
        "amount": "445.12",
        "description": "Ingreso relacionado con Educación, salud y deporte",
        "balance": "192.10"
    },
    {
        "idTransaction": 599,
        "date": "2025-01-15",
        "type": "expense",
        "amount": "132.39",
        "description": "Pago relacionado con Teléfono, TV e internet",
        "balance": "170.88"
    },
    {
        "idTransaction": 600,
        "date": "2025-02-19",
        "type": "expense",
        "amount": "74.00",
        "description": "Pago relacionado con Transacción entre cuentas",
        "balance": "47.78"
    }
];

const budgets = [
    {
        "idBudget": 74,
        "idUser": 2,
        "month": "2025-01",
        "categoryName": "Cine, teatro y espectáculos",
        "limitAmount": "60.00",
        "totalSpent": 175.65,
        "balance": -115.65,
        "icon": "fa-film"
    },
    {
        "idBudget": 75,
        "idUser": 2,
        "month": "2025-01",
        "categoryName": "Alquiler como inquilino",
        "limitAmount": "350.00",
        "totalSpent": 0,
        "balance": 350,
        "icon": "fa-home"
    },
    {
        "idBudget": 76,
        "idUser": 2,
        "month": "2025-01",
        "categoryName": "Peluquería",
        "limitAmount": "30.00",
        "totalSpent": 217.24,
        "balance": -187.24,
        "icon": "fa-cut"
    },
    {
        "idBudget": 77,
        "idUser": 2,
        "month": "2025-01",
        "categoryName": "Billetes de viaje",
        "limitAmount": "120.00",
        "totalSpent": 219.32,
        "balance": -99.32,
        "icon": "fa-ticket-alt"
    },
    {
        "idBudget": 78,
        "idUser": 2,
        "month": "2025-01",
        "categoryName": "Cafeterías y restaurantes",
        "limitAmount": "170.00",
        "totalSpent": 291.06,
        "balance": -121.06,
        "icon": "fa-utensils"
    },
    {
        "idBudget": 79,
        "idUser": 2,
        "month": "2025-02",
        "categoryName": "Cajeros",
        "limitAmount": "90.00",
        "totalSpent": 16.85,
        "balance": 73.15,
        "icon": "fa-money-bill-wave"
    },
    {
        "idBudget": 80,
        "idUser": 2,
        "month": "2025-02",
        "categoryName": "Cine, teatro y espectáculos",
        "limitAmount": "60.00",
        "totalSpent": 361.28,
        "balance": -301.28,
        "icon": "fa-film"
    },
    {
        "idBudget": 81,
        "idUser": 2,
        "month": "2025-02",
        "categoryName": "Comisiones e intereses",
        "limitAmount": "220.00",
        "totalSpent": 126.96,
        "balance": 93.04,
        "icon": "fa-percentage"
    },
    {
        "idBudget": 82,
        "idUser": 2,
        "month": "2025-02",
        "categoryName": "Comunidad",
        "limitAmount": "50.00",
        "totalSpent": 471.21,
        "balance": -421.21,
        "icon": "fa-building"
    },
    {
        "idBudget": 83,
        "idUser": 2,
        "month": "2025-02",
        "categoryName": "Comunidad derramas",
        "limitAmount": "140.00",
        "totalSpent": 349.81,
        "balance": -209.81,
        "icon": "fa-tools"
    },
    {
        "idBudget": 84,
        "idUser": 2,
        "month": "2025-02",
        "categoryName": "Decoración y mobiliario",
        "limitAmount": "90.00",
        "totalSpent": 0,
        "balance": 90,
        "icon": "fa-couch"
    },
    {
        "idBudget": 85,
        "idUser": 2,
        "month": "2025-03",
        "categoryName": "Supermercados y alimentación",
        "limitAmount": "120.00",
        "totalSpent": 0,
        "balance": 120,
        "icon": "fa-shopping-cart"
    },
    {
        "idBudget": 86,
        "idUser": 2,
        "month": "2025-03",
        "categoryName": "Cine, teatro y espectáculos",
        "limitAmount": "60.00",
        "totalSpent": 471.88,
        "balance": -411.88,
        "icon": "fa-film"
    },
    {
        "idBudget": 87,
        "idUser": 2,
        "month": "2025-03",
        "categoryName": "Alquiler como inquilino",
        "limitAmount": "350.00",
        "totalSpent": 103.39,
        "balance": 246.61,
        "icon": "fa-home"
    },
    {
        "idBudget": 88,
        "idUser": 2,
        "month": "2025-03",
        "categoryName": "Peluquería",
        "limitAmount": "30.00",
        "totalSpent": 85.54,
        "balance": -55.54,
        "icon": "fa-cut"
    },
    {
        "idBudget": 89,
        "idUser": 2,
        "month": "2025-03",
        "categoryName": "Billetes de viaje",
        "limitAmount": "120.00",
        "totalSpent": 548.83,
        "balance": -428.83,
        "icon": "fa-ticket-alt"
    },
    {
        "idBudget": 90,
        "idUser": 2,
        "month": "2025-03",
        "categoryName": "Cafeterías y restaurantes",
        "limitAmount": "170.00",
        "totalSpent": 66.45,
        "balance": 103.55,
        "icon": "fa-utensils"
    }

];

export { transactions, budgets }