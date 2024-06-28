import { Link } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { useContext } from "react";

const Register = () => {
  const { emailSignup } = useContext(AuthProvider);
  const handleSignUp=(e)=>{

    e.preventDefault();
    const form=new FormData(e.currentTarget)

    // const name=form.get("name")
    const email=form.get("email")
    const password=form.get("password")

    emailSignup(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
    return (
      <div>
        <div className="hero bg-base-100 h-96">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>

              <div className="card mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">user Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary"></button>
                  </div>
                </form>
                <Link className="text-red-600 m-5 text-center" to={"/login"}>
                  already Register ? Log-in{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;