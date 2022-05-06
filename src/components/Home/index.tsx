import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import {
  Bag,
  HorizontalList,
  CategoryButton,
  CategoryButtonTitle,
  CategorySelectContainer,
  CategorySelectTitle,
  Container,
  NewProductsContainer,
  NewProductsContainerTitle,
  PageHeader,
  PageTitle,
  Divider,
  ProductsList,
} from './styles';

import BagImage from '../../assets/images/bag.png';
import { ProductCard } from '../ProductCard';

export const Home = () => {
  const renderProductsList = useMemo(() => {
    const items = [
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
      {
        category: `men's clothing`,
        name: 'Fjallraven - Foldsack',
        description:
          'Your perfect pack for everyday use and walks in the forest.',
        price: 109.95,
      },
    ];

    return items?.map(item => {
      return (
        <ProductCard
          isSmaller
          key={Math.random()}
          category={item.category}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      );
    });
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader>
          <PageTitle>Produtos</PageTitle>
          <Bag source={BagImage} />
        </PageHeader>

        <CategorySelectContainer>
          <CategorySelectTitle>FILTRAR CATEGORIA</CategorySelectTitle>

          <HorizontalList>
            <CategoryButton selected>
              <CategoryButtonTitle selected>Últimos</CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
            <CategoryButton selected={false}>
              <CategoryButtonTitle selected={false}>
                Categoria 1
              </CategoryButtonTitle>
            </CategoryButton>
          </HorizontalList>
        </CategorySelectContainer>

        <NewProductsContainer>
          <NewProductsContainerTitle>Novidades</NewProductsContainerTitle>

          <HorizontalList>
            <ProductCard
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
            <ProductCard
              category={`men's clothing`}
              name="Fjallraven - Foldsack"
              description="Your perfect pack for everyday use and walks in the forest."
              price={109.95}
            />
          </HorizontalList>
        </NewProductsContainer>

        <Divider />

        <ProductsList>
          <NewProductsContainerTitle>Listagem</NewProductsContainerTitle>

          <ProductsList>{renderProductsList}</ProductsList>
        </ProductsList>
      </ScrollView>
    </Container>
  );
};
