import styles from "@/styles/Login.module.css";
import Image from "next/image";
import Form from "next/form";
import Link from "next/link";

export default function Login() {
    return (
        <div className={styles.loginOutter}>
            <div className={styles.loginBox}>
                <Image
                    className={styles.image}
                    src="/logo-small.png"
                    width={100}
                    height={100}
                    alt="Small Logo"
                />
                <h1>Log In</h1>
                <Form action="post">
                    <div className={styles.loginForm}>
                        <input id="email" name="email" type="text" placeholder="Email"/>

                        <br/>

                        <input id="email" name="email" type="password" placeholder="Password" />

                        <br/>

                        <button>Continue</button>

                        <br/>

                        <div>
                            <p>Don't have an account?</p>

                            <Link href="/signup">
                                <p className={styles.link}>Create one</p>
                            </Link>
                        </div>                        
                    </div>                
                </Form>
            </div>
        </div>
    );
  }