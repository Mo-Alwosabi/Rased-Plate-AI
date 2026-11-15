import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">🚘 راصد AI | Rased Plate AI</h3>
            <p className="footer-description">
              منظومة ذكية متكاملة للتعرف على لوحات المركبات اليمنية وتصنيف المحافظات بالرؤية الحاسوبية.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">التقنيات</h4>
            <p className="footer-tech">
              Powered by <strong>YOLOv8</strong> + <strong>EasyOCR</strong>
            </p>
            <p className="footer-tech">
              Built with <strong>Django REST</strong> + <strong>React</strong>
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">روابط سريعة</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">الرئيسية</Link>
              <Link to="/developers" className="footer-link">للمطورين</Link>
              <Link to="/about" className="footer-link">حول المشروع</Link>
              <a href="/api/v1/docs/" className="footer-link" target="_blank" rel="noopener noreferrer">
                وثائق API
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Rased Plate AI (منظومة راصد الذكية)
            <br />
            <span className="footer-subtitle">
              تطوير وهندسة: محمد الوصابي (Mohammed Alwosabi) • مهندس ذكاء اصطناعي وتعلم آلي
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
