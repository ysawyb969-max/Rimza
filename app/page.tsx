'use client';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "وعاء فخار أسطواني",
    nameEn: "CERAMIC POT - CYLINDER",
    price: 249,
    image: "/pot1.jpg",
    aliLink: "https://a.aliexpress.com/_c3a5t3Cz",
  },
  {
    id: 2,
    name: "وعاء فخار منخفض",
    nameEn: "CERAMIC POT - FLAT",
    price: 229,
    image: "/pot2.jpg",
    aliLink: "https://a.aliexpress.com/_c4UKdHAp",
  },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    const PAYPAL_CLIENT_ID = "AZW8xJ6FK38l5m83xhtF2t7Loa4JNuT8OF05thD4KgL6iRwSo7-1hkwa2mUVpEdHP3IK42vYbVyZHZLn";
    const amount = total.toFixed(2);
    window.location.href = `https://www.paypal.com/checkoutnow?token=${PAYPAL_CLIENT_ID}&amount=${amount}&currency_code=SAR`;
  };

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 48px', borderBottom: '1px solid #000' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '300', letterSpacing: '8px' }}>RIMZA</h1>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#products" style={{ fontSize: '12px', letterSpacing: '2px', color: '#000', textDecoration: 'none' }}>SHOP</a>
          <button onClick={() => setShowCart(!showCart)} style={{ fontSize: '12px', letterSpacing: '2px', color: '#000', background: 'none', border: 'none', cursor: 'pointer' }}>
            CART ({cart.length})
          </button>
        </div>
      </header>

      {/* Cart */}
      {showCart && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '350px', height: '100vh', backgroundColor: '#fff', borderLeft: '1px solid #000', padding: '32px', zIndex: 1000 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '14px', letterSpacing: '4px' }}>CART</h2>
            <button onClick={() => setShowCart(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}>×</button>
          </div>
          {cart.length === 0 ? (
            <p style={{ fontSize: '12px', color: '#999' }}>السلة فارغة</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={{ borderBottom: '1px solid #eee', paddingBottom: '16px', marginBottom: '16px' }}>
                  <p style={{ fontSize: '12px', letterSpacing: '2px' }}>{item.nameEn}</p>
                  <p style={{ fontSize: '14px', marginTop: '4px' }}>SAR {item.price}</p>
                </div>
              ))}
              <div style={{ marginTop: '24px' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>TOTAL: SAR {total}</p>
                <button onClick={checkout} style={{ width: '100%', marginTop: '16px', padding: '14px', backgroundColor: '#000', color: '#fff', fontSize: '11px', letterSpacing: '3px', border: 'none', cursor: 'pointer' }}>
                  CHECKOUT - PayPal
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Hero */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center', gap: '24px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#888' }}>NEW COLLECTION</p>
        <h2 style={{ fontSize: '64px', fontWeight: '200', letterSpacing: '4px', lineHeight: '1.2' }}>LESS IS<br />MORE</h2>
        <p style={{ fontSize: '14px', color: '#666', maxWidth: '400px', lineHeight: '1.8' }}>أواني فخارية مختارة بعناية لمن يقدّر الجمال البسيط</p>
        <a href="#products" style={{ marginTop: '16px', padding: '14px 48px', backgroundColor: '#000', color: '#fff', fontSize: '11px', letterSpacing: '3px', textDecoration: 'none' }}>SHOP NOW</a>
      </section>

      {/* Products */}
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
              <button onClick={() => addToCart(product)} style={{ width: '100%', marginTop: '12px', padding: '12px', backgroundColor: '#000', color: '#fff', fontSize: '11px', letterSpacing: '2px', border: 'none', cursor: 'pointer' }}>
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}