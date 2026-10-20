import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const REPO_URL =
  'https://github.com/FCTE-Qualidade-de-Software-1/2026-2_T02_ROBERTA_WILLIAMS';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Avaliação da qualidade de produto de software do VLibras.">
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>
              FGA0315 · {siteConfig.tagline} · 2026/2
            </p>
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.lead}>
              Avaliação da qualidade do VLibras, widget que traduz o conteúdo
              de sites para Libras.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Ver documentação
              </Link>
              <Link
                className="button button--outline button--primary button--lg"
                href={REPO_URL}>
                Repositório
              </Link>
            </div>
          </div>
          <img
            className={styles.image}
            src={useBaseUrl('/img/img-vlibras.png')}
            alt="Suíte VLibras em smartphone, tablet e notebook."
          />
        </div>
      </header>
    </Layout>
  );
}
