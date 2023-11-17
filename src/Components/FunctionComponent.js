//Prop Component

function FunctionComponent(props) {
  const { name, skills } = props;
  return (
    <div className="component">
      <h1>Function Component</h1>
      <br />
      <h2>Welcome {name}</h2>
      <h3>Skills:</h3>
      {skills.map((value, index) => (
        <li key={index}>{`${index + 1}: ${value} `}</li>
      ))}
    </div>
  );
}

export default FunctionComponent;
