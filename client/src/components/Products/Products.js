import Product from "../Product/Product";
import "./Products.css";

function Products({ products, category, price }) {
  console.log("category", category);
  console.log("price", price);
  const filteredProducts = products.filter(
    (product) =>
      product.price >= price[0] &&
      product.price <= price[1] &&
      (category === "all" || product.category === category)
  );

  return (
    <div className="allpro-pop-all">
      {/* <div className="pop-all">
        <div className="all-pro">All</div>
        <div className="popular-pro">Popular</div>
      </div> */}
      <section className="all-products">
        {filteredProducts.map(
          ({
            _id: id,
            title,
            price,
            description,
            category,
            image,
            rating,
            rate,
            count,
          }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
              rate={rate}
              count={count}
            />
          )
        )}
      </section>
    </div>
  );
}

export default Products;
