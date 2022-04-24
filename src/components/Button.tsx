import { ButtonHTMLAttributes } from "react"
import '../style/Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>//tipagem das propriedades

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}