import { supabase } from "../../utils/supabase";

export default async function registerUser(req, res) {
  const { email, password } = req.body;
  let { user, error } = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
  });
  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json({ user: user });
}
