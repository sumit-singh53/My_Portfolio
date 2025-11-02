const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm text-white text-center z-50">
      <p>&copy; {new Date().getFullYear()} Sumit Singh - Full Stack Developer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;