import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "./components/theme-provider"
import LoadingPage from "./pages/LoadingPage"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className=" mx-auto h-screen">
          <Routes>
             <Route path="/" element={<LoadingPage />} />
             <Route path="/login" element={<LoginPage />} />
             <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
