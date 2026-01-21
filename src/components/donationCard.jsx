const DonationCards = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
      }}
    >
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
        {" "}
        <h3>Education</h3>
        <p>Supports School programme</p>
        <button>Donate now</button>
      </div>
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
        {" "}
        <h3>Health Care</h3>
        <p>Supports School programme</p>
        <button>Donate now</button>
      </div>
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
        {" "}
        <h3>Food Aid</h3>
        <p>Supports School programme</p>
        <button>Donate now</button>
      </div>
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
        {" "}
        <h3>Support</h3>
        <p>Supports School programme</p>
        <button>Donate now</button>
      </div>
    </section>
  );
};

export default DonationCards;
