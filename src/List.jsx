export const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <section key={person.id}>
          <img src={person.image} alt={person} />
          <h2>{person.name}</h2>
          <p>{person.age} years old</p>
        </section>
      ))}
    </div>
  );
};
