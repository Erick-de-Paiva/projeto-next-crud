import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Erick', 25, '1'),
    new Cliente('Teste', 0, '2')
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientes}></Tabela>
        </Layout>
    </div>
  )
}
