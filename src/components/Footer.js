export default function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container border-t border-gray-300 h-32 py-5">
        <p className="text-sm text-secondary">
          &copy; Copyright Bentley Motors Japan {footerYear}
        </p>
      </div>
    </footer>
  )
}
