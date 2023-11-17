function ColorBox(props) {
  const { color } = props;
  return (
    <div>
      <div className="boxColor" style={{ backgroundColor: `${color}`, height: 100, display: "flex", margin: 10 }}></div>
      <p>Color Changes on Input</p>
    </div>
  );
}

export default ColorBox;
