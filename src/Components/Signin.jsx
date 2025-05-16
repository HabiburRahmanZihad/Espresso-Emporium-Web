import { FaGithub, FaGoogle } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";

const Signin = () => {
    const { signInUser, loginGoogle, loginGithub } = use(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        // Call the signInUser function from AuthContext
        signInUser(email, password)
            .then((result) => {
                alert("User signed in successfully");

                // Update last login time in the database
                const signInInfo = {
                    email,
                    lastSignInTime: result?.user?.metadata?.lastSignInTime,
                }

                fetch(`https://espresso-emporium-server-seven-sigma.vercel.app/users`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(signInInfo),
                })
                    .then((res) => res.json())
                    .then(() => {
                        // Optionally, you can redirect or show a success message here
                    })
                    .catch((error) => {
                        console.error("Error updating last sign-in time:", error);
                        // Optionally, you can show an error message here
                    });
            })
            .catch((error) => {
                console.error("Error signing in:", error);
                // Optionally, you can show an error message here
            });
        form.reset(); // Reset the form after submission
    };

    const handleGoogleSignin = () => {

        // Add Google sign-in logic here

        loginGoogle()
            .then(() => {
                alert("User signed in with Google successfully");
                // Optionally, you can redirect or show a success message here
            })
            .catch((error) => {
                console.error("Error signing in with Google:", error);
                // Optionally, you can show an error message here
            });
    };

    const handleGithubSignin = () => {

        // Add GitHub sign-in logic here
        loginGithub()
            .then(() => {
                alert("User signed in with GitHub successfully");
                // Optionally, you can redirect or show a success message here
            })
            .catch((error) => {
                console.error("Error signing in with GitHub:", error);
                // Optionally, you can show an error message here
            });
    };

    return (
        <>
            <div
                className="min-h-[calc(100vh-540px)] flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
                style={{
                    backgroundImage: "url('/public/assets/more/24.jpg')",
                }}
            >
                <div className="bg-white/10 backdrop-blur-lg text-white px-12 py-10 rounded-2xl shadow-2xl w-full max-w-xl border border-white/20">
                    <h2 className="text-4xl rancho font-bold text-center mb-10">Sign In Now !</h2>

                    {/* Sign In Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-lg mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none py-3"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="password" className="block text-lg mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none py-3"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="mb-4 text-right">
                            <Link to="/" className="text-white underline text-sm">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            aria-label="Sign in to your account"
                            className="w-full flex items-center justify-center gap-2 text-2xl font-semibold py-3 rounded-md bg-white text-[#331A15] font-rancho transition duration-200 hover:bg-[#331A15] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#331A15] focus:ring-offset-2"
                        >
                            <PiSignInBold size={25} />
                            Sign In
                        </button>
                    </form>


                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-white/30"></div>
                        <span className="px-4 text-white text-2xl rancho">or</span>
                        <div className="flex-grow h-px bg-white/30"></div>
                    </div>

                    {/* Social Sign In Buttons */}
                    <div className="space-y-4">
                        <button
                            onClick={handleGoogleSignin}
                            className="w-full flex items-center justify-center gap-3 text-2xl rancho bg-white text-[#331A15] font-semibold py-3 rounded-md hover:bg-[#331A15] hover:text-white transition border border-white/30"
                        >
                            <FaGoogle size={25} />
                            Continue with Google
                        </button>
                        <button
                            onClick={handleGithubSignin}
                            className="w-full flex items-center justify-center gap-3 text-2xl rancho bg-white text-[#331A15] font-semibold py-3 rounded-md hover:bg-[#331A15] hover:text-white transition border border-white/30"
                        >
                            <FaGithub size={26} />
                            Continue with GitHub
                        </button>
                    </div>

                    <p className="mt-8 text-center text-base">
                        Don’t have an account?{" "}
                        <Link to={'/signup'} className="underline ">
                            Sign Up
                        </Link>
                    </p>

                </div>
            </div>
        </>
    );
};

export default Signin;
