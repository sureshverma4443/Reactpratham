export const getUsers = (data) => ({
    type:"GETUSER",
    payload :data,
});

export const deleteUser = (userId) => ({
    type:"DELETE",
    payload:userId,
})