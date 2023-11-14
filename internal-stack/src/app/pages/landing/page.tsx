import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1>Landing page ceritanya</h1>
      <Link href="/">Balik!</Link>
      <div className='box'>
        <pre>
          <code className='Language-html line-numbers'>
            import Link from &apos;next/link&apos; ;<br />
            const Navigation = () =&gt;<br />
            return (<br />
            &emsp; &lt;nav&gt;<br />
            &emsp; &emsp; &lt;Link href=&quot;/&quot;&gt;Home&lt;/Link&gt;<br />
            &emsp; &emsp; &emsp;&lt;Link href=&quot;/about&quot;&gt;About&lt;/Link&gt;<br />
            &emsp; &emsp; &lt;Link href=&quot;/contact&quot;&gt;Contact&lt;/Link&gt;<br />
            &emsp; &lt;/nav&gt;<br />
            );<br />
            export default Navigation;
          </code>
        </pre>
      </div>
    </section>
  )
}