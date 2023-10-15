import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>P&D Engineering Solutions LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/coming-soon.png"
            alt="Coming Soon"
            width={550}
            height={437}
            priority
          />
        </div>
      </main>
    </>
  )
}
