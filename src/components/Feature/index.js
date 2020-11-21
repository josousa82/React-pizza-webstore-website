import React from 'react'
import {
  FeatureContainer,
  Featurebutton
} from './FeatureElements'

export const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <Featurebutton>Order Now</Featurebutton>
    </FeatureContainer>
  )
}
