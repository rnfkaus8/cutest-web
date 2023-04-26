import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h4 className="title">Get started</h4>
      <p className="sub-title">by kim tae hyun</p>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
