import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import { auth, db } from '../../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import PopupComponent from '../components/PopUpComponent';
import styled from "styled-components";
import { useRouter } from "next/router";

// ! set userouter route for loginscreen

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

  // const [isPopupVisible, setIsPopupVisible] = useState(false);

  const router = useRouter();

  // const handleSignUp = async (data) => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     const user = userCredential.user;

  //     await setDoc(doc(db, "users", user.uid), { name: data.name });
  //     setIsPopupVisible(true);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <Container>
      {/* {isPopupVisible && (
        <PopupComponent onClose={() => setIsPopupVisible(false)} />
      )} */}

      <Form
        onSubmit={handleSubmit(() => {
          /*handleSignUp */
        })}
      >
        <Controller
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input placeholder="Nome" onChange={onChange} value={value} />
          )}
          name="name"
        />
        {errors.name && <ErrorMessage>*{errors.name.message}</ErrorMessage>}
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
            <Input type="email" placeholder="E-mail" {...field} />
          )}
          name="email"
        />
        {errors.email && <ErrorMessage>*{errors.email.message}</ErrorMessage>}

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
            <Input type="password" placeholder="Senha" {...field} />
          )}
          name="password"
        />
        {errors.password && (
          <ErrorMessage>*{errors.password.message}</ErrorMessage>
        )}
        <Button type="submit">Cadastrar</Button>
      </Form>

      <LoginContainer>
        <p>Já tem uma conta? Faça seu login.</p>
        <Button
          onClick={() => {
            router.replace("/login");
          }}
        >
          Login
        </Button>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  background-color: white;
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 5px;
  width: 70%;
`;

const Button = styled.button`
  background-color: #0782f9;
  padding: 15px;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  width: 65%;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const LoginContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;

  Button {
    width: 100%;
    margin: 0px;
  }

  p {
    margin-top: 5vh;
  }
`;

export default RegistrationScreen;
