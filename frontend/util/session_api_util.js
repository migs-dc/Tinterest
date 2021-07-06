export const signup =()=>{
  return $.ajax({
    method:"POST",
    url:"/api/users",
    data: { user }
  });
};

export const login =()=>{
  return $.ajax({
    method:"POST",
    url:"/api/sessions",
    data: { user }
  });
};

export const logout =()=>{
  return $.ajax({
    method:"DELETE",
    url:"/api/session",
  });
};