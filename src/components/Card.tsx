import { View, ViewProps } from "react-native";

export default function Card({ children, ...props }: ViewProps) {
    return (
        <View
            {...props}
            className="bg-[#0B0D14] border border-white/10 rounded-2xl p-4"
        >
            {children}
        </View>
    );
}
