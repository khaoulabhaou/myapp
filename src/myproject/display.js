export default function Display(products) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{products.title}</h5>
          <p className="card-text">
            <strong>Description:</strong> {products.description}
          </p>
          <p className="card-text">
            <strong>Price:</strong> ${products.price}
          </p>
          <p className="card-text">
            <strong>Category:</strong> {products.category}
          </p>
        </div>
      </div>
    </div>
  );
}
