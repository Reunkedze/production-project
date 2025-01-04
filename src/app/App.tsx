import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import {Navbar} from "wigets/Navbar";
import {Sidebar} from "wigets/Sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";

const App = () => {
    const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="">
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </Suspense>
    </div>
  )
}

export default App