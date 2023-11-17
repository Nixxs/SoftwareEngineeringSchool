function NamePart(props) {
  return (
    // reusable component to display part of a name from the value prop
    <span className="NamePart">{props.value}</span>
  );
}
function FullName(props) {
  return (
    // composes the NamePart component to display a full name
    <div className="FullName componentBox">
      Full name: <NamePart value={props.first} />{" "}
      <NamePart value={props.last} />
    </div>
  );
}
export default FullName