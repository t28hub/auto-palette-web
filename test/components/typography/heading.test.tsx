import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from '@/components/typography';

describe('Heading', () => {
  test('render', () => {
    // Act
    render(<Heading>Hello, world!</Heading>);

    // Assert
    expect(document.querySelector('h3')).toBeDefined();
    expect(screen.getByText('Hello, world!')).toBeDefined();
  });
});
