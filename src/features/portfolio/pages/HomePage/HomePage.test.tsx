import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { HERO_DATA } from '../../data/portfolioData';

describe('HomePage', () => {
  it('renders hero section with correct data', () => {
    render(<HomePage />);
    expect(screen.getByText(HERO_DATA.heading)).toBeInTheDocument();
    expect(screen.getByText(HERO_DATA.subheading)).toBeInTheDocument();
  });
});
