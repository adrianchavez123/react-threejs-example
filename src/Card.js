export default function Card({ cardAge, cardName, cardJob, counter }) {
  return (
    <div>
      <p>{cardName}</p>
      <p>{cardAge}</p>
      <p>{cardJob}</p>
      <button onClick={counter}>+1</button>
    </div>
  );
}
