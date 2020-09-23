import { createSlice } from '@reduxjs/toolkit';

export const cardapioSlice = createSlice({
  name: 'cardapio',
  initialState: {
    categorias: [],
    state: 'uninitialized'
  },
  reducers: {
    updateCardapio: (state, action) => {
      state.categorias = action.payload;
    },
  }
});

export const { updateCardapio } = cardapioSlice.actions;

export const getCardapio = () => dispatch => {
  const categorias = [{
    id: 'promocoes',
    nome: 'Promoções',
    produtos: [
      {
        id: 1,
        nome: 'RG Furioso',
        preco: 2300,
        descricao: 'Pão de parmesão, 200g de hambúrguer de costela, queijo prato especial, molho barbecue tabasco, onions rings e salada.',
        foto: 'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-15/e35/15876642_989645961168204_5767020929582366720_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=G6kT4GQSh00AX9jMbGj&oh=31bd6a1280a44e7671baac54c4a753f9&oe=5F824CA9',
        ingredientes: [
          {
            id: 'pao',
            nome: 'Pão',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['parmesao'],
            opcoes: [{ id: 'parmesao', nome: 'Parmesão' }]
          },
          {
            id: 'carne',
            nome: 'Carne',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['costela200'],
            opcoes: [{ id: 'costela200', nome: 'Costela 200g' }]
          },
          {
            id: 'queijo',
            nome: 'Queijo',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['minas'],
            opcoes: [{ id: 'minas', nome: 'Minas Padrão' }]
          },
          {
            id: 'molho',
            nome: 'Molho',
            customizavel: false,
            quantidadeIncluida: 2,
            quantidadeCustomizavel: false,
            padrao: ['mostardaCervBelga', 'bbqPicante'],
            opcoes: [
              { id: 'mostardaCervBelga', nome: 'Mostarda de cerveja Belga' },
              { id: 'bbqPicante', nome: 'Barbecue Picante' },
            ]
          },
          {
            id: 'adicionais',
            nome: 'Adicionais',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['onionRings'],
            opcoes: [
              { id: 'onionRings', nome: 'Onion Rings', preco: 0 },
            ]
          },
        ]
      },
      {
        id: 2,
        nome: 'RG Furioso 2',
        preco: 2300,
        descricao: 'Pão de parmesão, 200g de hambúrguer de costela, queijo prato especial, molho barbecue tabasco, onions rings e salada.',
        foto: 'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-15/e35/15876642_989645961168204_5767020929582366720_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=G6kT4GQSh00AX9jMbGj&oh=31bd6a1280a44e7671baac54c4a753f9&oe=5F824CA9',
        ingredientes: [
          {
            id: 'pao',
            nome: 'Pão',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['parmesao'],
            opcoes: [{ id: 'parmesao', nome: 'Parmesão' }]
          },
          {
            id: 'carne',
            nome: 'Carne',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['costela200'],
            opcoes: [{ id: 'costela200', nome: 'Costela 200g' }]
          },
          {
            id: 'queijo',
            nome: 'Queijo',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['minas'],
            opcoes: [{ id: 'minas', nome: 'Minas Padrão' }]
          },
          {
            id: 'molho',
            nome: 'Molho',
            customizavel: false,
            quantidadeIncluida: 2,
            quantidadeCustomizavel: false,
            padrao: ['mostardaCervBelga', 'bbqPicante'],
            opcoes: [
              { id: 'mostardaCervBelga', nome: 'Mostarda de cerveja Belga' },
              { id: 'bbqPicante', nome: 'Barbecue Picante' },
            ]
          },
          {
            id: 'adicionais',
            nome: 'Adicionais',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['onionRings'],
            opcoes: [
              { id: 'onionRings', nome: 'Onion Rings', preco: 0 },
            ]
          },
        ]
      },
      {
        id: 3,
        nome: 'RG Furioso 3',
        preco: 2300,
        descricao: 'Pão de parmesão, 200g de hambúrguer de costela, queijo prato especial, molho barbecue tabasco, onions rings e salada.',
        foto: 'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-15/e35/15876642_989645961168204_5767020929582366720_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=G6kT4GQSh00AX9jMbGj&oh=31bd6a1280a44e7671baac54c4a753f9&oe=5F824CA9',
        ingredientes: [
          {
            id: 'pao',
            nome: 'Pão',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['parmesao'],
            opcoes: [{ id: 'parmesao', nome: 'Parmesão' }]
          },
          {
            id: 'carne',
            nome: 'Carne',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['costela200'],
            opcoes: [{ id: 'costela200', nome: 'Costela 200g' }]
          },
          {
            id: 'queijo',
            nome: 'Queijo',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['minas'],
            opcoes: [{ id: 'minas', nome: 'Minas Padrão' }]
          },
          {
            id: 'molho',
            nome: 'Molho',
            customizavel: false,
            quantidadeIncluida: 2,
            quantidadeCustomizavel: false,
            padrao: ['mostardaCervBelga', 'bbqPicante'],
            opcoes: [
              { id: 'mostardaCervBelga', nome: 'Mostarda de cerveja Belga' },
              { id: 'bbqPicante', nome: 'Barbecue Picante' },
            ]
          },
          {
            id: 'adicionais',
            nome: 'Adicionais',
            customizavel: false,
            quantidadeIncluida: 1,
            quantidadeCustomizavel: false,
            padrao: ['onionRings'],
            opcoes: [
              { id: 'onionRings', nome: 'Onion Rings', preco: 0 },
            ]
          },
        ],
        padrao: {
          pao: { parmesao: 1 },
          carne: { costela200: 1 },
          queijo: { minas: 1 },
          molho: { mostardaCervBelga: 1, bbqPicante: 1 },
          adicionais: { onionRings: 1 },
        }
      },
    ]
  }];
  setTimeout(() => {
    dispatch(updateCardapio(categorias));
  }, 1000);
};

export const selectCardapio = state => state.cardapio;

export default cardapioSlice.reducer;
