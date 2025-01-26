export default function Display(props) {
  return (
    <div className="container">
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <img
            src={props.product.images}
            alt={props.product.title}
            style={{ width: '100%', height: 'auto' }}
          />
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">
            <strong>Description:</strong> {props.product.description}
          </p>
          <p className="card-text">
            <strong>Price:</strong> ${props.product.price}
          </p>
          <p className="card-text">
            <strong>Category:</strong> {props.product.category}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
