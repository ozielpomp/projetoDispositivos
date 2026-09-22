import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CardapioScreen from './screens/CardapioScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import { cores } from './colors';

const Stack = createStackNavigator();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarItem(produto) {
    setCarrinho((itensAtuais) => {
      const existente = itensAtuais.find((item) => item.id === produto.id);
      if (existente) {
        return itensAtuais.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...itensAtuais, { ...produto, quantidade: 1 }];
    });
  }

  function alterarQuantidade(id, delta) {
    setCarrinho((itensAtuais) =>
      itensAtuais
        .map((item) => {
          if (item.id === id) {
            const novaQtd = item.quantidade + delta;
            return novaQtd > 0 ? { ...item, quantidade: novaQtd } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: cores.primaria },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Cardápio" options={{ headerShown: false }}>
          {(props) => (
            <CardapioScreen
              {...props}
              totalItens={totalItens}
              adicionarItem={adicionarItem}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Carrinho">
          {(props) => (
            <CarrinhoScreen
              {...props}
              carrinho={carrinho}
              alterarQuantidade={alterarQuantidade}
              limparCarrinho={limparCarrinho}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Checkout" options={{ title: 'Entrega' }}>
          {(props) => <CheckoutScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}