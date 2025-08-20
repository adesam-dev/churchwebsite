export default function SermonCard({ title, precher, date, description

}) { 
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", marginBottom: "10px"}}>
      <h3>{title}</h3>
      <p><strong>Precher:</strong> {precher} </p>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
    </div>
  );
}

