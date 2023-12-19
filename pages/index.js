import { Provider } from "react-redux";
import Taskboard from "../src/container/Taskboard";
import configStore from "../src/redux/configStore";

const store = configStore();

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Taskboard />
      </Provider>
    </>
  );
}
