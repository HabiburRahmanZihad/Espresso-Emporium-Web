import { FaGithub, FaGoogle } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";

const Signup = () => {
    const { createUser, loginGithub, loginGoogle } = use(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload

        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFromData } = Object.fromEntries(formData.entries());


        // Call the createUser function from AuthContext
        createUser(email, password)
            .then((result) => {
                const user = result.user;


                const userProfile = {
                    email,
                    ...restFromData,
                    creationTime: user.metadata.creationTime,
                    lastSignInTime: user.metadata.lastSignInTime,
                }

                // Save user profile to database
                return fetch('https://espresso-emporium-server-seven-sigma.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userProfile),
                });
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("User signed up successfully");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("There was an error during signup.");
            });

        // form.reset(); // Reset the form after submission
    };


    const handleGoogleSignup = () => {
        // Add Google signup logic here
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

    const handleGithubSignup = () => {

        // Add GitHub signup logic here
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
                    backgroundImage: "url('/assets/more/6.jpeg')",
                }}
            >
                <div className="bg-white/10 backdrop-blur-lg text-white px-12 py-10 rounded-2xl shadow-2xl w-full max-w-xl border border-white/20">
                    <h2 className="text-4xl rancho font-bold text-center mb-10">Sign Up Now ! ! !</h2>


                    {/*SignUp Form */}
                    <form onSubmit={handleSubmit}>

                        <div className="mb-8">
                            <label htmlFor="fullname" className="block text-lg mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none py-3"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="address" className="block text-lg mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none py-3"
                                placeholder="Enter your address"
                                required
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="phone" className="block text-lg mb-2">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none py-3"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="photoUrl" className="block text-lg mb-2">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                name="photoUrl"
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none py-3"
                                placeholder="Enter your photo URL"
                                required
                            />
                        </div>

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


                        <button
                            type="submit"
                            aria-label="Sign Up"
                            className="w-full flex items-center justify-center gap-2 text-2xl font-semibold py-3 rounded-md bg-white text-[#331A15] rancho transition hover:bg-[#331A15] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#331A15]"
                        >
                            <SiGnuprivacyguard size={25} />
                            Sign Up
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-white/30"></div>
                        <span className="px-4 text-white text-2xl rancho">or</span>
                        <div className="flex-grow h-px bg-white/30"></div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="space-y-4">
                        <button
                            onClick={handleGoogleSignup}
                            className="w-full flex items-center justify-center gap-3 text-2xl rancho bg-white text-[#331A15] font-semibold py-3 rounded-md hover:bg-[#331A15] hover:text-white transition border border-white/30"
                        >
                            <FaGoogle size={25} />
                            Continue with Google
                        </button>
                        <button
                            onClick={handleGithubSignup}
                            className="w-full flex items-center justify-center gap-3 text-2xl rancho bg-white text-[#331A15] font-semibold py-3 rounded-md hover:bg-[#331A15] hover:text-white transition border border-white/30"
                        >
                            <FaGithub size={26} />
                            Continue with GitHub
                        </button>
                    </div>



                    <p className="mt-8 text-center text-base">
                        Already have an account?{" "}
                        <Link to={'/signin'} className="underline ">
                            Signin
                        </Link>
                    </p>

                </div>
            </div>
        </>
    );
};

export default Signup;
