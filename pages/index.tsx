import type { NextPage, GetStaticProps } from 'next'
import getPageData from "@/app/data";

import styles from '@/styles/pages/index.module.css'
import {SharedPageData} from "@/types";

interface HomePageProps extends SharedPageData {}

const Home: NextPage<HomePageProps> = ({ storeConfig, megaMenu }) => {
  return (
    <div className={styles.container}>
      <pre>
          {JSON.stringify({
              storeConfig,
              megaMenu
          }, null, 2)}
      </pre>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPageData();

  return {
      props: {
          storeConfig: data.storeConfig,
          megaMenu: data.megaMenu
      }
  }
}
