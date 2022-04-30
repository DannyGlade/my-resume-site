import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="underline text-3xl font-bold">Hello Next.js</h1>
      <Link href="/admin">To Admin</Link>
    </>
  );
}
