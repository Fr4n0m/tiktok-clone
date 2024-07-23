import supabase from "../../services/supabase.js";

const Login = () => {
  const handleClick = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "twitter",
    });

    console.log({ user, session, error });
  };

  return (
    <div>
      <button onClick={handleClick}>Login with Twitter</button>
    </div>
  );
};

export default Login;
