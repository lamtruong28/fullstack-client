import { Button } from "reactstrap";

export default function Login() {
    return (
        <div className="bg-login">
            <div className="p-4 border rounded bg-light col-4">
                <h1 className="display-5 text-center">Login</h1>
                <form action="">
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Use name:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter user name"
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input
                            type="password"
                            autoComplete=""
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                        />
                        <small className="text-danger small"></small>
                    </div>
                    <button type="button" className={'btn btn-primary w-100'}>Log in</button>
                    <div className="clearfix">
                        <p className="btn link-primary float-end mb-0 text-decoration-underline">Forgotten password?</p>
                    </div>
                    <div className="other-login text-center position-relative">
                        <span className="px-2">Or login with</span>
                    </div>
                    <div className="d-flex mb-2">
                        <Button
                            color="secondary"
                            type="button"
                            className={'rounded-circle me-2 d-flex justify-content-center align-items-center'}
                            style={{ width: 40, height: 40 }}
                        >
                            <i style={{ fontSize: 20 }} className="fa-brands fa-google"></i>
                        </Button>
                        <Button
                            color="secondary"
                            type="button"
                            className={'rounded-circle me-2 d-flex justify-content-center align-items-center'}
                            style={{ width: 40, height: 40 }}
                        >
                            <i style={{ fontSize: 20 }} className="fa-brands fa-facebook-f"></i>
                        </Button>
                    </div>
                    <p className='m-md-0'>Don't have an account? <button type="button" className="link-primary border-0 bg-light text-decoration-underline" >Sign up</button></p>
                </form>
            </div >
        </div>
    )
}