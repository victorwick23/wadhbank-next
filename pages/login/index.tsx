// import { useRouter } from "next/router";
// import { basePath } from "../../utils/url";
// export default function Form() {
//   const router = useRouter();
//   const signInUser = async (event) => {
//     event.preventDefault();

//     const res = await fetch(`${basePath}/api/login`, {
//       body: JSON.stringify({
//         email: event.target.email.value,
//         password: event.target.password.value,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//     });

//     const { user } = await res.json();
//     if (user) router.push(`/dashboard`);
//   };

//   return (
//     <form onSubmit={signInUser}>
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         autoComplete="email"
//         required
//       />
//       <label htmlFor="password">Password</label>

//       <input type="password" id="password" name="password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

import { useState } from "react";
import { supabase } from "../../utils/supabase";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
