interface iProps {}

const CreateTask = ({}: iProps) => {
  return (
    <div>
      <input type="text" className="w-full  p-2 rounded-lg mt-2" />
      <textarea className="w-full bg- p-2 rounded-lg mt-2" />
    </div>
  );
};
export default CreateTask;
  