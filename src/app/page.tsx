import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/'>Link to root</Link>
      <br />
      <Link href='/foo/bar'>Link to /foo/bar</Link>
      <br />
      <Link href='/baz'>Link to /baz (inside route group)</Link>
    </div>
  );
}
