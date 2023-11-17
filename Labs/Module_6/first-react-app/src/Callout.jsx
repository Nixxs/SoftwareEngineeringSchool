function FancyBorder(props) {
  return <div className="FancyBorder">{props.children}</div>;
}

function FancyBox(props) {
  return (
    <FancyBorder>
      <div className={"FancyBox FancyBox-" + props.color}>
        {props.children}{" "}
      </div>
    </FancyBorder>
  );
}

function Callout(props) {
  return (
    <FancyBox color="blue">
      <h1 className="Callout-title">{props.title}</h1>
      <p className="Callout-message">{props.message}</p>
      {props.children}{" "}
      {/* everything in between the opening
<Callout> and closing </Callout> tags */}
    </FancyBox>
  );
}

// Why not just this?
function NormalHTML(props){
    return (
        <div className="FancyBorder">
            <div className="FancyBox FancyBox-blue">
                <h1 className="Callout-title">Nested React Component</h1>
                <p className="Callout-message">Simple message with a fancy box applied via composition</p>
                <div className="FullName componentBox">
                    Full Name: <span className="NamePart">Elon Musk</span>
                </div>
            </div>
        </div>
    );
}

export {Callout, NormalHTML};
