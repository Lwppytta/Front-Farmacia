import { useEffect, useState } from 'react';
import { buscar } from '../../service/Service';

import Categoria from '../../models/Categoria';
import CardCategorias from '../../components/categoria/CardCategoria';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import "./ListaCategoria.css"




function ListaCategorias() {

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    async function buscarCategoria() {
        try {
            await buscar('/categoria', setCategoria)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro, tente novamente')
            }
        }
    }

    useEffect(() => {
        buscarCategoria()
    }, [categoria.length])

    return (
        <>
            <div className="font-fontProjeto font-bold container z-0 w-[80vw] px-[1vw] mx-auto my-0 grid grid-cols-3 gap-4">

                <div className='col-span-3 flex justify-between items-center mt-8 mb-10'>
                    <div className='px-4 py-2 text-2xl text-white bg-[white] hover:bg-[#0F9D84]'></div>

                    <h1 className='text-center text-6xl text-[#DB5413] font-bold'>Categorias</h1>

                    <Popup
                        className='-content'
                        trigger={
                            <button
                                className='flex justify-items-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]'>
                                + criar
                            </button>
                        }
                        modal
                    >
                        <FormularioCategoria />
                    </Popup>
                </div>

                {categoria.map((categoria) => (
                    <>
                        <CardCategorias key={categoria.id} categoria={categoria} />
                    </>
                ))}

            </div>
        </>
    )
}

export default ListaCategorias