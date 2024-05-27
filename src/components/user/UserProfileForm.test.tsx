import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfileForm } from './index';
import { UserContext } from '../../contexts/UserContext';
import '@testing-library/jest-dom/extend-expect';

describe('UserProfileForm', () => {
  const mockSetName = jest.fn();
  const mockSetEmail = jest.fn();
  const mockSetPassword = jest.fn();

  const renderUserProfileForm = (name: string) => {
    return render(
      <UserContext.Provider value={{ 
        name, 
        setName: mockSetName, 
        email: 'test@example.com', 
        setEmail: mockSetEmail, 
        password: 'password123', 
        setPassword: mockSetPassword 
      }}>
        <UserProfileForm />
      </UserContext.Provider>
    );
  };

  test('should disable save button if name is empty', () => {
    const { getByLabelText, getByRole } = renderUserProfileForm('');
    const inputName = getByLabelText(/Nome/i);
    const saveButton = getByRole('button');

    expect(inputName).toBeInTheDocument();
    expect(saveButton).toBeDisabled();
  });

  test('should enable save button and update name on form submit', async () => {
    const { getByLabelText, getByRole } = renderUserProfileForm('Old Name');
    const inputName = getByLabelText(/Nome/i);
    const saveButton = getByRole('button');

    await userEvent.clear(inputName);
    await userEvent.type(inputName, 'New Name');

    expect(saveButton).toBeEnabled();

    await userEvent.click(saveButton);

    expect(mockSetName).toHaveBeenCalledWith('New Name');
  });
});
