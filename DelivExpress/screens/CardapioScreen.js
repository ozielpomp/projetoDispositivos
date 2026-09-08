import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { produtos } from '../data/produtos';
import { cores } from '../colors';

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

export default function CardapioScreen({ navigation, totalItens, adicionarItem }) {
  const [busca, setBusca] = useState('');

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function renderProduto({ item }) {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item.imagem }}
          style={styles.imagem}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
          <Text style={styles.preco}>{formatarPreco(item.preco)}</Text>
        </View>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => adicionarItem(item)}
        >
          <Text style={styles.textoBotao}>+ Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>DelivExpress</Text>
        <TouchableOpacity
          style={styles.badge}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.badgeTexto}>{totalItens}</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.busca}
        placeholder="Buscar lanche..."
        placeholderTextColor={cores.secundaria}
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderProduto}
        contentContainerStyle={styles.lista}
      />

      {totalItens > 0 && (
        <TouchableOpacity
          style={styles.barraCarrinhoInferior}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.textoBarraCarrinho}>
            Ver Carrinho ({totalItens})
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundoClaro,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: cores.primaria,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  titulo: {
    color: cores.branco,
    fontSize: 22,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: cores.sucesso,
    borderRadius: 12,
    minWidth: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  badgeTexto: {
    color: cores.branco,
    fontSize: 14,
    fontWeight: 'bold',
  },
  busca: {
    backgroundColor: cores.branco,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 14,
    color: cores.escura,
  },
  lista: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.branco,
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#DDD',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.escura,
  },
  descricao: {
    fontSize: 14,
    color: cores.secundaria,
    marginTop: 2,
  },
  preco: {
    fontSize: 14,
    fontWeight: 'bold',
    color: cores.escura,
    marginTop: 4,
  },
  botaoAdicionar: {
    backgroundColor: cores.sucesso,
    minHeight: 44,
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textoBotao: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 14,
  },
  barraCarrinhoInferior: {
    backgroundColor: cores.sucesso,
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBarraCarrinho: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 16,
  },
});