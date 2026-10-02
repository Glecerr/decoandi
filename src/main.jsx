import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// Lista ampliada de productos
const PRODUCTOS = [
  // --- Categoría: Día de la Madre / Fechas Especiales ---
  {
    id: 1,
    categoria: 'fechas-especiales',
    nombre: 'Taza Feliz Día Mamá',
    desc: 'Taza de cerámica artesanal con dedicatoria para las madres.',
    media: [
      { tipo: 'imagen', url: '/felizdiamama.jpg' }
    ],
    especificaciones: {
     diseno: 'taza feliz dia mama',
    }
  },
  {
    id: 2,
    categoria: 'fechas-especiales',
    nombre: 'Set Regalo Mamá + Bandeja',
    desc: 'Combo especial con taza ilustrada, cuchara a juego y presentación para regalo.',
    media: [
      { tipo: 'imagen', url: '/mamabandeja.JPG' }
    ],
    especificaciones: {
   diseno: 'set  regalo mama', 
    }
  },
  {
    id: 3,
    categoria: 'fechas-especiales',
    nombre: 'taza feliz dia mama',
    desc: 'Taza de cerámica con ilustración y mensaje "Feliz Día Mamá", ideal para regalar en fechas especiales.',
    media: [
      { tipo: 'imagen', url: '/feliz.jpg' }
    ],
    especificaciones: {
      diseno: 'taza feliz dia mama',
    }
  },
  {
    id: 4,
    categoria: 'fechas-especiales',
    nombre: 'taza y plato mama te amo',
    desc: 'Taza de cerámica con ilustración y mensaje "Mama Te Amo", ideal para regalar en fechas especiales.',
    media: [
      { tipo: 'imagen', url: '/mamateamo.jpg' }
    ],
    especificaciones: {
      diseno: 'taza y plato mama te amo',
    }
  },
  {
    id: 5,
    categoria: 'fechas-especiales',
    nombre: 'mate mama ',
    desc: ' mate mama .',
    media: [
      { tipo: 'imagen', url: '/matemama1.jpg' }
    ],
    especificaciones: {
     diseno: 'mate mama', 
  },
  {
    id: 6,
    categoria: 'fechas-especiales',
    nombre: 'taza mama ',
    desc: 'taza mama',
    media: [
      { tipo: 'imagen', url: '/matemama2.jpg' }
    ],
    especificaciones: {
     diseno: 'taza mama',
    }
  },
  {
    id: 7,
    categoria: 'fechas-especiales',
    nombre: 'mate mama',
    desc: 'mate mama.',
    media: [
      { tipo: 'imagen', url: '/matemama3.jpg' }
    ],
    especificaciones: {
    diseno: 'mate mama',
    }
  },
  {
    id: 8,
    categoria: 'fechas-especiales',
    nombre: 'mate mama',
    desc: 'mate mama.',
    media: [
      { tipo: 'imagen', url: '/matemama4.jpg' }
    ],
    especificaciones: {
   diseno: 'mate mama',
    }
  },
  {
    id: 9,
    categoria: 'fechas-especiales',
    nombre: 'taza mi mama es la mejor',
    desc: 'taza de cerámica con ilustración y mensaje "Mi Mamá es la Mejor", ideal para regalar en fechas especiales.',
    media: [
      { tipo: 'imagen', url: '/mimama.jpg' }
    ],
    especificaciones: {
      diseno: 'taza mi mama es la mejor',
    }
  },
  {
    id: 10,
    categoria: 'fechas-especiales',
    nombre: 'taza feliz dia mama',
    desc: 'taza de cerámica con ilustración y mensaje "Feliz Día Mamá", ideal para regalar en fechas especiales.',
    media: [
      { tipo: 'imagen', url: '/tazaplatomama.jpg' }
    ],
    especificaciones: {
      diseno: 'taza feliz dia mama',
    }
  },
  {
    id: 11,
    categoria: 'fechas-especiales',
    nombre: 'taza te quiero mama',
    desc: 'taza de cerámica con ilustración y mensaje "Te Quiero Mamá", ideal para regalar en fechas especiales.',
    media: [
      { tipo: 'imagen', url: '/tequieromama.jpg' }
    ],
    especificaciones: {
     diseno: 'taza te quiero mama',
  
    }
  },

  // --- Categoría: Fútbol ---
  {
    id: 1,
    categoria: 'futbol',
    nombre: 'taza messi con llavero',
    desc: 'taza de messi.',
    media: [
      { tipo: 'imagen', url: '/messi.jpg' }
    ],
    especificaciones: {
     diseno: 'taza de messi con llavero',
      
    }
  },
  {
    id: 2,
    categoria: 'futbol',
    nombre: 'taza las malvinas son argentinas',
    desc: 'taza de cerámica con ilustración de las malvinas, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/malvina.jpg' }
    ],
    especificaciones: {
      diseno: 'las malvinas son argentinas',
     
    }
  },
  {
    id: 3,
    categoria: 'futbol',
    nombre: 'taza remera messi',
    desc: 'taza de cerámica de la remera de messi, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/messi2.jpg' }
    ],
    especificaciones: {
      diseno: 'taza de la remera de messi',
      
    }
  },
  {
    id: 7,
    categoria: 'futbol',
    nombre: 'taza barril del 10',
    desc: 'Tetera y taza apilable con acabados botánicos y colores pastel.',
    media: [
      { tipo: 'imagen', url: '/birra.jpg' }
    ],
    especificaciones: {
      diseno: ' barril de cerveza con el escudo de 10',
    
    }
  },
  {
    id: 8,
    categoria: 'futbol',
    nombre: 'tierra de diego',
    desc: 'taza de cerámica con ilustración de la argentina con cancion, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/tierra.jpg' }
    ],
    especificaciones: {
      diseno: 'tierra de diego',
  
    }
  },
  {
    id: 9,
    categoria: 'futbol',
    nombre: 'snoopy arg',
    desc: 'taza de snoopy con la remera argentina.',
    media: [
      { tipo: 'imagen', url: '/snoopy arg.jpg' }
    ],
    especificaciones: {
      diseno: 'snopy argentino',
      
    }
  },
  {
    id: 10,
    categoria: 'futbol',
    nombre: 'tricampeones',
    desc: 'taza de tricampeones.',
    media: [
      { tipo: 'imagen', url: '/1978.jpg' }
    ],
    especificaciones: {
      diseno: 'Ilustración botánica pintada a mano',
  
  },
  
  {
    id: 11,
    categoria: 'futbol',
    nombre: 'Conjunto del 10',
    desc: 'taza y plato del 10.',
    media: [
      { tipo: 'imagen', url: '/tazayplato10.jpg' }
    ],
    especificaciones: {
      diseno: 'messi',
  
    }
  },
  {
    id: 12,
    categoria: 'futbol',
    nombre: 'Tazon 10',
    desc: 'Tazon de ceramica con el escudo de 10, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/tazon10.jpg' }
    ],
    especificaciones: {
      diseno: '10',
  
    }
  },
  {
    id: 13,
    categoria: 'futbol',
    nombre: 'Taza de messi ',
    desc: 'Taza de ceramica con el escudo de messi, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/pasion.jpg' }
    ],
    especificaciones: {
      diseno: 'messi',
    
    }
  },
  {
    id: 15,
    categoria: 'futbol',
    nombre: 'Taza de Boca Juniors',
    desc: 'Taza de ceramica con el escudo de boca juniors, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/tboca.jpg' }
    ],
    especificaciones: {
      diseno: 'boca',
      
    }
  },
  {
    id: 16,
    categoria: 'futbol',
    nombre: 'Taza de Boca Juniors',
    desc: 'taza de ceramica con el escudo de boca juniors, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/tboca2.jpg' }
    ],
    especificaciones: {
      diseno: 'boca',
      
    }
  },
  {
    id: 17,
    categoria: 'futbol',
    nombre: 'Taza de Argentinos Juniors',
    desc: 'taza de ceramica con el escudo de argentinos juniors, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/argjr.jpg' }
    ],
    especificaciones: {
      diseno: 'Argentinos juniors',
     
    }
  },
  {
    id: 18,
    categoria: 'futbol',
    nombre: 'Taza de Velez',
    desc: 'Taza de ceramica con el escudo de velez, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/velez.jpg' }
    ],
    especificaciones: {
      diseno: 'velez',
    
    }
  },
  {
    id: 19,
    categoria: 'futbol',
    nombre: 'Taza de independiente',
    desc: 'Taza de cerámica con el escudo de independiente, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/indp.jpg' }
    ],
    especificaciones: {
      diseno: 'independiente',
      
    }
  },
  {
    id: 20,
    categoria: 'futbol',
    nombre: 'Taza de river',
    desc: 'Taza de cerámica con el escudo de river, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/carp.jpg' }
    ],
    especificaciones: {
      diseno: 'river',
    }
  },
  {
    id: 21,
    categoria: 'futbol',
    nombre: 'taza de huracan',
    desc: 'Taza de cerámica con el escudo de huracan, ideal para fanáticos del fútbol.',
    media: [
      { tipo: 'imagen', url: '/huracan.jpg' }
    ],
    especificaciones: {
      diseno: 'huracan',
    }
  },

  // --- Categoría: Infantiles / Dibujitos ---
  {
    id: 1,
    categoria: 'infantiles',
    nombre: 'tetera hello kity',
    desc: 'Taza súper tierna del personaje Hello Kitty con opción de asas de colores.',
    media: [
      { tipo: 'imagen', url: '/tetera.jpg' }
    ],
    especificaciones: {
      diseno: 'hello kity',
    }
  },
  {
    id: 2,
    categoria: 'infantiles',
    nombre: 'Taza de mafalda',
    desc: 'Modelos mafalda con plato y tetera.',
    media: [
      { tipo: 'imagen', url: 'mafa.jpg' }
    ],
    especificaciones: {
      diseno: 'mafalda',
    } 
  }
];

