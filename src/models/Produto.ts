import Categoria from './Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  categoria: Categoria | null;
}