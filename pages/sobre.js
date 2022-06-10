import Link from "../src/components/Link"

export default function Sobre() {
    return (
        <div>
             <h1>Bem vindos a página Sobre</h1>
            <div>
            <Link href="/">
                Ir para a Página HomePage
            </Link>
            </div>
            
            <Link href="/faq">
                Ir para a Página FAQ
            </Link>
           
        </div>
    );
}