function App() {
  const [filtro, setFiltro] = useState('todos');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mediaActiveIndex, setMediaActiveIndex] = useState(0);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const productosFiltrados = filtro === 'todos' 
    ? PRODUCTOS 
    : PRODUCTOS.filter(p => p.categoria === filtro);

  const productosVisibles = mostrarTodos 
    ? productosFiltrados 
    : productosFiltrados.slice(0, 5);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setMediaActiveIndex(0);
  };

  const cerrarModal = () => {
    setProductoSeleccionado(null);
  };

  const consultarWP = (nombre) => {
    const msg = encodeURIComponent(`¡Hola Decoandi! Quisiera encargar o consultar por: ${nombre}`);
    window.open(`https://wa.me/5491165085482?text=${msg}`, '_blank');
  };

  return (
    <div>
      {/* Fondo con movimiento suave */}
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Header */}
      <header>
        <div className="logo">Deco<span>andi</span></div>
        <nav>
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="https://www.instagram.com/decoandi/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <span className="hero-badge">✨ Tazas & Cerámica Personalizada</span>
        <h1>Regalá momentos <span>únicos</span></h1>
        <p>Diseños artesanales, tazas personalizadas para fechas especiales, personajes de anime, juegos de té y mucho más.</p>
        <div className="hero-btns">
          <a href="#catalogo" className="btn-primary">Ver Catálogo</a>
          <a href="https://wa.me/5491165085482?text=¡Hola!%20Quiero%20consultar%20por%20una%20taza%20personalizada" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            💬 Pedido Especial por WhatsApp
          </a>
        </div>
      </section>

      {/* Catálogo con Filtros */}
      <section id="catalogo" className="catalog-section">
        <h2 className="section-title">Nuestros Modelos</h2>
        <p className="section-subtitle">Seleccioná una categoría o explorá todos los modelos disponibles</p>
        
        <div className="category-filters">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'fechas-especiales', label: '💖 Día de la Madre / Fechas' },
            { id: 'futbol', label: '⚽ Futbol' },
            { id: 'infantiles', label: '🎨 Infantiles & Dibujos' },
          ].map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filtro === cat.id ? 'active' : ''}`}
              onClick={() => {
                setFiltro(cat.id);
                setMostrarTodos(false);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {productosVisibles.map((item, index) => (
            <div className="product-card" key={`${item.categoria}-${item.id}-${index}`} onClick={() => abrirModal(item)} style={{ cursor: 'pointer' }}>
              <div className="product-card-img-wrapper">
                <img src={item.media[0].url} alt={item.nombre} className="product-card-img" />
                <span className="product-badge">Decoandi</span>
              </div>
              <div className="product-card-body">
                <div>
                  <div className="card-header">
                    <span className="item-name">{item.nombre}</span>
                    <span className="item-price">{item.precio}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                </div>
                <button className="order-item-btn">Ver Fotos & Pedir 🔍</button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Toggle Ver más / Ver menos */}
        {productosFiltrados.length > 5 && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button 
              className="btn-primary" 
              onClick={() => setMostrarTodos(!mostrarTodos)}
            >
              {mostrarTodos 
                ? 'Ver menos modelos ⬆️' 
                : `Ver todos los modelos (${productosFiltrados.length}) ⬇️`}
            </button>
          </div>
        )}
      </section>

      {/* Sección Nosotros */}
      <section id="nosotros" className="about-section">
        <div className="about-content">
          <h2>Sobre Decoandi 🎨</h2>
          <p>
            En <strong>Decoandi</strong> creamos piezas únicas de cerámica y tazas personalizadas con amor y dedicación. 
            Cada trabajo es confeccionado a mano, ideal para sorprender en cumpleaños, el Día de la Madre o regalarte ese personaje que tanto te gusta.
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <span>🖌️</span>
              <h4>Trabajo Artesanal</h4>
              <p>Modelado y cuidado en cada detalle</p>
            </div>
            <div className="feature-box">
              <span>🎁</span>
              <h4>Regalos Únicos</h4>
              <p>Diseños exclusivos para sorprender</p>
            </div>
            <div className="feature-box">
              <span>💬</span>
              <h4>Atención Directa</h4>
              <p>Coordinamos tu diseño por WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal tipo Mercado Libre */}
      {productoSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>✕</button>
            
            <div className="modal-body">
              <div className="modal-gallery">
                <div className="modal-main-media">
                  <img src={productoSeleccionado.media[mediaActiveIndex].url} alt={productoSeleccionado.nombre} />
                </div>

                {productoSeleccionado.media.length > 1 && (
                  <div className="modal-thumbnails">
                    {productoSeleccionado.media.map((m, idx) => (
                      <div 
                        key={idx} 
                        className={`thumbnail-item ${mediaActiveIndex === idx ? 'active' : ''}`}
                        onClick={() => setMediaActiveIndex(idx)}
                      >
                        <img src={m.url} alt="thumb" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-info">
                <h2>{productoSeleccionado.nombre}</h2>
                <div className="modal-price">{productoSeleccionado.precio}</div>
                <p>{productoSeleccionado.desc}</p>

                <hr style={{ borderColor: 'var(--border-color)', margin: '1rem 0' }} />

                <h4>Detalles del producto:</h4>
                <ul className="specs-list">
                  {Object.entries(productoSeleccionado.especificaciones).map(([k, v]) => (
                    <li key={k}><strong style={{ textTransform: 'capitalize' }}>{k}:</strong> {v}</li>
                  ))}
                </ul>

                <button 
                  className="btn-primary" 
                  style={{ width: '100%', marginTop: '1.5rem' }}
                  onClick={() => consultarWP(productoSeleccionado.nombre)}
                >
                  Encargar por WhatsApp 💬
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contacto */}
      <section id="contacto" className="contact-section">
        <div className="contact-info">
          <h2>Contacto & Pedidos</h2>
          <div className="info-item">
            <h4>📱 WhatsApp Directo</h4>
            <p>11 6508-5482</p>
          </div>
          <div className="info-item">
            <h4>📍 Entregas</h4>
            <p>Puntos de encuentro y retiro a coordinar</p>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/decoandi/" target="_blank" rel="noopener noreferrer" className="social-btn">📷 Instagram @decoandi</a>
            <a href="https://wa.me/5491165085482" target="_blank" rel="noopener noreferrer" className="social-btn">💬 Chat de WhatsApp</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Decoandi. Tazas & Cerámica Artesanal.</p>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a 
        href="https://wa.me/5491165085482?text=¡Hola%20Decoandi!%20Quiero%20consultar%20por%20un%20pedido" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        title="Contactar por WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);