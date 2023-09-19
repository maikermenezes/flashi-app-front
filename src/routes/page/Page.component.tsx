import React from 'react';
import Head from 'next/head';
import Landing from 'routes/page/landing';
import A2HS from 'components/a2hs';
import { usePageData, usePageDetails } from 'hooks/page';
import { injectClassNames } from 'utils/css';
import styles from './Page.module.scss';
import DeckList from 'components/deckList/DeckList.component';
import Deck from 'components/deck/Deck.component';
import Export from 'components/export/Export.component';

const {
  page,
  pageLanding,
  pageContent,
  placeholder
} = styles;

type PageProps = {
    isLanding?: boolean
};

export const addTitleTags = (title: string): JSX.Element => {
  if (!title) {
    return <></>;
  }

  return (
    <>
      <title>{ title }</title>
      <meta name="og:title" content={ title } />
    </>
  );
};

export const addDescriptionTag = (description: string): JSX.Element => {
  if (!description) {
    return <></>;
  }

  return (
    <meta
      name="description"
      property="og:description"
      content={ description }
    />
  );
};

export default function Page(props: PageProps): JSX.Element {
  const { isLanding } = props;
  const { title = '', description = '' } = usePageDetails();
  const { content = '' } = usePageData();

  const classNames = injectClassNames(page, [pageLanding, isLanding]);

  return (
    <>
      <Head>
        { addTitleTags(title) }
        { addDescriptionTag(description) }
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={ classNames }>
        { isLanding && <Landing /> }
        <section>
          <div className={ pageContent }>
            {/* <A2HS /> */}
            {/* <DeckList /> */}
            {/* <Deck /> */}
            <Export />
          </div>
          {/* <Sidebar /> */}
        </section>
      </main>
    </>
  );
}
