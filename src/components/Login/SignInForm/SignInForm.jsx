

const SignInForm = () => {
    return (
        <form className="flex flex-col items-center p-4">
            <input
                className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
                type="email"
                placeholder="Email or mobile number"
            />
            <input
                className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
                type="password"
                placeholder="Password"
            />
            <button
                className="m-4 w-64 h-10 bg-red-600 text-white rounded border-solid border-2"
                type="submit"
            >
                Login
            </button>
        </form>
    )
}

export default SignInForm;

