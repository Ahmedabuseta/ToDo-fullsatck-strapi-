import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import banner from "../assets/13560988_5277015.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../components/errorMsg";
import { registerInputData } from "../data/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation";
import { IRegisterData } from "../interface/interfaces";

type FormValues = {
  email: string;
  userName: string;
  password: string;
};
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>(
    {resolver:yupResolver(registerSchema)}
  );
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  console.log(errors);

  const renderRegisterForm = registerInputData.map(({name,placeholder,type}:IRegisterData)=>
  (<>
  
    <Input
            placeholder={placeholder}
            {...register(name)}
            type={type}
          />
          <ErrorMsg msg={errors?.[name]?.message} />
  </>))
  return (
    <div className="w-full items-center h-screen mx-auto flex justify-evenly  ">
      <div className="lg:w-1/2 lg:h-full  lg:flex hidden">
        <img
          src={banner}
          alt="banner-img"
          className="rounded-lg h-full w-full"
        />
      </div>
      <div className="max-w-lg">
        <h2 className="text-center mb-4 text-3xl font-semibold">
          Register to get access!
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {renderRegisterForm}
          <Button fullWidth>Register</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
