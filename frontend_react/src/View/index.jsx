import "../styles/index.css";
import imgFondo from "../assets/fondo_home.jpg";
import imgProduct3 from "../assets/productos/menu3d.jpg";
import imgProduct2 from "../assets/productos/menu2.jpg";
import imgProduct1 from "../assets/productos/menu1.jpg";
import img_añadir from "../assets/añadir_hambur.png";
import img_añadir2 from "../assets/añadir_hambur2.png";
// import img_carta1 from "";

const Index = () => {
  return (
    <div>
      <section>
        <div className="texto_content">
          <h2 className="tit2">DISFRUTA DE NUESTROS</h2>

          <h1 className="tit1">RESTAURANTES</h1>

          <h3 className="tit3">Encuentra tu plato favorito</h3>
        </div>

        <div className="img_index">
          <img src={imgFondo} alt="" className="img_index" />
        </div>
      </section>

      <h2>Productos recomendados</h2>

      <div className="cards">
        <div className="carta_1">
          <br />
          <br />
          <h2 className="nom_prod3">Hamburguesa simple</h2>
          <br />
          <img src={imgProduct1} alt="" className="ProductRecomen1" />
          <p className="btn_index">
            <br />
            <img src={img_añadir} alt="" />
            <p>Añadir al carrito</p>
          </p>
        </div>
        {/* -------------------------------------- */}
        <div className="carta_2">
          <br />
          <br />
          <h2 className="nom_prod3">Hamburguesa simple</h2>
          <br />
          <img src={imgProduct2} alt="" className="ProductRecomen2" />
          <p className="btn_index">
            <br />
            <img src={img_añadir} alt="" />
            <p>Añadir al carrito</p>
          </p>
        </div>
        {/* ------------------------------------- */}
        <div className="carta_3">
          <br />
          <br />
          <h2 className="nom_prod3">Lomo a la Parrilla</h2>
          <br />
          <img src={imgProduct3} alt="" className="ProductRecomen3" />

          <p className="btn_index">
            <br />
            <img src={img_añadir} alt="" />
            <p>Añadir al carrito</p>
          </p>
        </div>
      </div>


      <div className="card-container">
        <div className="card">
          <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div>
        </div>

        <div className="card">
        <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div></div>
        <div className="card">
        <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div></div>
        <div className="card">
        <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div></div>
        <div className="card">
        <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div></div>
        <div className="card">
        <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div></div>
        <div className="card">
        <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div>
        </div>
        <div className="card">
        <img src="" alt="" className="carta_rest"/>
          <h2>Lomo a la Parrilla </h2>
          <p>Descripcion</p>
          <h2 style={{color:"#1D3557"}}>Precio 30Bs</h2>
          <div style={{justifyContent:"center", textAlign:"center"}}>
            <p className="btn_index2">
              <br />
              <img src={img_añadir2} alt="" />
              <p style={{ color: "#1D3557" }}>Añadir al carrito</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
