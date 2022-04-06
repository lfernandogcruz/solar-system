import React from 'react';
import Title from './Title';
// // import planets from '../data/planets'; // req 6

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;

// req 2
// 1. Crie um componente chamado SolarSystem dentro da pasta src/components.
// 2. Este componente deve ter uma div que envolva todo seu conteúdo e
// que tenha o atributo data-testid="solar-system".
// 3. Renderize o componente SolarSystem abaixo do Header, dentro do componente principal App.
// O que será verificado
// Será validado se o componente <SolarSystem /> é renderizado.
// Será validado se existe uma div que possui o data-testid="solar-system".
// Será validado se o componente <SolarSystem /> está sendo renderizado
// no componente principal App.

// req 4
// 1. Renderize o componente Title dentro do componente SolarSystem.
// 2. O componente Title deve ser renderizado recebendo a prop headline com o valor "Planetas".
// O que será verificado
// Será validado se o texto "Planetas" é renderizado usando o componente Title
// dentro do componente SolarSystem.

// req 6
// Renderize uma lista com os planetas do Sistema Solar

// 1. Renderize uma lista com os planetas do Sistema Solar dentro component SolarSystem.

// 2. Utilize o componente PlanetCard para renderizar cada item da lista de planetas.

// 3. Você encontrará a lista com os nomes e as imagens de cada planeta do Sistema Solar
// no arquivo src/data/planets.js.

// 4. Você deve importar a lista no componente SolarSystem usando o código:
// import planets from '../data/planets';

// 4. A lista de planetas é um array de objetos no seguinte formato:
// {
//   name: "Nome do planet",
//   image: "caminho-para-imagem-do-planeta"
// }

// 5. Para cada planeta da lista, você deverá renderizar um componente PlanetCard,
// passando o atributo name para a prop planetName e o atributo image para a prop planetImage.

// Dica: lembre-se do método que te permite criar vários componentes iguais a partir dos valores presentes em um array. Lembre-se que ao renderizar uma lista, você deve passar o atributo key para cada item. Você pode usar o nome do planeta como key.
// MAP

// O que será verificado
// Será verificado se é renderizado um componente <PlanetCard /> para cada planeta da
// lista de planetas.

// Será verificado se todos os planetas do Sistema Solar estão sendo listados na tela.
