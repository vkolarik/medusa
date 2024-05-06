import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ProductDetail from './ProductDetail';

// Mock the external functions used in the component
jest.mock('app/actions', () => ({
  getProductDetailByHandle: jest.fn().mockResolvedValue({
    title: 'Test Product',
    description: 'Test Description',
    price: 100,
    images: ['image1.jpg', 'image2.jpg'],
    categories: [{ handle: 'test_category' }],
  }),
  getCategoryProductDetailsByHandle: jest.fn().mockResolvedValue([
    {
      title: 'Similar Product 1',
      description: 'Description for Similar Product 1',
      price: 90,
      images: ['similar_image1.jpg'],
      route: '/similar-product-1',
    },
    {
      title: 'Similar Product 2',
      description: 'Description for Similar Product 2',
      price: 80,
      images: ['similar_image2.jpg'],
      route: '/similar-product-2',
    },
  ]),
  getCategoriesList: jest.fn().mockResolvedValue({
    product_categories: [{ handle: 'test_category', name: 'Test Category' }],
  }),
  getBreadcrumbsForProduct: jest.fn().mockResolvedValue([
    { title: 'Home', url: '/' },
    { title: 'Test Category', url: '/test-category' },
    { title: 'Test Product', url: '/test-product' },
  ]),
}));

describe('ProductDetail', () => {
  it('renders product details and similar products', async () => {
    const { getByText, getAllByText } = render(<ProductDetail params={{ slug: 'test-product' }} />);

    // Wait for the loading spinner to disappear
    await waitFor(() => expect(getByText('Test Product')).toBeInTheDocument());

    // Check if product details are rendered
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('100 Kč')).toBeInTheDocument();

    // Check if similar products are rendered
    expect(getByText('Podobné produkty')).toBeInTheDocument();
    expect(getByText('Similar Product 1')).toBeInTheDocument();
    expect(getByText('Description for Similar Product 1')).toBeInTheDocument();
    expect(getByText('Similar Product 2')).toBeInTheDocument();
    expect(getByText('Description for Similar Product 2')).toBeInTheDocument();
    expect(getAllByText('90 Kč').length).toBe(1); // Check only one price is rendered
    expect(getAllByText('80 Kč').length).toBe(1); // Check only one price is rendered
  });
});
