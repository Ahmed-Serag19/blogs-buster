import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry this page you are looking for does not exist</p>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
