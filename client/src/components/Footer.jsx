const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center p-4 border border-accent/60 text-base-content/60 rounded-2xl mt-20">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Habib
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
