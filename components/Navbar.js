import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-white text-xl font-bold cursor-pointer hover:text-neonGreen transition-colors">
          Sumit Singh
        </Link>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link 
              href="/" 
              className={`hover:text-neonGreen transition-colors ${router.pathname === '/' ? 'text-neonGreen' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`hover:text-neonGreen transition-colors ${router.pathname === '/projects' ? 'text-neonGreen' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`hover:text-neonGreen transition-colors ${router.pathname === '/contact' ? 'text-neonGreen' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;