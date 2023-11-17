function Address({ no = 10, street = "Main st", suburb = "Subiaco" }) {
  return (
    <div>
      <p>
        {no} {street}, {suburb}
      </p>
    </div>
  );
}

export default Address;
