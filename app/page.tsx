export default function Home() {
  return (
    <main style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'Georgia, serif',
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 48px',
        borderBottom: '1px solid #000',
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: '300', letterSpacing: '8px' }}>RIMZA</h1>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ fontSize: '12px', letterSpacing: '2px', color: '#000', textDecoration: 'none' }}>SHOP</a>
          <a href="#" style={{ fontSize: '12px', letterSpacing: '2px', color: '#000', textDecoration: 'none' }}>ABOUT</a>
          <a href="#" style={{ fontSize: '12px', letterSpacing: '2px', color: '#000', textDecoration: 'none' }}>CART (0)</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
        gap: '24px',
      }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888' }}>NEW COLLECTION</p>
        <h2 style={{ fontSize: '64px', fontWeight: '200', letterSpacing: '4px', lineHeight: '1.2' }}>
          LESS IS<br />MORE
        </h2>
        <p style={{ fontSize: '14px', color: '#666', maxWidth: '400px', lineHeight: '1.8' }}>
          منتجات مختارة بعناية لمن يقدّر البساطة
        </p>
        <a href="#products" style={{
          marginTop: '16px',
          padding: '14px 48px',
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '11px',
          letterSpacing: '3px',
          textDecoration: 'none',
        }}>
          SHOP NOW
        </a>
      </section>

      {/* Products */}
      <section id="products" style={{ padding: '80px 48px' }}>
        <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '4px', marginBottom: '48px' }}>OUR PRODUCTS</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div style={{ backgroundColor: '#f5f5f5', height: '400px', marginBottom: '16px' }}></div>
              <p style={{ fontSize: '12px', letterSpacing: '2px' }}>PRODUCT NAME</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>SAR 199</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}