import { useState, useEffect } from "react";
import { getAllCategories } from "../../utils/api/category.js";
import './TransactionFilter.css';

function TransactionFilter({ onSearch, categories }) {
    const [filters, setFilters] = useState({
        idCategory: "",
        dateInit: "",
        dateEnd: ""
    });

    //carga las categorias al inicio del componente
    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         try {
    //             const data = await getAllCategories();
    //             setCategories(data);
    //         } catch (err) {
    //             console.error("Error al obtener categorías:", err);
    //         }
    //     };

    //     fetchCategories();
    // }, []);

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