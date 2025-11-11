import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { HealthUnit } from '../App';

interface UnitCardProps {
  unit: HealthUnit;
}

const UnitCard: React.FC<UnitCardProps> = ({ unit }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${unit.latitude},${unit.longitude}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${unit.numero_de_contato.replace(/\D/g, '')}`;

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{unit.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{unit.bairro}</Card.Subtitle>
        <Card.Text>
          {unit.endereco}, {unit.numero}
        </Card.Text>
        <Card.Text>
          <strong>CEP:</strong> {unit.cep}
        </Card.Text>
        <Card.Text>
          <strong>Telefone:</strong> {unit.numero_de_contato}
        </Card.Text>
        <Card.Text>
          <strong>Horário de Funcionamento:</strong> {unit.horario_de_funcionamento}
        </Card.Text>
        <Button variant="primary" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          Ver no Mapa
        </Button>{' '}
        <Button variant="success" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Contato via WhatsApp
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UnitCard;
