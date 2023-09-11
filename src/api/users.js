// update a user to database
export const updateUser = async(userData) => {
  
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userData?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    const data = await response.json();
    return data;
  };