import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { cores } from '../colors';

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

export default function CarrinhoScreen({
  navigation,
  carrinho,
  alterarQuantidade,
  limparCarrinho,
}) {
  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  function renderItem({ item }) {
    return (
      <View style={styles.cardItem}>
        <View style={styles.infoItem}>
          <Text style={styles.nomeItem}>{item.nome}</Text>
          <Text style={styles.precoItem}>{formatarPreco(item.preco)}</Text>
        </View>

        <View style={styles.controles}>
          <TouchableOpacity
            style={styles.botaoQtd}
            onPress={() => alterarQuantidade(item.id, -1)}
          >
            <Text style={styles.textoBotaoQtd}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantidade}>{item.quantidade}</Text>

          <TouchableOpacity
            style={styles.botaoQtd}
            onPress={() => alterarQuantidade(item.id, 1)}
          >
            <Text style={styles.textoBotaoQtd}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {carrinho.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.textoVazio}>Seu carrinho está vazio.</Text>
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.textoBotaoVoltar}>Voltar ao Cardápio</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.lista}
          />

          <View style={styles.rodape}>
            <View style={styles.linhaTotal}>
              <Text style={styles.textoTotal}>Total:</Text>
              <Text style={styles.valorTotal}>{formatarPreco(total)}</Text>
            </View>

            <TouchableOpacity style={styles.botaoFinalizar}>
              <Text style={styles.textoBotaoFinalizar}>Finalizar Pedido</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoLimpar}
              onPress={limparCarrinho}
            >
              <Text style={styles.textoBotaoLimpar}>Esvaziar Carrinho</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundoClaro,
  },
  vazioContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textoVazio: {
    fontSize: 16,
    color: cores.secundaria,
    marginBottom: 16,
  },
  botaoVoltar: {
    backgroundColor: cores.primaria,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textoBotaoVoltar: {
    color: cores.branco,
    fontWeight: 'bold',
  },
  lista: {
    padding: 16,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: cores.branco,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  infoItem: {
    flex: 1,
  },
  nomeItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.escura,
  },
  precoItem: {
    fontSize: 14,
    color: cores.secundaria,
    marginTop: 2,
  },
  controles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botaoQtd: {
    backgroundColor: cores.fundoClaro,
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoQtd: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.escura,
  },
  quantidade: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.escura,
  },
  rodape: {
    backgroundColor: cores.branco,
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  linhaTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  textoTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.escura,
  },
  valorTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.sucesso,
  },
  botaoFinalizar: {
    backgroundColor: cores.sucesso,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  textoBotaoFinalizar: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoLimpar: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  textoBotaoLimpar: {
    color: cores.erro,
    fontSize: 14,
  },
});