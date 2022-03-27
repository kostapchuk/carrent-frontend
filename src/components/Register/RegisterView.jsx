import './Register.styles.css'

const RegisterView = ({
                          handleSubmit,
                          handleChangeFirstName,
                          handleChangeLastName,
                          handleChangePhone,
                          handleChangeEmail,
                          handleChangePassword,
                      }) => {
    return (
        <div className='register-form-container'>
            <form className='user-form' onSubmit={handleSubmit}>
                <label>
                    First name: <input className={'input-data'} type="text" name="name" onChange={handleChangeFirstName}/>
                </label>
                <label>
                    Last name: <input className={'input-data'} type="text" name="name" onChange={handleChangeLastName}/>
                </label>
                <label>
                    Phone: <input className={'input-data'} type="text" name="name" onChange={handleChangePhone}/>
                </label>
                <label>
                    Email: <input className={'input-data'} type="email" name="name" onChange={handleChangeEmail}/>
                </label>
                <label>
                    Password: <input className={'input-data'} type="password" name="name" onChange={handleChangePassword}/>
                </label>
                <input className={'submit-btn'} type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default RegisterView;