import { ReactNode } from "react"
import { Platform, TextInput, TextInputProps, View } from "react-native"
import clsx from "clsx"
import { colors } from "@/styles/colors"

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = {
    children: ReactNode
    variants?: Variants
}

function Input({ children, variants = "primary" }: InputProps) {
    return <View className={clsx(
        "w-full h-16 flex-row items-center gap-2",
        { "h-14 px-4 rounded-lg border border-zinc-800": variants !== "primary" },
        { "bg-zinc-950": variants === "secondary" },
        { "bg-zinc-950": variants === "tertiary" }
    )}>
        {children}
    </View>
}

function Field({...rest}: TextInputProps) {
    return (
        <TextInput 
        className="flex-1 text-zinc-100 text-lg font-regular" 
        placeholderTextColor={colors.zinc[400]}
        cursorColor={colors.zinc[100]}
        selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
        {...rest}
        />
    )

}

Input.Field = Field

export { Input }