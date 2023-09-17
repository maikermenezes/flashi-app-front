import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import styled from "styled-components";

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

  // const handleLogin = async (data) => {
  //   signInWithEmailAndPassword(auth, data.email, data.password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log('Logged in with:', user.email);
  //       router.push('/home');
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  return (
    <Container>
      <InputContainer>
        <ControllerInput
          control={control}
          name="email"
          rules={emailRules}
          placeholder="E-mail"
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        <ControllerInput
          control={control}
          name="password"
          rules={passwordRules}
          placeholder="Senha"
          type="password"
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      </InputContainer>
      <ButtonContainer>
        <Button
          onClick={handleSubmit(() => {
            /* handle login*/
          })}
        >
          Login
        </Button>
      </ButtonContainer>
    </Container>
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
      <StyledInput
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        {...props}
      />
    )}
    name={name}
  />
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InputContainer = styled.div`
  width: 80%;
`;

const StyledInput = styled.input`
  background-color: white;
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 5px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #0782f9;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const ErrorText = styled.span`
  color: red;
`;

export default LoginScreen;
