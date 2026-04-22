export default function Footer() {
  return (
    <footer
      className="py-8 px-5 sm:px-8 text-center"
      style={{ borderTop: "1px solid #2A2218" }}
    >
      <p className="text-xs" style={{ color: "#6B6054" }}>
        <span style={{ fontFamily: "var(--font-space-mono)" }}>
          © {new Date().getFullYear()} Omar Fourati
        </span>
        {" · "}
        <span style={{ color: "#C9A84C40" }}>Built with</span>
        {" "}
        <span style={{ color: "#C9A84C" }}>Next.js</span>
        {" + "}
        <span style={{ color: "#C9A84C" }}>Framer Motion</span>
      </p>
    </footer>
  );
}
