import './Login.styles.css'

const LoginView = ({
                       handleSubmit,
                       handleChangeEmail,
                       handleChangePassword,
                   }) => {
    return (
        <div className='register-form-container'>
            <form className='user-from' onSubmit={handleSubmit}>
                <label>
                    Email: <input type="email" name="name" onChange={handleChangeEmail}/>
                </label>
                <label>
                    Password: <input type="password" name="name" onChange={handleChangePassword}/>
                </label>
                <input className={'submit-btn'} type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default LoginView;