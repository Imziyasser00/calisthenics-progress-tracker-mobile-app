import { Text, Pressable, PressableProps } from "react-native";

type Props = PressableProps & {
    label: string;
};

export default function Button({ label, ...props }: Props) {
    return (
        <Pressable
            {...props}
            className="bg-purple-500 rounded-xl py-4 items-center active:opacity-80"
        >
            <Text className="text-black font-semibold text-lg">{label}</Text>
        </Pressable>
    );
}
