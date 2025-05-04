import styles from "@/styles/Login.module.css";
import Image from "next/image";
import Form from "next/form";
import Link from "next/link";

export default function Signup() {
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
                <h1>Sign Up</h1>
                <Form action="post">
                    <div className={styles.loginForm}>
                        <input id="email" name="email" type="text" placeholder="Email"/>

                        <br/>

                        <input id="email" name="email" type="password" placeholder="Password" />

                        <br/>

                        <button>Continue</button>

                        <br/>

                        <div>
                            <p>Already have an account?</p>

                            <Link href="/login">
                                <p className={styles.link}>Log In</p>
                            </Link>
                        </div>                        
                    </div>                
                </Form>
            </div>
        </div>
    );
  }