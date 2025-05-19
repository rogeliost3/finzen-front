import { useState } from "react";
import './TransactionFilter.css';

//TODO: Añadir boton para descargar archivo en xls 
//TODO: Añadir boton para importar archivo en xls 
//TODO: hacer que categories aparezca por defecto All seleccionada para ver todos los movimientos
//TODO: Que se admita undefined en campos de fecha para que busque desde siempre

//Panel del filtro de busqueda de transacciones, categoria, desde y hasta fechas
function TransactionFilter({ onSearch, categories }) {
    const [filters, setFilters] = useState({
        idCategory: "",
        dateInit: "",
        dateEnd: ""
    });

    //actualiza el estado filters cuando se modifica algun input del formulario filtro
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="transaction-filter">
            <h4>Transactions filter</h4>
            <form>
                <select
                    name="idCategory"
                    value={filters.idCategory}
                    onChange={handleChange}
                    className="filter-select">
                    {Array.isArray(categories) && categories.map(cat => (
                        <option key={cat.idCategory} value={cat.idCategory}>
                            {cat.name}
                        </option>
                    ))}
                </select>
    
                <input
                    type="date"
                    name="dateInit"
                    value={filters.dateInit}
                    onChange={handleChange}
                    className="filter-date"
                />
    
                <input
                    type="date"
                    name="dateEnd"
                    value={filters.dateEnd}
                    onChange={handleChange}
                    className="filter-date"
                />
    
                <button
                    type="button"
                    className="filter-button"
                    onClick={() => onSearch(filters)}>
                    Buscar
                </button>
            </form>
        </section>
    );
    
}

export default TransactionFilter;