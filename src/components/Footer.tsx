import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Informações</h2>
          <ul>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Atendimento ao Cliente</h2>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Trocas e Devoluções</a>
            </li>
            <li>
              <a href="#">Frete e Entrega</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Redes Sociais</h2>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 LJSTORE. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
