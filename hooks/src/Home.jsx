import useForm from "./customHooks/useForm";
// import useCounter from "./customHooks/useCounter"; // Uncomment if you're using it

const Home = () => {
    // const { count, increase, descrease } = useCounter({}); // Optional
    const { value, handleChange } = useForm({
        name: "",
        lastname: "",
        email: "",
        gender: ""
    });

    console.log("value", value);

    return (
        <>
            {/* <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={descrease}>Decrease</button> */}

            <form>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} value={value.name} />

                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} value={value.email} />

                <label>Gender</label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={value.gender === "male"}
                />
                Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={value.gender === "female"}
                />
                Female
            </form>
        </>
    );
};

export default Home;
