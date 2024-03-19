import supabase from "./supabase";

export const apiGetCompanyData = async () => {
  const { data, error } = await supabase.from("company").select("*").single();

  if (error) {
    console.log(error);
    throw new Error("Failed loading the company data");
  }

  return data;
};
