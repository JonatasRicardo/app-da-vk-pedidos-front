import {
  createSlice
} from '@reduxjs/toolkit';

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

export const {
  updateCardapio
} = cardapioSlice.actions;

export const getCardapio = () => dispatch => {
  const categorias = [{
    id: 'promocoes',
    nome: 'Promoções',
    produtos: [{
        id: 1,
        nome: 'RG Furioso',
        preco: 2300,
        descricao: 'Pão de parmesão, 200g de hambúrguer de costela, queijo prato especial, molho barbecue tabasco, onions rings e salada.',
        foto: 'https://primeburgergrill.grandchef.com.br/storage/images/produto/827fc46387ab6527e52430debe2d32e4.png',
        ingredientes: [{
            id: 'pao',
            nome: 'Pão',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['parmesao'],
            opcoes: [{
              id: 'parmesao',
              nome: 'Parmesão'
            }]
          },
          {
            id: 'carne',
            nome: 'Carne',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['costela200'],
            opcoes: [{
              id: 'costela200',
              nome: 'Costela 200g'
            }]
          },
          {
            id: 'queijo',
            nome: 'Queijo',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['minas'],
            opcoes: [{
              id: 'minas',
              nome: 'Minas Padrão'
            }]
          },
          {
            id: 'molho',
            nome: 'Molho',
            customizavel: false,
            quantidadePermitida: 2,
            quantidadeCustomizavel: false,
            padrao: ['mostardaCervBelga', 'bbqPicante'],
            opcoes: [{
                id: 'mostardaCervBelga',
                nome: 'Mostarda de cerveja Belga'
              },
              {
                id: 'bbqPicante',
                nome: 'Barbecue Picante'
              },
            ]
          },
          {
            id: 'adicionais',
            nome: 'Adicionais',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['onionRings'],
            opcoes: [{
              id: 'onionRings',
              nome: 'Onion Rings',
              preco: 0
            }, ]
          },
        ]
      },
      {
        id: 2,
        nome: 'RG Furioso 2',
        preco: 2300,
        descricao: 'Pão de parmesão, 200g de hambúrguer de costela, queijo prato especial, molho barbecue tabasco, onions rings e salada.',
        foto: 'https://primeburgergrill.grandchef.com.br/storage/images/produto/827fc46387ab6527e52430debe2d32e4.png',
        ingredientes: [{
            id: 'pao',
            nome: 'Pão',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['parmesao'],
            opcoes: [{
              id: 'parmesao',
              nome: 'Parmesão'
            }]
          },
          {
            id: 'carne',
            nome: 'Carne',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['costela200'],
            opcoes: [{
              id: 'costela200',
              nome: 'Costela 200g'
            }]
          },
          {
            id: 'queijo',
            nome: 'Queijo',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['minas'],
            opcoes: [{
              id: 'minas',
              nome: 'Minas Padrão'
            }]
          },
          {
            id: 'molho',
            nome: 'Molho',
            customizavel: false,
            quantidadePermitida: 2,
            quantidadeCustomizavel: false,
            padrao: ['mostardaCervBelga', 'bbqPicante'],
            opcoes: [{
                id: 'mostardaCervBelga',
                nome: 'Mostarda de cerveja Belga'
              },
              {
                id: 'bbqPicante',
                nome: 'Barbecue Picante'
              },
            ]
          },
          {
            id: 'adicionais',
            nome: 'Adicionais',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['onionRings'],
            opcoes: [{
              id: 'onionRings',
              nome: 'Onion Rings',
              preco: 0
            }, ]
          },
        ]
      },
      {
        id: 3,
        nome: 'RG Furioso 3',
        preco: 2300,
        descricao: 'Pão de parmesão, 200g de hambúrguer de costela, queijo prato especial, molho barbecue tabasco, onions rings e salada.',
        foto: 'https://primeburgergrill.grandchef.com.br/storage/images/produto/827fc46387ab6527e52430debe2d32e4.png',
        ingredientes: [{
            id: 'pao',
            nome: 'Pão',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['parmesao'],
            opcoes: [{
              id: 'parmesao',
              nome: 'Parmesão'
            }]
          },
          {
            id: 'carne',
            nome: 'Carne',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['costela200'],
            opcoes: [{
              id: 'costela200',
              nome: 'Costela 200g'
            }]
          },
          {
            id: 'queijo',
            nome: 'Queijo',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['minas'],
            opcoes: [{
              id: 'minas',
              nome: 'Minas Padrão'
            }]
          },
          {
            id: 'molho',
            nome: 'Molho',
            customizavel: false,
            quantidadePermitida: 2,
            quantidadeCustomizavel: false,
            padrao: ['mostardaCervBelga', 'bbqPicante'],
            opcoes: [{
                id: 'mostardaCervBelga',
                nome: 'Mostarda de cerveja Belga'
              },
              {
                id: 'bbqPicante',
                nome: 'Barbecue Picante'
              },
            ]
          },
          {
            id: 'adicionais',
            nome: 'Adicionais',
            customizavel: false,
            quantidadePermitida: 1,
            quantidadeCustomizavel: false,
            padrao: ['onionRings'],
            opcoes: [{
              id: 'onionRings',
              nome: 'Onion Rings',
              preco: 0
            }, ]
          },
        ],
        padrao: {
          pao: {
            parmesao: 1
          },
          carne: {
            costela200: 1
          },
          queijo: {
            minas: 1
          },
          molho: {
            mostardaCervBelga: 1,
            bbqPicante: 1
          },
          adicionais: {
            onionRings: 1
          },
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