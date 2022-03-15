import { Child } from './Child';
const Parent = () => {
  return <Child
    color="red"
    onClick={() => console.log("I am clicked")}>
    </Child>
};

export default Parent;
