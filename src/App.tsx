import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PermissionProvider } from "./Pages/Permission/Permission.provider";
import { LayoutPage } from "./Shared/Layout/Layout.page";
import { TypeProvider } from "./Pages/Type/Type.provider";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LayoutPage>
        <Routes>
          <Route path="/permission" element={<PermissionProvider />} />
          <Route path="/type" element={<TypeProvider />} />
        </Routes>
      </LayoutPage>
    </BrowserRouter>
  );
}

export default App;
