import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <h1 className="underline text-3xl font-bold">Hello Admin Dashboard</h1>
      <Link href="/">To Home</Link>
    </>
  );
}
