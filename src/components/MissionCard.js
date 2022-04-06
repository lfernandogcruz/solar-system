import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;

// 1. Crie um componente chamado MissionCard dentro da pasta src/components.
// 2. O componente MissionCard deve receber quatro props:
// - name
// - year
// - country
// - destination
// 3. O componente MissionCard deve ter uma div que envolva todo seu conteúdo e que
// tenha o atributo data-testid="mission-card".
// 4. O componente MissionCard deve renderizar o texto recebido pela prop name.
// Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o
// atributo data-testid="mission-name".
// 5. O componente MissionCard deve renderizar o texto recebido pela prop year.
// Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o
// atributo data-testid="mission-year".
// 6. O componente MissionCard deve renderizar o texto recebido pela prop country.
// Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o
// atributo data-testid="mission-country".
// 7. O componente MissionCard deve renderizar o texto recebido pela prop destination.
// Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o
// atributo data-testid="mission-destination".
// O que será verificado
// Será validado se o componente <MissionCard /> é renderizado.
// Será validado se o componente <MissionCard /> possui uma div com o atributo data-testid="mission-card".
// Será validado se é renderizado o texto recebido pela prop name.
// Será validado se é renderizado o texto recebido pela prop year.
// Será validado se é renderizado o texto recebido pela prop country.
// Será validado se é renderizado o texto recebido pela prop destination.
