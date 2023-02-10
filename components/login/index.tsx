import Head from "next/head";
import Image from "next/image";

export function Login() {
  return (
    <div>
      <Head>
        <title>Login | My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="container">
            <Image src="/logo.svg" alt="My App Logo" width={200} height={50} />
            <h1>Login to My App</h1>
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Login</button>
            </form>
            <p>
              Don&apos;t have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero {
          background-color: #f2f2f2;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          max-width: 400px;
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
          margin-top: 2rem;
        }

        label {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          text-align: left;
        }

        input[type="email"],
        input[type="password"] {
          padding: 1rem;
          margin-bottom: 1rem;
          border: 2px solid #ddd;
          border-radius: 5px;
        }

        button[type="submit"] {
          background-color: #333;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          margin-top: 1rem;
        }

        a {
          color: #333;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
