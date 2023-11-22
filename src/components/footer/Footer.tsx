import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <div className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 justify-center">
            <div className="w-full flex justify-between text-sky-900 items-center px-4 py-2">
                <div className='flex flex-col'>
                    <LinkedinLogo size={30} weight='bold' />
                    <InstagramLogo size={30} weight='bold' />
                    <FacebookLogo size={30} weight='bold' />
                </div>

                <div className=''>
                    <p className='text-xl font-bold'>Farmácia Lwppytta</p>
                    <p className=''>Copyright: {data}</p>
                </div>

                <div className="flex flex-col text-end">
                    <p className="hover:text-gray-400 cursor-pointer">Politica de Privacidade</p>
                    <p className="hover:text-gray-400 cursor-pointer">Termos e Condições</p>
                    <a href="" className="hover:text-gray-400">Sobre nós!</a>
                </div>
            </div>
        </div>
    )
}

export default Footer