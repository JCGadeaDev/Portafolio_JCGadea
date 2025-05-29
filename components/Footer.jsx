

const Footer = () => {
return (
    <footer className="bg-primary border-t border-accent mt-4 py-6 text-center text-sm text-white/70 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 px-4">
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
        <div>
          © 2025 <span className="text-white font-semibold">JCGadeaDev</span> — All rights reserved
        </div>
      </div>
    </footer>
  );
};



export default Footer;