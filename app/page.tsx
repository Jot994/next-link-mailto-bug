import Link from 'next/link'

export default function Home() {
  return (
    <main>

        <h1>Bug using mailto</h1>

        <ul>
          <li>
            <Link href="/">
              Next link to index
            </Link>
          </li>
        </ul>

        <h2>Mailto links:</h2>

        <ul>
          <li>
            <Link href="mailto:test@test.com">
              Send an email with the next link
            </Link>
          </li>
          <li>
            <a href="mailto:test@test.com">
              Send an email with regular anchor tag
            </a>
          </li>
        </ul>

          <p>
            When you click &quot;Send an email with the next link,&quot; an email window will appear.
            If you discard the email and click on the webpage again, hovering or clicking on
            &quot;Next link to index&quot; will once again trigger the email window to pop up.
          </p>

          <p><strong>This happens in build not dev</strong></p>

    </main>
  )
}
