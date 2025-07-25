import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactForm } from '../contact-form';

describe('ContactForm', () => {
  it('renders the form', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensagem')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
  });
});
