import { UserContext, UserContext2 } from "../../App";
import { useContext } from "react";

function ContextC() {
  const context1 = useContext(UserContext);
  const context2 = useContext(UserContext2);

  return <div>{`${context1} ${context2}`}</div>;
}

export default ContextC;
