import React from "react"
import { Text, TouchableOpacity } from "react-native"

interface Buttonprops {
    children: React.ReactNode,
    aksi : () => void,
    style : any
}

const Button = ({style,aksi,children} : Buttonprops) => {
  return (
    <TouchableOpacity style={style} onPress={aksi}>
        <Text style={{ color: "white", fontWeight: 800 }}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button
