import cover from "../../assets/images/login-cover.jpg"
import logo from "../../assets/images/logo.svg"

const Login = () => {
    return (
        <div className="container-fluid d-flex flex-row bg-white m-0 p-0 vh-100">
            <div className="w-auto h-100">
                <img className="h-100 m-0" src={cover} alt="ConnectU" />
            </div>
            <div className="w-100 h-100 d-flex flex-column p-5 ms-5 justify-content-center">
                <img className="mb-2" src={logo} alt="ConnectU" width={300} />
                <p className="h5 text-black-50 my-3">Sign into your account!</p>
                <form>
                    <div className="form-group my-3">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control mt-1 w-75" id="email" />
                    </div>
                    <div className="form-group my-3">
                        <label for="password ">Password</label>
                        <input type="password" class="form-control mt-1 w-75" id="password" />
                    </div>
                    <div className="form-group form-check my-3">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label text-muted" for="remember">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-success mt-1 px-5 py-2">Login</button>
                </form>
                <div className="w-100 mt-5 d-flex flex-row justify-content-between">
                    <div>
                        <p className="text-muted">Need Help? <a className="text-reset" href="#" target="_blank" rel="noopener noreferrer">Contact Administrator</a></p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;