import Head from "next/head";
import "@/styles/privacy-policy.scss";

export default function SmartBolsoPrivacyPolicyPt()
{
    return (
        <>
            <Head>
                <title>Política de Privacidade do SmartBolso</title>
            </Head>

            <main className="container">
                <div className="row py-5">
                    <div className="col-12">

                        <div className="mb-5">
                            <h1>Política de Privacidade</h1>
                            <h2>Última Atualização: 01 de Fevereiro de 2025</h2>
                        </div>

                        <div className="mb-5">
                            <p>Bem-vindo ao <strong>SmartBolso</strong>! Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações ao utilizar nosso aplicativo. O SmartBolso é um gestor de finanças pessoais que prioriza sua privacidade e controle total sobre seus dados.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h2>1. Coleta de Informações</h2>
                            <p>O SmartBolso <strong>não coleta informações bancárias</strong> e <strong>não possui integração com bancos ou serviços terceiros</strong>. Todas as informações inseridas são fornecidas diretamente por você, incluindo:</p>
                            <ul>
                                <li>Despesas e receitas registradas manualmente.</li>
                                <li>Categorias e notas adicionadas aos seus registros.</li>
                                <li>Preferências de configuração da sua conta.</li>
                            </ul>
                        </div>

                        <div className="mb-5">
                            <h2>2. Armazenamento de Dados</h2>
                            <p>Seus dados são armazenados remotamente em nossos servidores, permitindo o acesso de diferentes dispositivos. Nenhuma informação é armazenada localmente no seu aparelho.</p>
                        </div>

                        <div className="mb-5">
                            <h2>3. Uso das Informações</h2>
                            <p>Os dados inseridos no SmartBolso são utilizados exclusivamente para:</p>
                            <ul>
                                <li>Exibir suas informações financeiras dentro do aplicativo.</li>
                                <li>Garantir a sincronização entre seus dispositivos.</li>
                                <li>Melhorar a experiência do usuário com base nas configurações pessoais.</li>
                            </ul>
                        </div>

                        <div className="mb-5">
                            <h2>4. Compartilhamento de Dados</h2>
                            <p>O SmartBolso <strong>não compartilha, vende ou transfere</strong> seus dados para terceiros. Suas informações são acessíveis apenas por você.</p>
                        </div>

                        <div className="mb-5">
                            <h2>5. Exclusão de Dados</h2>
                            <p>Você pode solicitar a exclusão de todos os seus dados a qualquer momento. Para isso, basta acessar as configurações do aplicativo ou entrar em contato com nosso suporte. Uma vez excluídos, os dados <strong>não poderão ser recuperados</strong>.</p>
                        </div>

                        <div className="mb-5">
                            <h2>6. Segurança das Informações</h2>
                            <p>Adotamos medidas de segurança para proteger seus dados contra acessos não autorizados, alterações, divulgação ou destruição indevida. No entanto, lembre-se de que nenhum sistema é completamente invulnerável.</p>
                        </div>

                        <div className="mb-5">
                            <h2>7. Alterações nesta Política de Privacidade</h2>
                            <p>Podemos atualizar esta política periodicamente. Notificaremos os usuários sobre mudanças significativas através do aplicativo ou de outros meios apropriados.</p>
                        </div>

                        <div className="mb-5">
                            <h2>8. Contato</h2>
                            <p>Se tiver qualquer dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: <strong>suporte@smartbolso.com</strong>.</p>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}