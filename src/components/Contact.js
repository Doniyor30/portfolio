// import React from 'react';

// function Contact() {
//   return (
//     <div>
//       <h2>Contact</h2>
//       <a href="gmail.com">Marupovdoniyor16@gmail.com</a>
//       <p>LinkedIn: <a href="www.linkedin.com/in/doniyor-marupov">www.linkedin.com/in/doniyor-marupov</a></p>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';

function Contact() {
  const handleEmailClick = (e) => {
    e.preventDefault(); // предотвращает стандартное действие ссылки
    window.location.href = 'https://mail.google.com/'; // открываем почтовый клиент
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>Email: <a href="https://mail.google.com/" onClick={handleEmailClick}>Marupovdoniyor16@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/doniyor-marupov/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/doniyor-marupov</a></p>
      <p>Telegram: <a href="https://t.me/McDoni5244424" target="_blank" rel="noopener noreferrer">t.me/McDoni5244424</a></p>
      <p>Phone number: +48571336050</p>
    </div>
  );
}

export default Contact;
