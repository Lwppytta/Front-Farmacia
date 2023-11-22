import { Link } from "react-router-dom"

import './Navbar.css'
import { UserCircle } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className='w-full bg-gradient-to-b from-cyan-500 to-blue-500 justify-center'>
                <div className="w-full flex justify-between text-sky-900 text-lg pl-[2vw]">

                    <Link to='/home'>
                        <img src=".\src\assets\logo.png" alt="LogoNav" className="min-w-[6vw] w-[6vw] my-1" />
                    </Link>

                    <div id="direita" className="flex">
                        <Link to='/produtos' className="py-[2vw] px-[1vw] font-bold hover:bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-500">Produtos</Link>
                        <div className="mae inline-block">

                            <Link to='' className="py-[2vw] px-[1vw] font-bold hover:bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-500">Categorias</Link>
                            <div className="filha hidden absolute bg-blue-500">
                                <Link to='/categoria' className="hover:bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500">Todos</Link>
                                <Link to='/cadastroCategorias' className="hover:bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500">Cadastrar</Link>
                            </div>
                        </div>

                        <div className="mae inline-block">
                            <Link to='' className="py-[2vw] px-[1vw]">
                                <UserCircle size={32} />
                            </Link>
                            <div className="filha hidden absolute bg-blue-500">
                                <Link to='' className="hover:bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500">Entrar</Link>
                                <Link to='' className="hover:bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500">Sair</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar