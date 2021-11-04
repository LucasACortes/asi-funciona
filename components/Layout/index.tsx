import type { FunctionComponent } from 'react'

const Layout: FunctionComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1> As&iacute; funciona </h1>
            </div>
            <div className="nav">
                <div className="nav-item"> Estructuras </div>
                <div className="nav-item"> Algoritmos </div>
                <div className="nav-item"> Conceptos </div>
            </div>
        </div>
    )
}

export default Layout