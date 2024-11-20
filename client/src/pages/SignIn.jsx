import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("http://localhost:2999/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
      }
      setLoading(false);
      setError(null)
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };
  return (
    <div className=" mx-auto mt-24 rounded-lg p-5 lg:w-1/2 p-24 ">
      <h1 className="text-center mt-10 text-3xl font-bold uppercase">
        sign in
      </h1>
      <form
        className="flex flex-col gap-4 mt-10 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="email"
          id="email"
          className="third-color border-color p-3 rounded-lg text-color"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="third-color border-color p-3 rounded-lg text-color"
          onChange={handleChange}
        />
        <p>
          Dont you have an account ?{" "}
          <Link className="our-green" to={"/sign-up"}>
            sign up
          </Link>
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <button
          disabled={loading}
          className="our-green third-color border-color p-3 rounded-lg mt-8 uppercase font-semibold hover:opacity-75"
        >
          {loading ? "loading..." : "sign in"}
        </button>
      </form>
    </div>
  );
}
