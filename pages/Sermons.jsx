import SermonCard from "../components/SermonCard";
export default function Sermons() {
  return (
    <div>
      <h2> Latest Sermons</h2>
      <SermonCard 
      titli="Faith Over Fear"
      precher="Pastor john doe"
      date="August 16, 2025"
      description="A sermon about trusting God in dificulty times."
      />
      
    </div>
  );
}
