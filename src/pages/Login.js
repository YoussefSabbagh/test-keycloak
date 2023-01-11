import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { FaSignInAlt } from 'react-icons/fa';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="mb-12 px-5">
        <h1 className="title text-gray-700">
          <FaSignInAlt /> Login
        </h1>
        <p className="text-gray-500">Please create an account</p>
      </section>

      <section className="w-3/4 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="mb-2">
            <input
              type="email"
              className="w-full p-2 rounded mb-2"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="w-full p-2 rounded mb-2"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="mb-2">
            <button type="submit" className="myBtn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
