function Subscribe() {
  return (
    <section className="bg-light text-center">
      <div className="container">

        <h3>Subscribe to get updates</h3>

        <div className="d-flex justify-content-center mt-4">
          <input
            className="form-control w-50"
            placeholder="Enter email"
          />
          <button className="btn btn-primary ms-2">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}


export default Subscribe;