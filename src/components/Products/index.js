import React from 'react'
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDec,
  ProductPrice,
  ProductButton
} from './ProductsElements'

export const Products = ({ heading, dataFeed }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {dataFeed.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDec>{product.desc}</ProductDec>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductsWrapper>
    </ProductsContainer>
  )
}
