import { Link, Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "../theme/UseTheme";
import { classNames } from "../helpers/classNames/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={'/about'} element={<AboutPageAsync />} />
        <Route path={'/'} element={<MainPageAsync />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App