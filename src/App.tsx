import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PermissionPage } from "./Pages/Permission/Permission.page";
import { LayoutPage } from "./Shared/Layout/Layout.page";
import { TypePage } from "./Pages/Type/Type.page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LayoutPage>
        <Routes>
          <Route path="/permission" element={<PermissionPage />} />
          <Route path="/type" element={<TypePage />} />
        </Routes>
      </LayoutPage>
    </BrowserRouter>
  );
}

export default App;
