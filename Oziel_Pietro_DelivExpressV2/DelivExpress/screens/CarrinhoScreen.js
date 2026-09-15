<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
import {
  View,
  Text,
  FlatList,
<<<<<<< HEAD
  TextInput,
=======
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { cores } from '../colors';

<<<<<<< HEAD
const TAXA_ENTREGA = 6.0;

=======
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

export default function CarrinhoScreen({
  navigation,
  carrinho,
  alterarQuantidade,
  limparCarrinho,
}) {
<<<<<<< HEAD
  const [cupom, setCupom] = useState('');
  const [descontoAplicado, setDescontoAplicado] = useState(false);

  const carrinhoVazio = carrinho.length === 0;

  const subtotal = carrinho.reduce(
=======
  const total = carrinho.reduce(
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

<<<<<<< HEAD
  const desconto = descontoAplicado ? subtotal * 0.1 : 0;
  const entrega = carrinhoVazio ? 0 : TAXA_ENTREGA;
  const total = subtotal - desconto + entrega;

  function aplicarCupom() {
    setDescontoAplicado(cupom.trim().toUpperCase() === 'ALUNO10');
  }

=======
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
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

<<<<<<< HEAD
  if (carrinhoVazio) {
    return (
      <View style={styles.container}>
=======
  return (
    <View style={styles.container}>
      {carrinho.length === 0 ? (
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
        <View style={styles.vazioContainer}>
          <Text style={styles.textoVazio}>Seu carrinho está vazio.</Text>
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.textoBotaoVoltar}>Voltar ao Cardápio</Text>
          </TouchableOpacity>
        </View>
<<<<<<< HEAD
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />

      <View style={styles.rodape}>
        <View style={styles.linhaCupom}>
          <TextInput
            style={styles.inputCupom}
            placeholder="Cupom de desconto"
            placeholderTextColor={cores.secundaria}
            value={cupom}
            onChangeText={setCupom}
            autoCapitalize="characters"
          />
          <TouchableOpacity style={styles.botaoCupom} onPress={aplicarCupom}>
            <Text style={styles.textoBotaoCupom}>Aplicar</Text>
          </TouchableOpacity>
        </View>
        {descontoAplicado && (
          <Text style={styles.textoCupomOk}>Cupom ALUNO10 aplicado!</Text>
        )}

        <View style={styles.linhaValor}>
          <Text style={styles.textoValor}>Subtotal</Text>
          <Text style={styles.valor}>{formatarPreco(subtotal)}</Text>
        </View>

        {descontoAplicado && (
          <View style={styles.linhaValor}>
            <Text style={styles.textoValor}>Desconto</Text>
            <Text style={[styles.valor, { color: cores.sucesso }]}>
              -{formatarPreco(desconto)}
            </Text>
          </View>
        )}

        <View style={styles.linhaValor}>
          <Text style={styles.textoValor}>Entrega</Text>
          <Text style={styles.valor}>{formatarPreco(entrega)}</Text>
        </View>

        <View style={styles.linhaTotal}>
          <Text style={styles.textoTotal}>Total</Text>
          <Text style={styles.valorTotal}>{formatarPreco(total)}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.botaoFinalizar,
            carrinhoVazio && styles.botaoDesabilitado,
          ]}
          disabled={carrinhoVazio}
          onPress={() => {}}
        >
          <Text style={styles.textoBotaoFinalizar}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLimpar} onPress={limparCarrinho}>
          <Text style={styles.textoBotaoLimpar}>Esvaziar Carrinho</Text>
        </TouchableOpacity>
      </View>
=======
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
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
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
<<<<<<< HEAD
    minHeight: 44,
    justifyContent: 'center',
=======
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
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
<<<<<<< HEAD
    width: 36,
    height: 36,
=======
    width: 32,
    height: 32,
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
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
<<<<<<< HEAD
  linhaCupom: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputCupom: {
    flex: 1,
    backgroundColor: cores.fundoClaro,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 14,
    color: cores.escura,
    marginRight: 8,
  },
  botaoCupom: {
    backgroundColor: cores.primaria,
    paddingHorizontal: 16,
    borderRadius: 8,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoCupom: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 14,
  },
  textoCupomOk: {
    color: cores.sucesso,
    fontSize: 13,
    marginBottom: 8,
  },
  linhaValor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  textoValor: {
    fontSize: 14,
    color: cores.secundaria,
  },
  valor: {
    fontSize: 14,
    color: cores.escura,
  },
=======
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
  linhaTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
<<<<<<< HEAD
    marginTop: 8,
=======
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
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
<<<<<<< HEAD
  botaoDesabilitado: {
    backgroundColor: '#B0B0B0',
  },
=======
>>>>>>> 167747842b779613d50b84f1b5adc2e7c28a8169
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