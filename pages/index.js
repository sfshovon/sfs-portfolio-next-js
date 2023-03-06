import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>SFS's Portfolio</title>
        <meta name="description" content="Shahriar Ferdous Shovon's Portfolio" />
        <link className='rounded-full' rel="icon" href="/me.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
