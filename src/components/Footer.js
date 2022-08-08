export default function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container border-t border-base-300 h-40 py-10">
        <p className="text-sm text-secondary">
          &copy; Copyright Bentley Motors Japan {footerYear}
        </p>
      </div>
    </footer>
  )
}
