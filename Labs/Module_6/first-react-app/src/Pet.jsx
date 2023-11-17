function Pet(props) {
  // add this to a new file Pet.jsx in the components folder
  let type = "unknown"; // set default value for type
  let name = "unknown"
  
  if (props.type) type = props.type; // override with prop type if set (could also destructure with default)

  if (props.name) name = props.name
  return (
    <div className="Pet componentBox">
      <h2>My Pet</h2> <p>Type: {type}</p>
      {/* if props.name is truthy (not undefined), render it in a <p> tag, otherwise render nothing */}
      {props.name ? <p>Name: {name}</p> : null}
      {/* Only render the <p> tag if the expression before the && is truthy */}
      {props.colour && <p>Colour: {props.colour}</p>}
    </div>
  );
}
export default Pet;
