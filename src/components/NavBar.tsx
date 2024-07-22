import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-white text-xl">
        Home
      </Link>
      <Link href="/auth/login" className="text-white">
        Login
      </Link>
      <Link href="/auth/signup" className="text-white">
        Signup
      </Link>
    </div>
  </nav>
);

export default Navbar;
