// faq.js
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
      props: {
          qualquercoisa: 'que eu passar aqui',
          faq,
      },
    };
}  


//import Link from "next/link"
//import Head from "next/head"
//
//export async function getStaticProps(){
//    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
//    const faq = await fetch(FAQ_API_URL)
//        .then((respostaDoServidor) => {
//            return respostaDoServidor.json()
//        })
//        .then((resposta) => {
//            return(resposta);
//        })
//    
//    return {
//        props: {
//            faq
//        },
//    };
//}
//
//
//export default function FaqPage({faq}){
//    console.log(faq)
//   // const [faq, setFaq] = useState([]);
//   // useEffect(() => {
//   //   
//   // })
//    return(
//        <div>
//            <Head>
//                <title>FAQ - Alura Cases Camapanha</title>
//            </Head>
//            <h1>FAQ</h1>
//            <Link href="/">
//                Ir para home
//            </Link>
//            <ul>
//                {faq.map(({answer, question}) => (
//                    <li key={question}>
//                        <article>
//                            <h2>{question}</h2>
//                            <p>{answer}</p>
//                        </article>
//                    </li>
//                ))}
//            </ul>
//        </div>
//    )
//}