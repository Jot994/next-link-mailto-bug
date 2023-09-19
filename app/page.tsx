import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-center">
        <h1 className="text-3xl mb-8 font-bold">Bug using mailto</h1>
        <ul>
          <li>
            <Link href="/" className="mb-8 inline-block underline hover:no-underline">
              Next link to index
            </Link>
          </li>
        </ul>
        <h2 className="font-bold mb-4">Mailto links:</h2>
        <ul>
          <li>
            <Link href="mailto:test@test.com" className="underline hover:no-underline mb-2 inline-block">
              Send an email with the next link
            </Link>
          </li>
          <li>
            <a href="mailto:test@test.com" className="underline hover:no-underline">
              Send an email with regular anchor tag
            </a>
          </li>
        </ul>

        <div className="mt-8 max-w-md">
          <p>
            When you click &quot;Send an email with the next link,&quot; an email window will appear.
            If you discard the email and click on the webpage again, hovering or clicking on
            &quot;Next link to index&quot; will once again trigger the email window to pop up.
          </p>
        </div>
      </div>
    </main>
  )
}
