import React from "react";
import Input from "./components/Input";

const SayHello = ({ name }: { name: string }): JSX.Element => (
    <div>Hey {name}, say hello to TypeScript.</div>
);

export { SayHello, Input };