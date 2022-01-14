import { ThemeProvider } from "@emotion/react";
import Layout from "./components/Layout";
import theme from "./theme";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SearchFilterProvider } from "./context/searchFilter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <SearchFilterProvider>
          <Layout />
        </SearchFilterProvider>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
