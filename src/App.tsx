import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <main className=" dark:bg-black dark:text-white duration-200">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </main>
  );
};

export default App;
