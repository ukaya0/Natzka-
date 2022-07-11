import Head from 'next/head'
import {
  Container,
  Main,
  Title,
} from '../components/sharedstyles'
import Form from '../components/form'
import { useState } from 'react'
import List from '../components/list'

export default function Home() {
  const [strings, setStrings] = useState(null)

  return (
    <Container>
      <Head>
        <title>Natzka Assignment</title>
        <meta name="description" content="Natzka Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Natzka Assignment
        </Title>

        <Form setStrings={setStrings} />

        {strings ? <List strings={strings} /> : null}

      </Main>
    </Container>
  )
}
