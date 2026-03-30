import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Layout;
