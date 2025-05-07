import { Home } from "./Home";
import MovieDetail from "./MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { ThemeProvider } from "./ThemeProvider";
import Login from "./Login";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route
              path="/my-bookings"
              element={
                <ProtectedRoute>
                  <h1>My bookings page</h1>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
