import { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@constants/products';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination: show 6 products (3x2) per page only for "Todos"
  const productsPerPage = 6;
  const isShowingAll = selectedCategory === 'Todos';

  const filteredProducts = isShowingAll
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === selectedCategory);

  // Only paginate if showing all, otherwise show all products of category
  const displayedProducts = isShowingAll
    ? filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
    : filteredProducts;

  const totalPages = isShowingAll ? Math.ceil(PRODUCTS.length / productsPerPage) : 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="products-section" id="productos">
      <div className="container">
        <h2 className="products-title">Equipate con los mejores productos</h2>

        {/* Filter Buttons */}
        <div className="products-filter">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-card__content">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination__btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Anterior
            </button>

            <div className="pagination__numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination__number ${currentPage === page ? 'pagination__number--active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className="pagination__btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
