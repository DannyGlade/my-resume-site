import Head from "next/head";
import Link from "next/link";

// layout import
import MainLayout from "../../components/layouts/admin/MainLayout";

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

Dashboard.getLayout = (page) => {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
