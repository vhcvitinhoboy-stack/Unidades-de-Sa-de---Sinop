import React from 'react';
import './App.css';
import unitsData from './data.json';
import Header from './components/Header';
import UnitList from './components/UnitList';
import Footer from './components/Footer';

export interface HealthUnit {
  nome: string;
  endereco: string;
  bairro: string;
  numero: string;
  cep: string;
  latitude: string;
  longitude: string;
  numero_de_contato: string;
  horario_de_funcionamento: string;
}

function App() {
  const units: HealthUnit[] = unitsData;

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-4">
        <h1 className="text-center mb-4">Unidades de Saúde - Sinop</h1>
        <UnitList units={units} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

