// 1. Crie um componente chamado Header dentro da pasta src/components.
// Este componente irá renderizar o título principal da página.

// 2. Ele deve conter uma tag header e, dentro dela, uma tag h1.
// O texto da tag h1 deve ser "Sistema Solar".

// 3. Renderize o componente Header dentro do componente principal App.
import React from 'react';

class Header extends React.Component {
  render() {
    return <header><h1>Sistema Solar</h1></header>;
  }
}

export default Header;

// O que será verificado
// Será validado se o componente <Header /> é renderizado.

// Será validado se o componente <Header /> contém uma tag header.

// Será validado se o componente <Header /> contém uma tag h1.

// Será validado se o componente <Header /> renderiza corretamente o texto "Sistema Solar".

// Será validado se o componente <Header /> está sendo renderizado no componente principal App
