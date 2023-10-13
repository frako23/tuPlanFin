import {createRoot} from 'react-dom/client'
import './styles/index.css'
import Layout from './layout'

const root = createRoot(document.querySelector("#root"))

//render your react application
root.render(<Layout/>)