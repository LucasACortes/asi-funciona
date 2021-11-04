import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import LinkedList from '../components/UI/LinkedList'
import SelectFunctions from '../components/UI/SelectFunctions'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const functions = ["agregar", "borrar"]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
      <div>
        <LinkedList></LinkedList>
        <SelectFunctions functions={functions}></SelectFunctions>
      </div>
    </div>
  )
}

export default Home