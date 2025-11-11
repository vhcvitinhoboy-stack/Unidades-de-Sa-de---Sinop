import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} UPA Sinop. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
