import { useState } from "react";
import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Erick', 25, '1'),
    new Cliente('Teste', 0, '2')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
        <Layout titulo="Cadastro Simples">
          {visivel === 'tabela' ? (
            <>
              <div className="flex justify-end">
                <Botao cor="green" className="mb-4"
                  onClick={novoCliente}>
                  Novo Cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido} 
              />
            </>  
          ) : (
            <Formulario 
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={() => setVisivel('tabela')}
            />
          )}
        </Layout>
    </div>
  )
}
