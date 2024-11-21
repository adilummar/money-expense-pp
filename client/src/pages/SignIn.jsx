import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInFaild, signInSuccess } from "../redux/user/userSlice";

export default function SignIn() {
 const {error,loading} = useSelector((state)=> state.user)
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(signInStart())
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFaild(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFaild(error.message))
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
