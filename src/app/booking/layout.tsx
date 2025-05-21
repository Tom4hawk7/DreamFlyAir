import FlightNav from "./_components/FlightNav";

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ padding: "var(--lg-x)", background: "var(--background)" }}>
      <FlightNav />
      {children}
    </main>
  );
}
