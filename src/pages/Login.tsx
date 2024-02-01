import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import banner from '../assets/13560988_5277015.jpg'
import { useForm, SubmitHandler } from "react-hook-form"
import { loginInputData } from "../data/data";
import { ILoginData } from "../interface/interfaces";
import ErrorMsg from "../components/errorMsg";
import { loginSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  email: string;
  password:string;
}

const LoginPage = () => {
  const { register, handleSubmit ,formState:{errors}} = useForm<FormValues>(
    {resolver:yupResolver(loginSchema)}
  )
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  console.log(errors);
  
  const renderLoginInput = loginInputData.map(({name,placeholder,type}:ILoginData)=>
    (<>
      <Input
              placeholder={placeholder}
              {...register(name)}
              type={type}
            />
            <ErrorMsg msg={errors?.[name]?.message} />
    </>))
  return (
    <div className="w-full items-center h-screen mx-auto flex justify-evenly ">
      <div className="w-1/2 lg:flex hidden">
        <img src={banner} alt="banner-img" className="rounded-lg h-full w-full" />
      </div>
      <div>
        <h2 className="text-center mb-4 text-3xl font-semibold">Login to get access!</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {
          renderLoginInput
        }

        <Button fullWidth>Login</Button>
      </form>
      </div>
      
    </div>
  );
};

export default LoginPage;
