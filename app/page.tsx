export default function Home() {
  const products = [
    {
      id: 1,
      name: "وعاء فخار أسطواني",
      nameEn: "CERAMIC POT - CYLINDER",
      price: "249",
      image: "https://ae01.alicdn.com/kf/S1234.jpg",
      link: "https://a.aliexpress.com/_c3a5t3Cz",
    },
    {
      id: 2,
      name: "وعاء فخار منخفض",
      nameEn: "CERAMIC POT - FLAT",
      price: "229",
      image: "https://ae01.alicdn.com/kf/S5678.jpg",
      link: "https://a.aliexpress.com/_c4UKdHAp",
    },
  ];

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 48px', borderBottom: '1px solid #000' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '300', letterSpacing: '8px' }}>RIMZA</h1>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ fontSize: '12px', letterSpacing: '2px', color: '#000', textDecoration: 'none' }}>SHOP</a>
          <a href="#" style={{ fontSize: '12px', letterSpacing: '2px', color: '#000', textDecoration: 'none' }}>ABOUT</a>
        </nav>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center', gap: '24px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888' }}>NEW COLLECTION</p>
        <h2 style={{ fontSize: '64px', fontWeight: '200', letterSpacing: '4px', lineHeight: '1.2' }}>LESS IS<br />MORE</h2>
        <p style={{ fontSize: '14px', color: '#666', maxWidth: '400px', lineHeight: '1.8' }}>أواني فخارية مختارة بعناية لمن يقدّر الجمال البسيط</p>
        <a href="#products" style={{ marginTop: '16px', padding: '14px 48px', backgroundColor: '#000', color: '#fff', fontSize: '11px', letterSpacing: '3px', textDecoration: 'none' }}>SHOP NOW</a>
      </section>

      <section id="products" style={{ padding: '80px 48px' }}>
        <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '4px', marginBottom: '48px' }}>OUR PRODUCTS</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px', maxWidth: '900px', margin: '0 auto' }}>
          {products.map((product) => (
            <div key={product.id}>
              <div style={{ backgroundColor: '#f5f5f5', height: '400px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#999', fontSize: '12px' }}>صورة المنتج</p>
              </div>
              <p style={{ fontSize: '12px', letterSpacing: '2px' }}>{product.nameEn}</p>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>{product.name}</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>SAR {product.price}</p>
              <a href={product.link} target="_blank" style={{ display: 'block', marginTop: '12px', padding: '12px', backgroundColor: '#000', color: '#fff', fontSize: '11px', letterSpacing: '2px', textDecoration: 'none', textAlign: 'center' }}>ORDER NOW</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}