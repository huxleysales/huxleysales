import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to {siteConfig.title}!</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/buses">
            Read the Bus Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Welcome to HUXLEY Sales! Huxley Sales is a sales group owned by lvstnick.">
      <HomepageHeader />
      <main>
        <img src="/img/homepagebanner.png" className={clsx(styles.homepageBanner)}/>
        <p className="hero__subtitle"><strong>Picture Credit:</strong> XIIMysticXII Southern Transportation Lines</p>
      </main>
    </Layout>
  );
}
