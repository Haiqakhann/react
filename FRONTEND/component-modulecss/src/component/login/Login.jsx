import style from './login.module.css'


const Login = ()=>{
    return (
        <form action="" style={style.form}>
            <div className={style.formC}>
                <div>
                    <input type="text" placeholder="enter email" className={style.input} />
                </div>
                <div>
                    <input type="text" placeholder="enter password" className={style.input} />
                </div>
                <div>
                    <input type="button" value="submit"  className={style.submit}/>
                </div>
            </div>
        </form>
    )
}

export default Login