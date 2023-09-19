import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";

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
    } catch (error) {
      alert(`The following error ocurred: ${error}`);
    }
  };

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
        <Button onClick={handleSubmit(handleLogin)}>Login</Button>
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
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: white;
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 5px;
  width: 70%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #0782f9;
  padding: 15px;
  border-radius: 10px;
  width: 65%;
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
