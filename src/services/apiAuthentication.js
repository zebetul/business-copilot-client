import supabase from "./supabase";

export const apiSignUp = async ({ userName, email, password }) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userName,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const apiLogin = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const apiGetCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
};

export const apiLogout = async () => {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  return true;
};
