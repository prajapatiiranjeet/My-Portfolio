const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-claude-border bg-background">
      <p className="text-claude-text-muted font-sans text-sm">
        Ranjeet Prajapati © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
