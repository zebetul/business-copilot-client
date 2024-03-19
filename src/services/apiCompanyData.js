import supabase from "./supabase";

export const apiGetCompanyData = async () => {
  const { data, error } = await supabase.from("company").select("*").single();

  if (error) {
    console.log(error);
    throw new Error("Failed loading the company data");
  }

  return data;
};

export const apiUpdateCompanyData = async (companyData) => {
  const { error } = await supabase
    .from("company")
    .update(companyData)
    .eq("id", 1);

  if (error) {
    console.log(error);
    throw new Error("Failed updating the company data");
  }
};
