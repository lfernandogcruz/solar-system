// 1. Crie um componente chamado Title dentro da pasta src/components.

// 2. O componente Title deve receber uma prop headline.

// 3. Ele deve conter uma tag h2, que deve renderizar o texto recebido pela prop headline.
import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
// O que será verificado
// Será validado se o componente <Title /> é renderizado.

// Será validado se o componente <Title /> contém uma tag h2.

// Será validado se o componente <Title /> renderiza o texto passado pela prop
// headline dentro de uma tag h2.
