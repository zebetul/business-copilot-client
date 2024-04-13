import supabase from "./supabase";

export const apiGetCompanies = async () => {
  // Select only the title and id columns and rename title to label and id to value
  const { data: companies, error } = await supabase
    .from("company")
    .select("title, id")
    .order("id", { ascending: true });

  if (error) {
    console.log(error);
    throw new Error("Failed loading the companies");
  }

  return companies;
};

export const apiGetCompany = async (id) => {
  const { data: company, error } = await supabase
    .from("company")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Failed loading the company data");
  }

  return company;
};

export const apiUpdateCompany = async (companyData) => {
  const { error } = await supabase
    .from("company")
    .update(companyData)
    .eq("id", companyData.id);

  if (error) {
    console.log(error);
    throw new Error("Failed updating the company data");
  }
};

export const apiAddCompany = async (cui) => {
  // Input validation
  if (!cui) throw new Error("CUI is required");

  const response = await fetch(`${import.meta.env.VITE_API_URL}/company`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cui,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const data = await response.json();

  return data;
};
