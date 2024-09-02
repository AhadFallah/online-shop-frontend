import { useStateContext } from "../context/context";

function Start() {
  const { setToken } = useStateContext();
  const dateNow = Date.now();
  const date = localStorage.getItem("EX");
  if (dateNow - date > 3600000) {
    setToken("");
  }
}

export default Start;
