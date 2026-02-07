export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f9f9f9", borderTop: "1px solid #ddd", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: 2000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>NeuroSchool</h3>
            <p style={{ color: "#555", marginBottom: "1rem" }}>
              Образовательная платформа для развития когнитивных способностей
            </p>
            <p style={{ fontSize: "0.875rem", color: "#555" }}>г. Ташкент, Узбекистан</p>
          </div>

          <div>
            <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Курсы</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.6" }}>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Нейропластичность</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Когнитивная психология</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Память и внимание</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Все курсы</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Компания</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.6" }}>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>О нас</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Преподаватели</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Контакты</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Поддержка</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.6" }}>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Помощь</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Оплата</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Политика конфиденциальности</a></li>
              <li><a href="#" style={{ color: "#555", textDecoration: "none" }}>Условия использования</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #ddd", marginTop: "2rem", paddingTop: "1rem", textAlign: "center", fontSize: "0.875rem", color: "#555" }}>
          © 2026 NeuroSchool. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
