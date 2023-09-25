import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { AuthContext } from "contexts/AuthContext";
import styles from "./registration.module.scss";

const RegistrationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const router = useRouter();
  const { signUp, isAuthenticated } = useContext(AuthContext);

  const handleSignUp = async (data: any) => {
    try {
      await signUp(data);
      router.push("/");
    } catch (error) {
      alert(`The following error ocurred: ${error}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/flashi_redondo.png" alt="" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(handleSignUp)}>
        <Controller
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <input
              className={styles.input}
              placeholder="Nome"
              onChange={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}

        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Endereço de email inválido",
            },
          }}
          render={({ field }) => (
            <input
              type="email"
              className={styles.input}
              placeholder="E-mail"
              {...field}
            />
          )}
          name="email"
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}

        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
            validate: {
              minLength: (value) =>
                value.length >= 8 || "A senha deve ter pelo menos 8 caracteres",
              upperCase: (value) =>
                /[A-Z]/.test(value) ||
                "A senha deve conter pelo menos um caractere maiúsculo",
              number: (value) =>
                /\d/.test(value) || "A senha deve conter pelo menos um número",
              specialChar: (value) =>
                /[!@#$%^&*]/.test(value) ||
                "A senha deve conter pelo menos um caractere especial",
            },
          }}
          render={({ field }) => (
            <input
              type="password"
              className={styles.input}
              placeholder="Senha"
              {...field}
            />
          )}
          name="password"
        />
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password.message}</span>
        )}

        <button className={styles.button} type="submit" onClick={handleSignUp}>
          Cadastrar
        </button>
      </form>

      <div className={styles.loginContainer}>
        <p>Já tem uma conta? Faça seu login.</p>
        <button
          className={`${styles.button} ${styles.login}`}
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default RegistrationScreen;
