import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();
  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const respons = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: { 'Content-type': 'Application/json' },
    });
    console.log(respons);
    if (respons.status === 200) {
      return history.push('/');
    };
    return setError('Ошибка!');
  };

  return (
    <div>
      <div>{error}</div>
      <form onSubmit={handleClick}>
        <input name="email" type="email" required />
        <input name="password" type="password" required />
        <button type="submit">Войти</button>
      </form>
      <div class="divider"></div>
      <div class="section">
        <a href="http://localhost:4000/login/vkontakte" class="btn blue darken-1">
          <i class="fab fa-vk left"></i>Login with VK
        </a>
      </div>
    </div>
  );
};