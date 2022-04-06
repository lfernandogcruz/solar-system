// 1. Crie um componente chamado Missions dentro da pasta src/components.
// 2. Este componente deve ter uma div que envolva todo seu conteúdo e que tenha o
// atributo data-testid="missions".
// 3. Renderize o componente Missions abaixo do SolarSystem, dentro do componente principal App.
// O que será verificado
// Será validado se o componente <Missions /> é renderizado.
// Será validado se existe uma div que possui o data-testid="missions".
// Será validado se o componente <Missions /> está sendo renderizado no componente principal App.
// req 8
// Renderize o componente Title dentro do componente Missions.
// 1. Renderize o componente Title dentro do componente Missions.
// 2. O componente Title deve ser renderizado recebendo a prop headline com o valor "Missões"
// O que será verificado
// Será validado se o texto "Missões" é renderizado usando o componente Title dentro
// do componente Missions.
import React from 'react';
// import missions from '../data/missions';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;

// req 10
// Renderize uma lista com as missões espaciais

// 1. Renderize uma lista com as missões espaciais dentro componente Missions.

// 2. Utilize o componente MissionCard para renderizar cada item da lista de missões.

// 3. Você encontrará a lista com as informações de cada missão espacial
// no arquivo src/data/missions.js.

// 4. Você deve importar a lista no componente Missions usando o código:
// import missions from '../data/missions';

// 5. A lista de missões espaciais é um array de objetos no seguinte formato:
// {
//   name: 'Nome da missão',
//   year: 'Ano de lançamento da missão',
//   country: 'País que lançou a missão',
//   destination: 'Destino da missão',
// }

// 6. Para cada missão espacial da lista, você deverá renderizar um componente MissionCard,
// passando o cada atributo para sua respectiva prop.

// Dica: lembre-se do método que te permite criar vários componentes iguais a partir dos
// valores presentes em um array. Lembre-se que ao renderizar uma lista, você deve passar o
// atributo key para cada item. Você pode usar o nome da missão como key.
// MAP

// O que será verificado
// Será verificado se é renderizado um componente <MissionCard /> para cada missão espacial
// da lista de missões.

// Será verificado se todas as missões espaciais estão sendo listados na tela.
