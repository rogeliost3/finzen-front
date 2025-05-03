const transactions = [
    {
        "date": "2025-02-04",
        "type": "expense",
        "amount": "376.86",
        "description": "Pago relacionado con Mantenimiento del vehículo"
    },
    {
        "date": "2025-02-07",
        "type": "expense",
        "amount": "392.58",
        "description": "Pago relacionado con Transporte público"
    },
    {
        "date": "2025-02-16",
        "type": "expense",
        "amount": "64.78",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-01-14",
        "type": "expense",
        "amount": "167.10",
        "description": "Pago relacionado con Comisiones e intereses"
    },
    {
        "date": "2025-02-03",
        "type": "expense",
        "amount": "90.05",
        "description": "Pago relacionado con Dentista, médico"
    },
    {
        "date": "2025-02-14",
        "type": "expense",
        "amount": "236.25",
        "description": "Pago relacionado con Electrónica"
    },
    {
        "date": "2025-01-29",
        "type": "income",
        "amount": "126.84",
        "description": "Pago relacionado con Ingresos por regalos"
    },
    {
        "date": "2025-03-04",
        "type": "expense",
        "amount": "194.91",
        "description": "Pago relacionado con Agua"
    },
    {
        "date": "2025-02-16",
        "type": "expense",
        "amount": "73.22",
        "description": "Pago relacionado con Deporte y gimnasio"
    },
    {
        "date": "2025-03-29",
        "type": "expense",
        "amount": "285.85",
        "description": "Pago relacionado con Transacción entre cuentas"
    },
    {
        "date": "2025-01-12",
        "type": "expense",
        "amount": "448.60",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-03-31",
        "type": "expense",
        "amount": "42.59",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-03-15",
        "type": "income",
        "amount": "212.66",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-02-11",
        "type": "expense",
        "amount": "76.77",
        "description": "Pago relacionado con Supermercados y alimentación"
    },
    {
        "date": "2025-01-23",
        "type": "expense",
        "amount": "258.26",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-02-06",
        "type": "expense",
        "amount": "53.93",
        "description": "Pago relacionado con Dentista, médico"
    },
    {
        "date": "2025-01-25",
        "type": "expense",
        "amount": "284.82",
        "description": "Pago relacionado con Transacción entre cuentas"
    },
    {
        "date": "2025-01-19",
        "type": "expense",
        "amount": "81.14",
        "description": "Pago relacionado con Peluquería"
    },
    {
        "date": "2025-01-01",
        "type": "expense",
        "amount": "219.32",
        "description": "Pago relacionado con Billetes de viaje"
    },
    {
        "date": "2025-01-05",
        "type": "expense",
        "amount": "470.87",
        "description": "Pago relacionado con Comisiones e intereses"
    },
    {
        "date": "2025-01-26",
        "type": "expense",
        "amount": "252.03",
        "description": "Pago relacionado con Fianza y garantia como inquilino"
    },
    {
        "date": "2025-02-05",
        "type": "income",
        "amount": "353.67",
        "description": "Pago relacionado con Ingresos por indemnizaciones"
    },
    {
        "date": "2025-02-08",
        "type": "expense",
        "amount": "422.17",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-03-22",
        "type": "expense",
        "amount": "420.51",
        "description": "Pago relacionado con Transferencias"
    },
    {
        "date": "2025-02-20",
        "type": "expense",
        "amount": "31.27",
        "description": "Pago relacionado con Tarjetas financieras"
    },
    {
        "date": "2025-01-16",
        "type": "expense",
        "amount": "209.98",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición"
    },
    {
        "date": "2025-01-14",
        "type": "expense",
        "amount": "144.58",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición"
    },
    {
        "date": "2025-03-16",
        "type": "expense",
        "amount": "481.25",
        "description": "Pago relacionado con Seguro de hogar"
    },
    {
        "date": "2025-02-17",
        "type": "expense",
        "amount": "134.31",
        "description": "Pago relacionado con Transacción entre cuentas"
    },
    {
        "date": "2025-03-01",
        "type": "expense",
        "amount": "263.85",
        "description": "Pago relacionado con Comunidad"
    },
    {
        "date": "2025-01-18",
        "type": "expense",
        "amount": "79.68",
        "description": "Pago relacionado con Plan de pensiones"
    },
    {
        "date": "2025-01-11",
        "type": "expense",
        "amount": "330.19",
        "description": "Pago relacionado con Tren, avión, transporte"
    },
    {
        "date": "2025-02-11",
        "type": "expense",
        "amount": "56.54",
        "description": "Pago relacionado con Gasolina y combustible"
    },
    {
        "date": "2025-02-10",
        "type": "expense",
        "amount": "190.23",
        "description": "Pago relacionado con Seguro de hogar"
    },
    {
        "date": "2025-01-24",
        "type": "expense",
        "amount": "107.32",
        "description": "Pago relacionado con Comunidad derramas"
    },
    {
        "date": "2025-01-12",
        "type": "expense",
        "amount": "382.81",
        "description": "Pago relacionado con Tren, avión, transporte"
    },
    {
        "date": "2025-01-08",
        "type": "expense",
        "amount": "413.98",
        "description": "Pago relacionado con Óptica"
    },
    {
        "date": "2025-03-19",
        "type": "expense",
        "amount": "109.53",
        "description": "Pago relacionado con Transferencias"
    },
    {
        "date": "2025-03-20",
        "type": "expense",
        "amount": "339.43",
        "description": "Pago relacionado con Loterías y apuestas"
    },
    {
        "date": "2025-01-23",
        "type": "expense",
        "amount": "477.52",
        "description": "Pago relacionado con Peajes"
    },
    {
        "date": "2025-03-18",
        "type": "expense",
        "amount": "214.76",
        "description": "Pago relacionado con Otros gastos (otros)"
    },
    {
        "date": "2025-01-04",
        "type": "income",
        "amount": "384.49",
        "description": "Pago relacionado con Ingresos por indemnizaciones"
    },
    {
        "date": "2025-02-24",
        "type": "expense",
        "amount": "361.28",
        "description": "Pago relacionado con Cine, teatro y espectáculos"
    },
    {
        "date": "2025-01-12",
        "type": "income",
        "amount": "277.11",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-02-10",
        "type": "expense",
        "amount": "26.56",
        "description": "Pago relacionado con Mantenimiento del vehículo"
    },
    {
        "date": "2025-02-25",
        "type": "expense",
        "amount": "269.54",
        "description": "Pago relacionado con Plan de pensiones"
    },
    {
        "date": "2025-01-25",
        "type": "expense",
        "amount": "212.86",
        "description": "Pago relacionado con Comunidad"
    },
    {
        "date": "2025-01-25",
        "type": "expense",
        "amount": "450.47",
        "description": "Pago relacionado con Transacción entre cuentas"
    },
    {
        "date": "2025-02-26",
        "type": "expense",
        "amount": "126.96",
        "description": "Pago relacionado con Comisiones e intereses"
    },
    {
        "date": "2025-02-25",
        "type": "expense",
        "amount": "67.40",
        "description": "Pago relacionado con Seguro de hogar"
    },
    {
        "date": "2025-01-08",
        "type": "expense",
        "amount": "196.11",
        "description": "Pago relacionado con Gasolina y combustible"
    },
    {
        "date": "2025-02-13",
        "type": "income",
        "amount": "306.07",
        "description": "Pago relacionado con Ingresos por loteria"
    },
    {
        "date": "2025-03-27",
        "type": "expense",
        "amount": "464.86",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-01-22",
        "type": "expense",
        "amount": "304.50",
        "description": "Pago relacionado con Transferencias"
    },
    {
        "date": "2025-02-24",
        "type": "expense",
        "amount": "159.83",
        "description": "Pago relacionado con Transacción entre cuentas"
    },
    {
        "date": "2025-02-27",
        "type": "expense",
        "amount": "241.48",
        "description": "Pago relacionado con Mantenimiento del hogar"
    },
    {
        "date": "2025-02-23",
        "type": "expense",
        "amount": "37.60",
        "description": "Pago relacionado con Suscripciones"
    },
    {
        "date": "2025-01-29",
        "type": "expense",
        "amount": "353.44",
        "description": "Pago relacionado con Seguro de salud"
    },
    {
        "date": "2025-03-18",
        "type": "expense",
        "amount": "307.78",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-02-18",
        "type": "income",
        "amount": "290.13",
        "description": "Pago relacionado con Ingresos por otros pagos"
    },
    {
        "date": "2025-01-31",
        "type": "expense",
        "amount": "144.82",
        "description": "Pago relacionado con Decoración y mobiliario"
    },
    {
        "date": "2025-03-07",
        "type": "expense",
        "amount": "187.85",
        "description": "Pago relacionado con Parking y garaje"
    },
    {
        "date": "2025-01-05",
        "type": "expense",
        "amount": "225.39",
        "description": "Pago relacionado con Teléfono, TV e internet"
    },
    {
        "date": "2025-02-12",
        "type": "income",
        "amount": "115.05",
        "description": "Pago relacionado con Ingresos por loteria"
    },
    {
        "date": "2025-03-05",
        "type": "income",
        "amount": "267.87",
        "description": "Pago relacionado con Ingresos por indemnizaciones"
    },
    {
        "date": "2025-01-17",
        "type": "expense",
        "amount": "144.90",
        "description": "Pago relacionado con Parking y garaje"
    },
    {
        "date": "2025-01-04",
        "type": "expense",
        "amount": "63.19",
        "description": "Pago relacionado con Fianza y garantia como inquilino"
    },
    {
        "date": "2025-02-24",
        "type": "expense",
        "amount": "183.12",
        "description": "Pago relacionado con Mantenimiento del vehículo"
    },
    {
        "date": "2025-03-07",
        "type": "expense",
        "amount": "25.24",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-03-10",
        "type": "income",
        "amount": "196.53",
        "description": "Pago relacionado con Ingresos por indemnizaciones"
    },
    {
        "date": "2025-01-11",
        "type": "expense",
        "amount": "41.02",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-01-16",
        "type": "income",
        "amount": "286.90",
        "description": "Pago relacionado con Ingresos por loteria"
    },
    {
        "date": "2025-03-29",
        "type": "expense",
        "amount": "181.08",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-02-07",
        "type": "income",
        "amount": "302.81",
        "description": "Pago relacionado con Ingresos por loteria"
    },
    {
        "date": "2025-01-13",
        "type": "expense",
        "amount": "242.67",
        "description": "Pago relacionado con Otros préstamos y avales"
    },
    {
        "date": "2025-03-27",
        "type": "expense",
        "amount": "139.69",
        "description": "Pago relacionado con Comisiones e intereses"
    },
    {
        "date": "2025-01-26",
        "type": "expense",
        "amount": "393.61",
        "description": "Pago relacionado con Gastos de inmobiliaria"
    },
    {
        "date": "2025-02-02",
        "type": "expense",
        "amount": "252.51",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-01-07",
        "type": "expense",
        "amount": "383.06",
        "description": "Pago relacionado con Pagos impuestos"
    },
    {
        "date": "2025-03-11",
        "type": "income",
        "amount": "338.78",
        "description": "Pago relacionado con Nómina o Pensión"
    },
    {
        "date": "2025-01-01",
        "type": "expense",
        "amount": "382.47",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición"
    },
    {
        "date": "2025-03-22",
        "type": "expense",
        "amount": "272.37",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-02-05",
        "type": "expense",
        "amount": "14.42",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-03-20",
        "type": "expense",
        "amount": "403.36",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-03-20",
        "type": "expense",
        "amount": "225.62",
        "description": "Pago relacionado con Comunidad"
    },
    {
        "date": "2025-03-01",
        "type": "expense",
        "amount": "63.50",
        "description": "Pago relacionado con Alquiler como inquilino"
    },
    {
        "date": "2025-02-24",
        "type": "income",
        "amount": "278.75",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-03-04",
        "type": "expense",
        "amount": "466.48",
        "description": "Pago relacionado con Seguro de salud"
    },
    {
        "date": "2025-01-17",
        "type": "expense",
        "amount": "287.87",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-03-02",
        "type": "expense",
        "amount": "265.04",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-01-14",
        "type": "expense",
        "amount": "174.60",
        "description": "Pago relacionado con Plan de pensiones"
    },
    {
        "date": "2025-02-15",
        "type": "expense",
        "amount": "58.26",
        "description": "Pago relacionado con Loterías y apuestas"
    },
    {
        "date": "2025-01-05",
        "type": "expense",
        "amount": "201.26",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-03-23",
        "type": "expense",
        "amount": "87.81",
        "description": "Pago relacionado con Parking y garaje"
    },
    {
        "date": "2025-02-03",
        "type": "expense",
        "amount": "389.35",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-01-08",
        "type": "expense",
        "amount": "196.49",
        "description": "Pago relacionado con Electrónica"
    },
    {
        "date": "2025-02-26",
        "type": "expense",
        "amount": "220.57",
        "description": "Pago relacionado con Mantenimiento del vehículo"
    },
    {
        "date": "2025-02-01",
        "type": "expense",
        "amount": "311.44",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-01-03",
        "type": "expense",
        "amount": "305.66",
        "description": "Pago relacionado con Peajes"
    },
    {
        "date": "2025-02-07",
        "type": "expense",
        "amount": "468.72",
        "description": "Pago relacionado con Fianza y garantia como inquilino"
    },
    {
        "date": "2025-03-19",
        "type": "expense",
        "amount": "39.89",
        "description": "Pago relacionado con Alquiler como inquilino"
    },
    {
        "date": "2025-02-24",
        "type": "expense",
        "amount": "322.64",
        "description": "Pago relacionado con Transferencias"
    },
    {
        "date": "2025-03-16",
        "type": "income",
        "amount": "356.50",
        "description": "Pago relacionado con Ingresos por regalos"
    },
    {
        "date": "2025-01-13",
        "type": "expense",
        "amount": "479.34",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-03-04",
        "type": "expense",
        "amount": "307.37",
        "description": "Pago relacionado con Peajes"
    },
    {
        "date": "2025-01-26",
        "type": "income",
        "amount": "490.17",
        "description": "Pago relacionado con Ingresos de seguros"
    },
    {
        "date": "2025-01-16",
        "type": "expense",
        "amount": "116.63",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-01-14",
        "type": "expense",
        "amount": "145.94",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-03-31",
        "type": "expense",
        "amount": "340.13",
        "description": "Pago relacionado con Alquiler como inquilino"
    },
    {
        "date": "2025-03-31",
        "type": "expense",
        "amount": "292.02",
        "description": "Pago relacionado con Gasolina y combustible"
    },
    {
        "date": "2025-03-12",
        "type": "expense",
        "amount": "491.46",
        "description": "Pago relacionado con Otros gastos (otros)"
    },
    {
        "date": "2025-02-21",
        "type": "expense",
        "amount": "456.01",
        "description": "Pago relacionado con Mantenimiento del hogar"
    },
    {
        "date": "2025-03-22",
        "type": "expense",
        "amount": "6.46",
        "description": "Pago relacionado con Plan de pensiones"
    },
    {
        "date": "2025-03-08",
        "type": "expense",
        "amount": "143.39",
        "description": "Pago relacionado con Suscripciones"
    },
    {
        "date": "2025-02-01",
        "type": "expense",
        "amount": "448.18",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-01-01",
        "type": "income",
        "amount": "245.22",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-02-27",
        "type": "expense",
        "amount": "494.49",
        "description": "Pago relacionado con Otros gastos (otros)"
    },
    {
        "date": "2025-01-24",
        "type": "expense",
        "amount": "319.99",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-02-18",
        "type": "income",
        "amount": "409.30",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-03-23",
        "type": "expense",
        "amount": "471.58",
        "description": "Pago relacionado con Tarjetas financieras"
    },
    {
        "date": "2025-02-02",
        "type": "income",
        "amount": "267.87",
        "description": "Pago relacionado con Ingresos por loteria"
    },
    {
        "date": "2025-01-16",
        "type": "expense",
        "amount": "249.57",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-01-15",
        "type": "income",
        "amount": "47.75",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-01-24",
        "type": "expense",
        "amount": "396.65",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-02-10",
        "type": "expense",
        "amount": "62.40",
        "description": "Pago relacionado con Abono de intereses"
    },
    {
        "date": "2025-01-30",
        "type": "expense",
        "amount": "271.00",
        "description": "Pago relacionado con Dentista, médico"
    },
    {
        "date": "2025-01-30",
        "type": "expense",
        "amount": "252.57",
        "description": "Pago relacionado con Hipoteca"
    },
    {
        "date": "2025-02-01",
        "type": "income",
        "amount": "86.96",
        "description": "Pago relacionado con Nómina o Pensión"
    },
    {
        "date": "2025-01-03",
        "type": "expense",
        "amount": "317.75",
        "description": "Pago relacionado con Otros préstamos y avales"
    },
    {
        "date": "2025-02-04",
        "type": "expense",
        "amount": "248.06",
        "description": "Pago relacionado con Transporte público"
    },
    {
        "date": "2025-01-05",
        "type": "expense",
        "amount": "68.47",
        "description": "Pago relacionado con Peluquería"
    },
    {
        "date": "2025-02-07",
        "type": "expense",
        "amount": "425.63",
        "description": "Pago relacionado con Agua"
    },
    {
        "date": "2025-01-05",
        "type": "expense",
        "amount": "68.39",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-02-22",
        "type": "expense",
        "amount": "349.81",
        "description": "Pago relacionado con Comunidad derramas"
    },
    {
        "date": "2025-03-09",
        "type": "expense",
        "amount": "85.54",
        "description": "Pago relacionado con Peluquería"
    },
    {
        "date": "2025-01-10",
        "type": "expense",
        "amount": "425.48",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-02-28",
        "type": "expense",
        "amount": "422.25",
        "description": "Pago relacionado con Transporte público"
    },
    {
        "date": "2025-02-01",
        "type": "expense",
        "amount": "421.13",
        "description": "Pago relacionado con Pago de multas"
    },
    {
        "date": "2025-01-02",
        "type": "expense",
        "amount": "350.30",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-02-09",
        "type": "expense",
        "amount": "465.50",
        "description": "Pago relacionado con Hotel y alojamiento"
    },
    {
        "date": "2025-03-29",
        "type": "expense",
        "amount": "91.22",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-01-30",
        "type": "expense",
        "amount": "291.06",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-01-16",
        "type": "expense",
        "amount": "423.51",
        "description": "Pago relacionado con Loterías y apuestas"
    },
    {
        "date": "2025-02-28",
        "type": "expense",
        "amount": "241.14",
        "description": "Pago relacionado con Peajes"
    },
    {
        "date": "2025-03-29",
        "type": "income",
        "amount": "467.53",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-03-01",
        "type": "expense",
        "amount": "339.43",
        "description": "Pago relacionado con Seguro de hogar"
    },
    {
        "date": "2025-01-10",
        "type": "expense",
        "amount": "67.63",
        "description": "Pago relacionado con Peluquería"
    },
    {
        "date": "2025-01-22",
        "type": "expense",
        "amount": "346.89",
        "description": "Pago relacionado con Seguro de hogar"
    },
    {
        "date": "2025-01-22",
        "type": "expense",
        "amount": "449.34",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-03-13",
        "type": "expense",
        "amount": "461.57",
        "description": "Pago relacionado con Billetes de viaje"
    },
    {
        "date": "2025-01-25",
        "type": "expense",
        "amount": "453.85",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-02-18",
        "type": "expense",
        "amount": "229.84",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-03-27",
        "type": "expense",
        "amount": "404.37",
        "description": "Pago relacionado con Plan de pensiones"
    },
    {
        "date": "2025-02-21",
        "type": "expense",
        "amount": "204.49",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-01-29",
        "type": "expense",
        "amount": "281.31",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-03-24",
        "type": "expense",
        "amount": "445.90",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-01-19",
        "type": "expense",
        "amount": "228.78",
        "description": "Pago relacionado con Sindicatos"
    },
    {
        "date": "2025-03-07",
        "type": "expense",
        "amount": "403.81",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-01-12",
        "type": "expense",
        "amount": "57.60",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-02-22",
        "type": "expense",
        "amount": "233.76",
        "description": "Pago relacionado con Comunidad"
    },
    {
        "date": "2025-02-05",
        "type": "expense",
        "amount": "432.40",
        "description": "Pago relacionado con Óptica"
    },
    {
        "date": "2025-01-30",
        "type": "income",
        "amount": "113.58",
        "description": "Pago relacionado con Ingresos por otros pagos"
    },
    {
        "date": "2025-02-24",
        "type": "expense",
        "amount": "215.20",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-03-25",
        "type": "expense",
        "amount": "373.75",
        "description": "Pago relacionado con Comunidad"
    },
    {
        "date": "2025-01-04",
        "type": "income",
        "amount": "473.07",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-03-27",
        "type": "expense",
        "amount": "192.63",
        "description": "Pago relacionado con Cine, teatro y espectáculos"
    },
    {
        "date": "2025-02-04",
        "type": "expense",
        "amount": "119.42",
        "description": "Pago relacionado con Teléfono, TV e internet"
    },
    {
        "date": "2025-01-04",
        "type": "expense",
        "amount": "299.72",
        "description": "Pago relacionado con Transferencias"
    },
    {
        "date": "2025-01-17",
        "type": "expense",
        "amount": "77.55",
        "description": "Pago relacionado con Tren, avión, transporte"
    },
    {
        "date": "2025-03-12",
        "type": "expense",
        "amount": "327.25",
        "description": "Pago relacionado con Teléfono, TV e internet"
    },
    {
        "date": "2025-03-28",
        "type": "expense",
        "amount": "66.45",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-03-25",
        "type": "expense",
        "amount": "95.68",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-01-16",
        "type": "expense",
        "amount": "116.08",
        "description": "Pago relacionado con Decoración y mobiliario"
    },
    {
        "date": "2025-03-03",
        "type": "income",
        "amount": "74.88",
        "description": "Pago relacionado con Ingresos por otros pagos"
    },
    {
        "date": "2025-02-04",
        "type": "expense",
        "amount": "140.97",
        "description": "Pago relacionado con Teléfono, TV e internet"
    },
    {
        "date": "2025-02-23",
        "type": "expense",
        "amount": "488.89",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-03-06",
        "type": "expense",
        "amount": "101.93",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-03-01",
        "type": "expense",
        "amount": "144.20",
        "description": "Pago relacionado con Deporte y gimnasio"
    },
    {
        "date": "2025-01-12",
        "type": "expense",
        "amount": "148.73",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-01-26",
        "type": "expense",
        "amount": "233.66",
        "description": "Pago relacionado con Hipoteca"
    },
    {
        "date": "2025-03-04",
        "type": "expense",
        "amount": "245.63",
        "description": "Pago relacionado con Hipoteca"
    },
    {
        "date": "2025-03-26",
        "type": "expense",
        "amount": "200.62",
        "description": "Pago relacionado con Gasolina y combustible"
    },
    {
        "date": "2025-03-14",
        "type": "expense",
        "amount": "277.59",
        "description": "Pago relacionado con Mantenimiento del hogar"
    },
    {
        "date": "2025-03-13",
        "type": "expense",
        "amount": "32.75",
        "description": "Pago relacionado con Seguro de vehículo"
    },
    {
        "date": "2025-03-09",
        "type": "expense",
        "amount": "188.41",
        "description": "Pago relacionado con Transferencias"
    },
    {
        "date": "2025-03-10",
        "type": "expense",
        "amount": "436.61",
        "description": "Pago relacionado con Gastos de inmobiliaria"
    },
    {
        "date": "2025-03-27",
        "type": "expense",
        "amount": "193.06",
        "description": "Pago relacionado con Transporte público"
    },
    {
        "date": "2025-03-15",
        "type": "income",
        "amount": "244.57",
        "description": "Pago relacionado con Ingresos por regalos"
    },
    {
        "date": "2025-02-17",
        "type": "expense",
        "amount": "74.09",
        "description": "Pago relacionado con Suscripciones"
    },
    {
        "date": "2025-03-24",
        "type": "income",
        "amount": "335.27",
        "description": "Pago relacionado con Ingresos por loteria"
    },
    {
        "date": "2025-02-21",
        "type": "expense",
        "amount": "387.79",
        "description": "Pago relacionado con Otros préstamos y avales"
    },
    {
        "date": "2025-01-09",
        "type": "expense",
        "amount": "28.38",
        "description": "Pago relacionado con Sindicatos"
    },
    {
        "date": "2025-03-06",
        "type": "expense",
        "amount": "360.74",
        "description": "Pago relacionado con Gasolina y combustible"
    },
    {
        "date": "2025-03-23",
        "type": "expense",
        "amount": "234.05",
        "description": "Pago relacionado con Gasolina y combustible"
    },
    {
        "date": "2025-03-09",
        "type": "expense",
        "amount": "432.60",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-02-08",
        "type": "expense",
        "amount": "237.45",
        "description": "Pago relacionado con Comunidad"
    },
    {
        "date": "2025-02-22",
        "type": "expense",
        "amount": "357.44",
        "description": "Pago relacionado con Tarjetas financieras"
    },
    {
        "date": "2025-02-01",
        "type": "expense",
        "amount": "221.61",
        "description": "Pago relacionado con Mantenimiento del vehículo"
    },
    {
        "date": "2025-02-21",
        "type": "expense",
        "amount": "328.75",
        "description": "Pago relacionado con Billetes de viaje"
    },
    {
        "date": "2025-03-05",
        "type": "expense",
        "amount": "143.17",
        "description": "Pago relacionado con Sindicatos"
    },
    {
        "date": "2025-01-22",
        "type": "expense",
        "amount": "254.25",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-03-10",
        "type": "expense",
        "amount": "276.79",
        "description": "Pago relacionado con Otros préstamos y avales"
    },
    {
        "date": "2025-02-01",
        "type": "expense",
        "amount": "375.45",
        "description": "Pago relacionado con Mantenimiento del hogar"
    },
    {
        "date": "2025-01-31",
        "type": "expense",
        "amount": "134.63",
        "description": "Pago relacionado con Mantenimiento del hogar"
    },
    {
        "date": "2025-02-09",
        "type": "expense",
        "amount": "398.40",
        "description": "Pago relacionado con Pagos impuestos"
    },
    {
        "date": "2025-03-29",
        "type": "expense",
        "amount": "153.99",
        "description": "Pago relacionado con Loterías y apuestas"
    },
    {
        "date": "2025-03-26",
        "type": "income",
        "amount": "296.82",
        "description": "Pago relacionado con Ingresos por regalos"
    },
    {
        "date": "2025-02-25",
        "type": "expense",
        "amount": "279.96",
        "description": "Pago relacionado con Electrónica"
    },
    {
        "date": "2025-03-24",
        "type": "expense",
        "amount": "429.82",
        "description": "Pago relacionado con Dentista, médico"
    },
    {
        "date": "2025-01-27",
        "type": "expense",
        "amount": "261.75",
        "description": "Pago relacionado con Otros gastos (otros)"
    },
    {
        "date": "2025-03-01",
        "type": "expense",
        "amount": "172.54",
        "description": "Pago relacionado con Seguro de hogar"
    },
    {
        "date": "2025-02-06",
        "type": "expense",
        "amount": "189.27",
        "description": "Pago relacionado con Tren, avión, transporte"
    },
    {
        "date": "2025-01-31",
        "type": "expense",
        "amount": "76.17",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-01-18",
        "type": "expense",
        "amount": "126.92",
        "description": "Pago relacionado con Suscripciones"
    },
    {
        "date": "2025-01-25",
        "type": "income",
        "amount": "290.17",
        "description": "Pago relacionado con Ingresos por indemnizaciones"
    },
    {
        "date": "2025-02-19",
        "type": "expense",
        "amount": "129.70",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-02-18",
        "type": "expense",
        "amount": "246.56",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-01-21",
        "type": "expense",
        "amount": "448.08",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-02-06",
        "type": "expense",
        "amount": "348.51",
        "description": "Pago relacionado con Sindicatos"
    },
    {
        "date": "2025-03-24",
        "type": "expense",
        "amount": "195.71",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-03-01",
        "type": "income",
        "amount": "494.78",
        "description": "Pago relacionado con Ingresos por otros pagos"
    },
    {
        "date": "2025-02-15",
        "type": "expense",
        "amount": "71.96",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-02-22",
        "type": "expense",
        "amount": "239.52",
        "description": "Pago relacionado con Billetes de viaje"
    },
    {
        "date": "2025-03-05",
        "type": "expense",
        "amount": "64.55",
        "description": "Pago relacionado con Peajes"
    },
    {
        "date": "2025-02-22",
        "type": "income",
        "amount": "417.85",
        "description": "Pago relacionado con Nómina o Pensión"
    },
    {
        "date": "2025-02-03",
        "type": "expense",
        "amount": "149.48",
        "description": "Pago relacionado con Comunidad"
    },
    {
        "date": "2025-01-16",
        "type": "expense",
        "amount": "142.62",
        "description": "Pago relacionado con Hipoteca"
    },
    {
        "date": "2025-02-25",
        "type": "expense",
        "amount": "138.56",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-02-08",
        "type": "income",
        "amount": "48.81",
        "description": "Pago relacionado con Ingresos de impuestos"
    },
    {
        "date": "2025-03-12",
        "type": "expense",
        "amount": "479.15",
        "description": "Pago relacionado con Otros gastos (otros)"
    },
    {
        "date": "2025-01-06",
        "type": "expense",
        "amount": "74.70",
        "description": "Pago relacionado con Regalos y juguetes"
    },
    {
        "date": "2025-03-18",
        "type": "expense",
        "amount": "418.92",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-02-18",
        "type": "expense",
        "amount": "436.49",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-03-21",
        "type": "expense",
        "amount": "85.90",
        "description": "Pago relacionado con Parking y garaje"
    },
    {
        "date": "2025-01-15",
        "type": "expense",
        "amount": "444.42",
        "description": "Pago relacionado con Óptica"
    },
    {
        "date": "2025-03-16",
        "type": "expense",
        "amount": "10.66",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-02-02",
        "type": "expense",
        "amount": "402.18",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-03-07",
        "type": "income",
        "amount": "386.81",
        "description": "Pago relacionado con Ingresos por indemnizaciones"
    },
    {
        "date": "2025-02-06",
        "type": "expense",
        "amount": "422.57",
        "description": "Pago relacionado con Transferencias"
    },
    {
        "date": "2025-03-13",
        "type": "expense",
        "amount": "248.34",
        "description": "Pago relacionado con Otros gastos (otros)"
    },
    {
        "date": "2025-01-02",
        "type": "expense",
        "amount": "481.32",
        "description": "Pago relacionado con Mantenimiento del vehículo"
    },
    {
        "date": "2025-02-07",
        "type": "expense",
        "amount": "134.76",
        "description": "Pago relacionado con Suscripciones"
    },
    {
        "date": "2025-01-05",
        "type": "expense",
        "amount": "319.90",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-03-01",
        "type": "expense",
        "amount": "336.93",
        "description": "Pago relacionado con Alquiler de vehículo"
    },
    {
        "date": "2025-02-02",
        "type": "expense",
        "amount": "132.98",
        "description": "Pago relacionado con Seguro de salud"
    },
    {
        "date": "2025-01-12",
        "type": "expense",
        "amount": "40.66",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-01-21",
        "type": "expense",
        "amount": "322.58",
        "description": "Pago relacionado con Pago de multas"
    },
    {
        "date": "2025-02-17",
        "type": "expense",
        "amount": "151.35",
        "description": "Pago relacionado con Gasolina y combustible"
    },
    {
        "date": "2025-03-11",
        "type": "expense",
        "amount": "260.46",
        "description": "Pago relacionado con Transacción entre cuentas"
    },
    {
        "date": "2025-01-01",
        "type": "expense",
        "amount": "206.00",
        "description": "Pago relacionado con Otros gastos (otros)"
    },
    {
        "date": "2025-02-03",
        "type": "expense",
        "amount": "451.65",
        "description": "Pago relacionado con Comunidad derramas"
    },
    {
        "date": "2025-01-06",
        "type": "expense",
        "amount": "158.76",
        "description": "Pago relacionado con Abono de intereses"
    },
    {
        "date": "2025-02-15",
        "type": "expense",
        "amount": "232.45",
        "description": "Pago relacionado con Billetes de viaje"
    },
    {
        "date": "2025-03-22",
        "type": "expense",
        "amount": "9.26",
        "description": "Pago relacionado con Regalos y juguetes"
    },
    {
        "date": "2025-01-30",
        "type": "expense",
        "amount": "175.65",
        "description": "Pago relacionado con Cine, teatro y espectáculos"
    },
    {
        "date": "2025-02-16",
        "type": "expense",
        "amount": "79.76",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-03-03",
        "type": "expense",
        "amount": "279.25",
        "description": "Pago relacionado con Cine, teatro y espectáculos"
    },
    {
        "date": "2025-01-28",
        "type": "expense",
        "amount": "298.44",
        "description": "Pago relacionado con Comisiones e intereses"
    },
    {
        "date": "2025-02-08",
        "type": "expense",
        "amount": "247.57",
        "description": "Pago relacionado con Tren, avión, transporte"
    },
    {
        "date": "2025-02-18",
        "type": "expense",
        "amount": "23.12",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-01-21",
        "type": "income",
        "amount": "101.72",
        "description": "Pago relacionado con Ingresos por indemnizaciones"
    },
    {
        "date": "2025-01-05",
        "type": "expense",
        "amount": "57.45",
        "description": "Pago relacionado con Gastos de inmobiliaria"
    },
    {
        "date": "2025-02-25",
        "type": "expense",
        "amount": "384.85",
        "description": "Pago relacionado con Peajes"
    },
    {
        "date": "2025-01-31",
        "type": "expense",
        "amount": "23.00",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-03-16",
        "type": "expense",
        "amount": "100.77",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-02-18",
        "type": "expense",
        "amount": "269.28",
        "description": "Pago relacionado con Seguro de vida"
    },
    {
        "date": "2025-02-10",
        "type": "expense",
        "amount": "323.33",
        "description": "Pago relacionado con Tren, avión, transporte"
    },
    {
        "date": "2025-03-27",
        "type": "expense",
        "amount": "139.11",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición"
    },
    {
        "date": "2025-01-01",
        "type": "expense",
        "amount": "62.10",
        "description": "Pago relacionado con Fianza y garantia como inquilino"
    },
    {
        "date": "2025-01-22",
        "type": "expense",
        "amount": "450.17",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-01-04",
        "type": "expense",
        "amount": "427.78",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-01-18",
        "type": "expense",
        "amount": "199.47",
        "description": "Pago relacionado con Cafeterías y restaurantes"
    },
    {
        "date": "2025-03-04",
        "type": "expense",
        "amount": "416.81",
        "description": "Pago relacionado con Transacción entre cuentas"
    },
    {
        "date": "2025-02-23",
        "type": "expense",
        "amount": "406.06",
        "description": "Pago relacionado con Dentista, médico"
    },
    {
        "date": "2025-03-04",
        "type": "expense",
        "amount": "446.56",
        "description": "Pago relacionado con ONGs"
    },
    {
        "date": "2025-02-26",
        "type": "expense",
        "amount": "306.01",
        "description": "Pago relacionado con Supermercados y alimentación"
    },
    {
        "date": "2025-01-24",
        "type": "expense",
        "amount": "88.13",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición"
    },
    {
        "date": "2025-03-07",
        "type": "expense",
        "amount": "111.12",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-02-01",
        "type": "expense",
        "amount": "389.98",
        "description": "Pago relacionado con Luz y gas"
    },
    {
        "date": "2025-02-06",
        "type": "expense",
        "amount": "47.98",
        "description": "Pago relacionado con Suscripciones"
    },
    {
        "date": "2025-02-22",
        "type": "expense",
        "amount": "73.71",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-02-28",
        "type": "expense",
        "amount": "253.48",
        "description": "Pago relacionado con Fianza y garantia como inquilino"
    },
    {
        "date": "2025-03-29",
        "type": "expense",
        "amount": "87.26",
        "description": "Pago relacionado con Billetes de viaje"
    },
    {
        "date": "2025-03-27",
        "type": "expense",
        "amount": "42.50",
        "description": "Pago relacionado con Comisiones e intereses"
    },
    {
        "date": "2025-02-11",
        "type": "expense",
        "amount": "11.30",
        "description": "Pago relacionado con Abono de intereses"
    },
    {
        "date": "2025-01-01",
        "type": "expense",
        "amount": "467.22",
        "description": "Pago relacionado con Farmacia, herbolario y nutrición"
    },
    {
        "date": "2025-02-21",
        "type": "expense",
        "amount": "445.72",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-01-22",
        "type": "expense",
        "amount": "291.38",
        "description": "Pago relacionado con Transporte público"
    },
    {
        "date": "2025-02-13",
        "type": "expense",
        "amount": "195.53",
        "description": "Pago relacionado con Pagos impuestos"
    },
    {
        "date": "2025-01-16",
        "type": "expense",
        "amount": "339.22",
        "description": "Pago relacionado con Suscripciones"
    },
    {
        "date": "2025-01-04",
        "type": "expense",
        "amount": "450.94",
        "description": "Pago relacionado con Ropa y complementos"
    },
    {
        "date": "2025-03-18",
        "type": "expense",
        "amount": "310.22",
        "description": "Pago relacionado con Deporte y gimnasio"
    },
    {
        "date": "2025-01-19",
        "type": "expense",
        "amount": "476.11",
        "description": "Pago relacionado con Peajes"
    },
    {
        "date": "2025-02-16",
        "type": "expense",
        "amount": "287.05",
        "description": "Pago relacionado con Libros, música y videojuegos"
    },
    {
        "date": "2025-01-21",
        "type": "expense",
        "amount": "368.64",
        "description": "Pago relacionado con Regalos y juguetes"
    },
    {
        "date": "2025-02-25",
        "type": "expense",
        "amount": "16.85",
        "description": "Pago relacionado con Cajeros"
    },
    {
        "date": "2025-02-19",
        "type": "expense",
        "amount": "345.39",
        "description": "Pago relacionado con Decoración y mobiliario"
    },
    {
        "date": "2025-02-14",
        "type": "expense",
        "amount": "445.12",
        "description": "Pago relacionado con Educación, salud y deporte"
    },
    {
        "date": "2025-01-15",
        "type": "expense",
        "amount": "132.39",
        "description": "Pago relacionado con Teléfono, TV e internet"
    },
    {
        "date": "2025-02-19",
        "type": "expense",
        "amount": "74.00",
        "description": "Pago relacionado con Transacción entre cuentas"
    }
];

export default transactions;