import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "./components/theme-provider"
import LoadingPage from "./pages/LoadingPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className=" mx-auto h-screen">
          <Routes>
             <Route path="/" element={<LoadingPage />} />
             <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
