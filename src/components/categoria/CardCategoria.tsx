import { Link } from 'react-router-dom';
import { ArrowCircleDown } from '@phosphor-icons/react';


import "./CardCategoria.css"
import Categoria from '../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className='flex h-[10vh] justify-center'>
            <p className='flex text-3xl text-[#C24730] font-bold'>Muito Odio</p>
            <div id='dropCat'>
                <button>
                    <ArrowCircleDown size={26} weight="bold" className='dropIcon' />
                </button>
                <div className='dropFilha'>
                    <Link to={`/editarCategoria/${categoria.id}`}>
                        <button className='editar'>Editar</button>
                    </Link>

                    <Link to={`/editarDeletar/${categoria.id}`}>
                        <button className='editar'>Deletar</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CardCategorias