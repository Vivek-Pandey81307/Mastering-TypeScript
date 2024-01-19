import { ReactNode } from "react";

type PropsType={
    heading:string,
    count?:number,
    func1:(a:string)=>void,
    children: ReactNode,
};

const Box = ({heading,count=5,func1,children} : PropsType) => {
  func1("alerted!");
  return (
    <div>
        <h1>{heading}</h1>
        {count &&<p>{count}</p>}
        {children}
    </div>
  )
}

export default Box