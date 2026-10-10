function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-content" text-align="center">
        <p>© {year} Ratiloe Lebogang. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
