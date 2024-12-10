import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RoutesHandler } from "./Routes/RoutesHandler";
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom"; // Moved here

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter> {/* BrowserRouter should be here */}
            <Header />
            <RoutesHandler />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
