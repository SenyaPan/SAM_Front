import * as reactDomClient from "react-dom/client"
import App from './App'
import './css/main.css'
import './css/header.css'
import './css/switch.css'

const app = reactDomClient.createRoot(document.getElementById("app"))

app.render(<App />)
