import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import styles from "./login.module.scss";

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const handleLogin = async (data: any) => {
    try {
      await signIn(data);
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
      <div className={styles.inputContainer}>
        <ControllerInput
          control={control}
          name="email"
          rules={emailRules}
          placeholder="E-mail"
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email.message}</span>
        )}
        <ControllerInput
          control={control}
          name="password"
          rules={passwordRules}
          placeholder="Senha"
          type="password"
        />
        {errors.password && (
          <span className={styles.errorText}>{errors.password.message}</span>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubmit(handleLogin)}>
          Login
        </button>
      </div>
    </div>
  );
};

const emailRules = {
  required: "Campo obrigatório",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Endereço de email inválido",
  },
};

const passwordRules = {
  required: "Campo obrigatório",
};

const ControllerInput = ({ control, name, rules, ...props }: any) => (
  <Controller
    control={control}
    rules={rules}
    render={({ field: { onChange, onBlur, value } }) => (
      <input
        className={styles.styledInput}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        {...props}
      />
    )}
    name={name}
  />
);

export default LoginScreen;
